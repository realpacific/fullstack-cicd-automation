import {Component, OnInit} from '@angular/core';
import {Company} from './service/company.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './models/app-state';
import {addCompanyAction, deleteCompanyAction, loadCompanies} from './actions/company.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  companies$: Observable<Company[]>;
  newCompany: string;
  headers = ['id', 'name'];

  constructor(private store: Store<AppState>) {
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
