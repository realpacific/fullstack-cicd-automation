import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UiState} from './models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  username: string;

  constructor(private settingsStore: Store<{ settingState: UiState }>) {
    settingsStore.select(state => state.settingState.name).subscribe(data => {
      this.username = data;
    });
  }

  ngOnInit() {

  }
}
