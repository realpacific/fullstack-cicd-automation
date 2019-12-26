import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {addCompanyAction, deleteCompanyAction, loadCompanies} from './actions/company.actions';
import {Company, CompanyState, UiState} from '../models/app.models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies$: Observable<Company[]>;
  newCompany: string;
  headers = ['id', 'name'];
  uiState: UiState;

  constructor(
    private companyState: Store<{ companyState: CompanyState }>,
    private settingState: Store<{ settingState: UiState }>
  ) {
    this.companies$ = this.companyState.select(state => state.companyState.companies);
    this.settingState.select(state => state.settingState).subscribe(data => {
      this.uiState = data;
    });

  }

  ngOnInit(): void {
    this.companyState.dispatch(loadCompanies());
  }

  deleteId(company) {
    this.companyState.dispatch(deleteCompanyAction({id: company.id}));
  }

  addCompany() {
    if (this.newCompany) {
      this.companyState.dispatch(addCompanyAction({name: this.newCompany}));
    }
  }
}
