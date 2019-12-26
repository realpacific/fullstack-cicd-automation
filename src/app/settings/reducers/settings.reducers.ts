import {createReducer, on} from '@ngrx/store';
import {INITIAL_SETTING_STATE} from '../../models/app.models';
import {updateUiState} from '../actions/settings.actions';


const reducer = createReducer(INITIAL_SETTING_STATE,
  on(updateUiState, (state, action) => {
    state = {
      ...state,
      ...action.data
    };
    return state;
  }),
);


export function settingReducer(state, action) {
  return reducer(state, action);
}
