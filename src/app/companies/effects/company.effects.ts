import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  addCompanyAction,
  addCompanySuccessAction,
  deleteCompanyAction,
  deleteCompanySuccessAction,
  loadCompanies,
  loadCompaniesSuccess
} from '../actions/company.actions';
import {map, switchMap} from 'rxjs/operators';
import {CompanyService} from '../company.service';

@Injectable()
export class CompanyEffect {

  constructor(private companyService: CompanyService, private action$: Actions) {
  }

  @Effect() loadCompanies$ = this.action$.pipe(
    ofType(loadCompanies),
    switchMap((x, i) => this.companyService.getCompanies()),
    map(companies => loadCompaniesSuccess({
      response: companies
    }))
  );


  @Effect() deleteCompanies = this.action$.pipe(
    ofType(deleteCompanyAction),
    switchMap(action => this.companyService.deleteCompanies(action.id)),
    map(res => deleteCompanySuccessAction({response: res}))
  );


  @Effect() addCompany = this.action$.pipe(
    ofType(addCompanyAction),
    switchMap(action => {
      console.log(action);
      return this.companyService.addCompany(action.name);
    }),
    map(res => addCompanySuccessAction({response: res}))
  );
}
