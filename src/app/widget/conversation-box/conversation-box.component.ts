import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Conversation} from './conversation.model';

@Component({
  selector: 'app-conversation-box',
  template: `
    <div [ngClass]="(conversation.sender=='bot')? 'received': 'sent'" class="card box">
      <div class="card-text">
        <span>{{conversation.text}}</span>
      </div>
    </div>
  `,
  styleUrls: ['./conversation-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ConversationBoxComponent implements OnInit {

  @Input()
  conversation: Conversation;

  constructor() {
  }

  ngOnInit() {
  }
}
