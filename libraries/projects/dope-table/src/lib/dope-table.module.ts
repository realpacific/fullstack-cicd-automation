import {NgModule} from '@angular/core';
import {DopeTableComponent} from './dope-table.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [DopeTableComponent],
  imports: [
    CommonModule
  ],
  exports: [DopeTableComponent]
})
export class DopeTableModule {
}
