import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Company} from './service/company.service';
import {CompanyState} from './models/company-state';
import {addCompanyAction, deleteCompanyAction, loadCompanies} from './actions/company.actions';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies$: Observable<Company[]>;
  newCompany: string;
  headers = ['id', 'name'];

  constructor(private store: Store<CompanyState>) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCompanies());
  }

  deleteId(company) {
    this.store.dispatch(deleteCompanyAction({id: company.id}));
  }

  addCompany() {
    if (this.newCompany) {
      this.store.dispatch(addCompanyAction({name: this.newCompany}));
    }
  }
}
