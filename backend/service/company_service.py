import json
from typing import List, Union


class Company:
  def __init__(self, id: int, name: str) -> None:
    self.id = id
    self.name = name

  @staticmethod
  def from_json(data):
    return Company(data['id'], data['name'])


class CompanyService:
  def __init__(self) -> None:
    self._companies: List[Company] = []
    with open('db.json') as file:
      self._db = json.load(file)
      self.load_data()

  def load_data(self) -> List[Company]:
    self._companies.clear()
    for data in self._db:
      self._companies.append(Company.from_json(data))
    return self.get_all()

  def get_all(self) -> List[Company]:
    return self._companies

  def get_by_id(self, company_id: int) -> Union[Company, None]:
    result = list(filter(lambda company: company.id == company_id, self._companies))
    if result is None or len(result) == 0:
      return None
    return result[0]

  def add(self, name: str) -> Company:
    new_company = Company(self._companies[-1].id + 1 if len(self._companies) > 0 else 1, name)
    self._companies.append(new_company)
    return new_company

  def remove_by_id(self, company_id) -> Union[Company, None]:
    result = list(filter(lambda company: str(company.id) == str(company_id), self._companies))
    if result is None or len(result) == 0:
      return None
    else:
      self._companies.remove(result[0])
      return result[0]
