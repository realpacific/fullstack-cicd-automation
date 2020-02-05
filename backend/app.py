import os
import sys

from flask import request, Flask, jsonify, abort
from flask.json import JSONEncoder
from flask_cors import CORS
from flask_socketio import SocketIO, emit

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'Chatbot')))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'service')))
print(sys.path)
from service import *


class CustomJSONEncoder(JSONEncoder):
  def default(self, obj):
    if isinstance(obj, Company) or isinstance(obj, Conversation):
      return vars(obj)
    return JSONEncoder.default(self, obj)


app = Flask(__name__)
app.json_encoder = CustomJSONEncoder
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

service = CompanyService()
conversation_service = ConversationService()


@app.route('/companies/reload')
def reload():
  return jsonify(service.load_data()), 200


@app.route('/companies')
def get_all():
  return jsonify(service.get_all()), 200


@app.route('/companies/<company_id>')
def get_by_id(company_id):
  result = service.get_by_id(company_id)
  if result is None:
    return abort(404)
  return jsonify(result), 200


@app.route('/companies', methods=['POST'])
def add_new():
  if request.json.get('name') is None:
    abort(400)
  company = service.add(request.json['name'])
  return jsonify(company), 201


@app.route('/companies/<company_id>', methods=['DELETE'])
def delete_by_id(company_id):
  result = service.remove_by_id(company_id)
  if result is None:
    return abort(404)
  else:
    return jsonify(result), 200


@socketio.on('message')
def handle_my_custom_event(message: dict):
  user_message = conversation_service.receive(message.get('text'), message.get('sender'))
  # Send message received acknowledgement to the clients
  emit('ack', vars(user_message), json=True)
  # Send reply to the previous message
  emit('response', vars(conversation_service.reply(user_message)), json=True)


if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0', debug=True, log_output=True)
