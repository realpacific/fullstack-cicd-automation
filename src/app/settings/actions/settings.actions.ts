import {createAction, props} from '@ngrx/store';
import {UiState} from '../settings.model';

export const updateUiState = createAction(
  '[UPDATE] uiState', props<{ data: UiState }>()
);

