import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {addCompanyAction, deleteCompanyAction, loadCompanies} from './actions/company.actions';
import {Company, CompanyState} from './company.models';
import {UiState} from '../settings/settings.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
})
export class CompanyComponent implements OnInit {

  companies$: Observable<Company[]>;
  headers = ['id', 'name'];
  uiState: UiState;

  constructor(private store: Store<{ companyState: CompanyState, settingState: UiState }>) {
    this.companies$ = this.store.select(state => state.companyState.companies);
    this.store.select(state => state.settingState).subscribe(data => {
      this.uiState = data;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
  }

  deleteId(company) {
    this.store.dispatch(deleteCompanyAction({id: company.id}));
  }

  addCompany($event: string) {
    if ($event) {
      this.store.dispatch(addCompanyAction({name: $event}));
    }
  }
}
