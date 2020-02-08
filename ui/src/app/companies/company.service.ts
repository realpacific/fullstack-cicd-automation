import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './company.models';
import {environment} from '../../environments/environment';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }


  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${BASE_URL}/companies`);
  }

  deleteCompanies(id: string): Observable<Company> {
    return this.http.delete<Company>(`${BASE_URL}/companies/${id}`);
  }

  addCompany(name: string): Observable<any> {
    return this.http.post<Company>(`${BASE_URL}/companies`, {
        name
      }
    );
  }
}
