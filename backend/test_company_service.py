import os
import sys
import unittest

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'Chatbot')))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), 'service')))
from service import *


class TestCompanyService(unittest.TestCase):
    def setup_method(self, method):
        self.service = CompanyService()

    def test_get_all_companies(self):
        assert len(self.service.get_all()) == 8

    def test_get_by_id(self):
        company = self.service.get_by_id(2)
        self.assertIsNotNone(company)
        assert company.name == 'Google'
        assert company.id == 2

    def test_add_company(self):
        name = 'Test'
        self.service.add(name)
        self.assertEqual(len(list(filter(lambda c: c.name == name, self.service.get_all()))), 1)

    def test_delete(self):
        initial_size = len(self.service.get_all())
        delete_id = 1
        self.service.remove_by_id(delete_id)
        self.assertEqual(len(self.service.get_all()), initial_size - 1)
        self.assertEqual(len(list(filter(lambda c: c.id == delete_id, self.service.get_all()))), 0)


if __name__ == '__main__':
    unittest.main()
