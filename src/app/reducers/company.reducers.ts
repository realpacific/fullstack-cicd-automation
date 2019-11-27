import {loadCompaniesSuccess} from '../actions/company.actions';
import {createReducer, on} from '@ngrx/store';
//
// export function companyReducer(state = [], action: Actions) {
//   switch (action.type) {
//     case LOAD_COMPANIES_SUCCESS:
//       return action.payload;
//     default:
//       return state;
//   }
// }


const reducer = createReducer([],
  on(loadCompaniesSuccess, (state, action) => {
    state = action.response;
    return state;
  }));

export function counterReducer(state, action) {
  return reducer(state, action);
}
