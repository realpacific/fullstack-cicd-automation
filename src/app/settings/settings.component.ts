import {Component, OnInit} from '@angular/core';

export interface UserSettings {
  name: string;
  isFullScreenShown: boolean;
  notes?: string;
}

export const INITIAL_SETTING_STATE = {
  name: 'Prashant',
  isFullScreenShown: false,
  notes: undefined
};


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userSettings: UserSettings = INITIAL_SETTING_STATE;

  constructor() {
  }

  ngOnInit() {
  }

}
