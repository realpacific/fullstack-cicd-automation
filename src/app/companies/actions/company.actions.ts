import {createAction, props} from '@ngrx/store';
import {Company} from '../company.models';

export const LOAD_COMPANIES = '[COMPANIES] Request load';
export const LOAD_COMPANIES_SUCCESS = '[COMPANIES] Loaded';
export const DELETE_COMPANY = '[COMPANIES] Request delete';
export const DELETE_COMPANY_SUCCESS = '[COMPANIES] Deleted';
export const ADD_COMPANY = '[COMPANIES] Request add';
export const ADD_COMPANY_SUCCESS = '[COMPANIES] Addeda';

export const loadCompanies = createAction(
  LOAD_COMPANIES
);

export const loadCompaniesSuccess = createAction(
  LOAD_COMPANIES_SUCCESS, props<{ response: Company[] }>()
);

export const deleteCompanyAction = createAction(
  DELETE_COMPANY, props<{ id: string; }>(),
);

export const deleteCompanySuccessAction = createAction(
  DELETE_COMPANY_SUCCESS, props<{ response: Company; }>(),
);

export const addCompanyAction = createAction(
  ADD_COMPANY, props<{ name: string; }>()
);


export const addCompanySuccessAction = createAction(
  ADD_COMPANY_SUCCESS, props<{ response: Company; }>()
);
