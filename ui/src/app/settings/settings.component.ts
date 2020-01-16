import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {updateUiState} from './actions/settings.actions';
import {UiState} from './settings.model';

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
    const updatedSettings = {...this.userSettings};
    updatedSettings[fieldName] = $event;
    this.store.dispatch(updateUiState({data: updatedSettings}));
  }
}
