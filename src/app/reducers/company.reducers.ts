import {addCompanySuccessAction, deleteCompanySuccessAction, loadCompaniesSuccess} from '../actions/company.actions';
import {createReducer, on} from '@ngrx/store';
import {Company} from '../service/company.service';


const reducer = createReducer([] as Company[],
  on(loadCompaniesSuccess, (state, action) => {
    state = action.response;
    return state;
  }),
  on(deleteCompanySuccessAction, (state, action) => state.filter(s => action.response.id !== s.id)),
  on(addCompanySuccessAction, (state, action) => {
    state.push(action.response);
    return state;
  })
);

export function counterReducer(state, action) {
  return reducer(state, action);
}
