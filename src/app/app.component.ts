import {Component, OnInit} from '@angular/core';
import {Company} from './service/company.service';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './models/app-state';
import {AddCompanyAction, DeleteCompanyAction, LoadCompaniesAction} from './actions/company.actions';

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
    this.store.dispatch(new LoadCompaniesAction());
  }


  deleteId(company) {
    this.store.dispatch(new DeleteCompanyAction(company.id));
  }

  addCompany() {
    if (this.newCompany) {
      this.store.dispatch(new AddCompanyAction(this.newCompany));
    }
  }
}
