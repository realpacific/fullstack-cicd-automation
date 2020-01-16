export interface UiState {
  isShowFullScreen: boolean;
  name: string;
  notes: string;
}

export const INITIAL_SETTING_STATE: UiState = {
  name: 'Prashant',
  isShowFullScreen: true,
  notes: '',
};
