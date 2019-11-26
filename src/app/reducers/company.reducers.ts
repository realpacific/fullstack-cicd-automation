import {Action, LOAD_COMPANIES_SUCCESS} from '../actions/company.actions';

export function companyReducer(state = [], action: Action) {
  switch (action.type) {
    case LOAD_COMPANIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
