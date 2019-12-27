export interface Company {
  id: string;
  name: string;
}

export interface CompanyState {
  companies: Company[];
}

export const INITIAL_COMPANY_STATE: CompanyState = {
  companies: []
};
