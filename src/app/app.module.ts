import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DopeTableModule} from 'dope-table';
import {ToggleFullscreenDirective} from './toggle-fullscreen.directive';
import {counterReducer} from './companies/reducers/company.reducers';
import {CompanyEffect} from './companies/effects/company.effects';
import {CompanyComponent} from './companies/company.component';
import {SettingsComponent} from './settings/settings.component';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleFullscreenDirective,
    CompanyComponent,
    SettingsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({companies: counterReducer}),
    EffectsModule.forRoot([CompanyEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    FormsModule,
    DopeTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
