import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from './conversation.model';

@Component({
  selector: 'app-conversation-box',
  templateUrl: './conversation-box.component.html',
  styleUrls: ['./conversation-box.component.scss']
})
export class ConversationBoxComponent implements OnInit {

  @Input()
  conversation: Conversation;

  constructor() {
  }

  ngOnInit() {
  }
}
