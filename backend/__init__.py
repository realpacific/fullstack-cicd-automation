from flask import request, Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = [
  {
    "id": 1,
    "name": "Microsoft"
  },
  {
    "id": 2,
    "name": "Google"
  },
  {
    "id": 3,
    "name": "Netflix"
  },
  {
    "id": 4,
    "name": "Pied Piper"
  },
  {
    "id": 5,
    "name": "Hooli"
  }
]


@app.route('/companies')
def hello():
  return jsonify(db), 200


@app.route('/companies/<id>')
def hello_name(id):
  return db.filter(lambda x: str(x['id']) == str(id))


@app.route('/companies', methods=['POST'])
def add_task():
  if not request.json or not 'name' in request.json:
    abort(400)
  new_company = {
    'id': db[-1]['id'] + 1,
    'name': request.json['name']
  }
  db.append(new_company)
  return jsonify(new_company), 201


@app.route('/companies/<id>', methods=['DELETE'])
def delete_task(id):
  for i in db:
    if str(i['id']) == str(id):
      db.remove(i)
  return jsonify(db), 200


if __name__ == '__main__':
  app.run()
