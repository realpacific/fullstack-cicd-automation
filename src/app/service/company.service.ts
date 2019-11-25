import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Company {
  id: string;
  name: string;
}

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {
  }


  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${BASE_URL}/companies`);
  }

  deleteCompanies(id: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/companies/${id}`);
  }

  addCompany(name: string): Observable<any> {
    return this.http.post<Company>(`${BASE_URL}/companies`, {
        name
      }
    );
  }
}
