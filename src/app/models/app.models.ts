export interface Company {
  id: string;
  name: string;
}

export interface CompanyState {
  companies: Company[];
}

export interface UiState {
  isShowFullScreen: boolean;
  name: string;
  notes: string;
}

export const INITIAL_COMPANY_STATE: CompanyState = {
  companies: []
};

export const INITIAL_SETTING_STATE: UiState = {
  name: 'Prashant',
  isShowFullScreen: true,
  notes: ''
};
