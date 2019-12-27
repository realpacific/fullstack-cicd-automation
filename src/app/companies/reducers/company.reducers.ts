import {addCompanySuccessAction, deleteCompanySuccessAction, loadCompaniesSuccess} from '../actions/company.actions';
import {createReducer, on} from '@ngrx/store';
import {INITIAL_COMPANY_STATE} from '../company.models';


const reducer = createReducer(INITIAL_COMPANY_STATE,
  on(loadCompaniesSuccess, (state, action) => {
    state = {
      companies: action.response
    };
    return state;
  }),
  on(deleteCompanySuccessAction, (state, action) => {
    state = {
      ...state,
      companies: state.companies.filter(s => action.response.id !== s.id)
    };
    return state;
  }),
  on(addCompanySuccessAction, (state, action) => {
    state.companies.push(action.response);
    return state;
  })
);


export function companyReducer(state, action) {
  return reducer(state, action);
}
