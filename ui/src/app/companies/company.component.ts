import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {addCompanyAction, deleteCompanyAction, loadCompanies} from './actions/company.actions';
import {Company, CompanyState} from './company.models';
import {UiState} from '../settings/settings.model';

@Component({
  selector: 'app-company',
  template: `
    <div class="card p-4">
      <rpa-dope-table [data]="companies$ | async" [headers]="headers"
                      (output$)="deleteId($event)"></rpa-dope-table>

      <div class="align-self-center m-4">

        <div class="input-group mb-3 ">
          <input #companyName class="form-control" placeholder="Add new company" type="text"/>
          <div class="input-group-append">
            <button (click)="addCompany(companyName.value)" class="btn btn-outline-primary">+</button>
          </div>
        </div>
      </div>
    </div>
  `,
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
