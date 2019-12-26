import {Component, OnInit} from '@angular/core';
import {UiState} from '../models/app.models';
import {Store} from '@ngrx/store';
import {updateUiState} from './actions/settings.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userSettings: UiState;

  constructor(private store: Store<{ settingState: UiState }>) {
    this.store.select(state => state.settingState).subscribe(data => {
      this.userSettings = data;
    });
  }

  ngOnInit() {
  }

  onChange(fieldName: string, $event: any) {
    this.userSettings[fieldName] = $event;
    this.store.dispatch(updateUiState({data: this.userSettings}));
  }
}
