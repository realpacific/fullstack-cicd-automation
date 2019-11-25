import {Company} from '../service/company.service';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';

export class LoadCompaniesAction {
  readonly type = LOAD_COMPANIES;

  constructor() {
  }
}

export class LoadCompaniesSuccessAction {
  readonly type = LOAD_COMPANIES_SUCCESS;

  constructor(public payload: Company[]) {
  }
}

export class DeleteCompanyAction {
  readonly type = DELETE_COMPANY;

  constructor(public id: string) {
  }
}


export class DeleteCompanySuccessAction {
  readonly type = DELETE_COMPANY_SUCCESS;

  constructor() {
  }
}


export class AddCompanyAction {
  readonly type = ADD_COMPANY;

  constructor(public name: string) {
  }
}

export class AddCompanySuccessAction {
  readonly type = ADD_COMPANY_SUCCESS;

  constructor() {
  }
}


export type Action =
  LoadCompaniesAction
  | LoadCompaniesSuccessAction
  | DeleteCompanyAction
  | DeleteCompanySuccessAction
  | AddCompanyAction
  | AddCompanySuccessAction;
