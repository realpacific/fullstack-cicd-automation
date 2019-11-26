import {Injectable} from '@angular/core';
import {CompanyService} from '../service/company.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  ADD_COMPANY,
  AddCompanyAction,
  DELETE_COMPANY,
  DeleteCompanyAction,
  DeleteCompanySuccessAction,
  LOAD_COMPANIES,
  loadCompaniesSuccess
} from '../actions/company.actions';
import {map, switchMap} from 'rxjs/operators';


@Injectable()
export class CompanyEffect {

  constructor(private companyService: CompanyService, private action$: Actions) {
  }


  @Effect() loadCompanies$ = this.action$.pipe(
    ofType(LOAD_COMPANIES),
    switchMap((x, i) => this.companyService.getCompanies()),
    map(companies => loadCompaniesSuccess({
      response: companies
    }))
  );


  @Effect() deleteCompanies = this.action$.pipe(
    ofType(DELETE_COMPANY),
    switchMap((action: DeleteCompanyAction, i) => this.companyService.deleteCompanies(action.id)),
    map(res => new DeleteCompanySuccessAction()),
    switchMap((x, i) => this.companyService.getCompanies())
  );


  @Effect() addCompany = this.action$.pipe(
    ofType(ADD_COMPANY),
    switchMap((action: AddCompanyAction, i) => {
      return this.companyService.addCompany(action.name);
    }),
    map(res => new DeleteCompanySuccessAction()),
    switchMap((x, i) => this.companyService.getCompanies())
  );
}
