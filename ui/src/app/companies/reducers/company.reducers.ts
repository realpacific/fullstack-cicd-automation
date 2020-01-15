import {addCompanySuccessAction, deleteCompanySuccessAction, loadCompaniesSuccess} from '../actions/company.actions';
import {createReducer, on} from '@ngrx/store';
import {INITIAL_COMPANY_STATE} from '../company.models';


const reducer = createReducer(INITIAL_COMPANY_STATE,
  on(loadCompaniesSuccess, (state, action) => {
    return {
      ...state,
      companies: action.response
    };
  }),
  on(deleteCompanySuccessAction, (state, action) => {
    return {
      ...state,
      companies: state.companies.filter(s => action.response.id !== s.id)
    };
  }),
  on(addCompanySuccessAction, (state, action) => {
    return {
      ...state,
      companies: state.companies.concat(action.response)
    };
  })
);


export function companyReducer(state, action) {
  return reducer(state, action);
}
