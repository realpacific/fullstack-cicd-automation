import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './companies/company.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'companies', pathMatch: 'full'
  },
  {
    path: 'companies', component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
