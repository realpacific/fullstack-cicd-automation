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
import {companyReducer} from './companies/reducers/company.reducers';
import {CompanyEffect} from './companies/effects/company.effects';
import {CompanyComponent} from './companies/company.component';
import {SettingsComponent} from './settings/settings.component';
import {UserComponent} from './user/user.component';
import {settingReducer} from './settings/reducers/settings.reducers';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {ConversationBoxComponent} from './widget/conversation-box/conversation-box.component';
import {ChatComponent} from './chat/chat.component';
import {chatReducer} from './chat/reducers/chat.reducers';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../environments/environment';

const config: SocketIoConfig = {url: environment.baseUrl, options: {}};

@NgModule({
  declarations: [
    AppComponent,
    ToggleFullscreenDirective,
    CompanyComponent,
    SettingsComponent,
    UserComponent,
    ConversationBoxComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    StoreModule.forRoot({
      companyState: companyReducer,
      settingState: settingReducer,
      chatState: chatReducer
    }, {
      metaReducers: environment.production ? [] : [storeFreeze]
    }),
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
// @ts-ignore
export class AppModule {

}
