import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiState} from './settings/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  uiState: UiState;

  constructor(private settingsStore: Store<{ settingState: UiState }>) {
    settingsStore.select(state => state.settingState).subscribe(data => {
      this.uiState = data;
    });
  }

  ngOnInit() {

  }
}
