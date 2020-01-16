import {createAction, props} from '@ngrx/store';
import {UiState} from '../settings.model';

export const updateUiState = createAction(
  '[SETTINGS] Update', props<{ data: UiState }>()
);

