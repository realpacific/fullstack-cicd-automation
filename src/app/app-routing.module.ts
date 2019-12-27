import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyComponent} from './companies/company.component';
import {SettingsComponent} from './settings/settings.component';
import {UserComponent} from './user/user.component';
import {ChatComponent} from './chat/chat.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'companies', pathMatch: 'full'
  },
  {
    path: 'companies', component: CompanyComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'users', component: UserComponent
  },
  {
    path: 'chat', component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
