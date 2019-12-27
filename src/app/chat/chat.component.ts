import {Component, OnDestroy, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';
import {Conversation} from '../widget/conversation-box/conversation.model';
import {Store} from '@ngrx/store';
import {ChatState} from './chat.model';
import {receivedReply, sendConversationSuccess} from './actions/chat.actions';
import {UiState} from '../settings/settings.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  conversations$: Observable<Conversation[]>;
  username: string;

  constructor(private socket: Socket, private store: Store<{ chatState: ChatState, settingState: UiState }>) {
    this.conversations$ = this.store.select(state => state.chatState.conversations);
    this.store.select(state => state.settingState.name).subscribe(res => this.username = res);
  }

  ngOnInit() {
    this.socket.removeAllListeners('response');
    this.socket.on('connect', () => {
      console.log('Connected!');
      // Server sends acknowledgement on 'ack'
      this.socket.fromEvent<Conversation>('ack').subscribe(data => {
        this.store.dispatch(sendConversationSuccess({
          data
        }));
      });
      // Server sends its reply on 'response'
      this.socket.fromEvent<Conversation>('response')
        .subscribe(data => {
          this.store.dispatch(receivedReply({
            data
          }));
        });
    });

  }

  sendMessage(value: string) {
    this.socket.emit('message', new Conversation(this.username, value));
  }


  ngOnDestroy(): void {
    ['response', 'ack', 'connect'].forEach(it => {
      this.socket.removeAllListeners(it);
    });
  }
}
