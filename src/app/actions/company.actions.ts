import {Company} from '../service/company.service';
import {createAction, props} from '@ngrx/store';
import {AppState} from '../models/app-state';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS';
export const ADD_COMPANY = 'ADD_COMPANY';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';

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
