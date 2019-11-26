import {loadCompaniesSuccess} from '../actions/company.actions';
import {createReducer, on} from '@ngrx/store'
import {AppState} from "../models/app-state";
//
// export function companyReducer(state = [], action: Actions) {
//   switch (action.type) {
//     case LOAD_COMPANIES_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// }


const _counterReducer = createReducer([],
  on(loadCompaniesSuccess, (state, action) => {
    state = action.response;
    return state;
  }));

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
