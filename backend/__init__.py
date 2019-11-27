from flask import request, Flask, jsonify, abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

companies = [
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
def get_all():
  return jsonify(companies), 200


@app.route('/companies/<company_id>')
def get_by_id(company_id):
  result = list(filter(lambda company: str(company['id']) == str(company_id), companies))
  if result is None or len(result) == 0:
    return abort(404)
  return jsonify(result[0]), 200


@app.route('/companies', methods=['POST'])
def add_new():
  if request.json.get('name') is None:
    abort(400)
  new_company = {
    'id': companies[-1]['id'] + 1,
    'name': request.json['name']
  }
  companies.append(new_company)
  return jsonify(new_company), 201


@app.route('/companies/<company_id>', methods=['DELETE'])
def delete_by_id(company_id):
  result = list(filter(lambda company: str(company['id']) == str(company_id), companies))
  if result is None or len(result) == 0:
    return abort(404)
  else:
    companies.remove(result[0])
  return jsonify(result[0]), 200


if __name__ == '__main__':
  app.run()
