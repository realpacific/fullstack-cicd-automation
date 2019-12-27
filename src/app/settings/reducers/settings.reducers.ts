import {createReducer, on} from '@ngrx/store';
import {updateUiState} from '../actions/settings.actions';
import {INITIAL_SETTING_STATE} from '../settings.model';


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
