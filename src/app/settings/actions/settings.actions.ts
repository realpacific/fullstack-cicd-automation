import {createAction, props} from '@ngrx/store';
import {UiState} from '../../models/app.models';

export const updateUiState = createAction(
  '[UPDATE] uiState', props<{ data: UiState }>()
);

