import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rpa-dope-table',
  template: `
      <table>
          <tr class="thead">
              <ng-container *ngFor="let header of headers">
                  <th>{{header}}</th>
              </ng-container>
              <th>Actions</th>
          </tr>
          <tr *ngFor="let datum of data">
              <ng-container *ngFor="let header of headers">
                  <td>{{datum[header]}}</td>
              </ng-container>
              <td>
                  <button (click)="onClick(datum)">Delete</button>
              </td>
          </tr>
      </table>

  `,
  styleUrls: ['dope-table.component.css']
})
export class DopeTableComponent implements OnInit {

  @Input()
  data = [];

  @Input()
  headers: string[];

  @Output()
  output$: EventEmitter<string>;


  constructor() {
    this.output$ = new EventEmitter();
  }

  ngOnInit() {
  }

  onClick(value) {
    this.output$.emit(value);
  }
}
