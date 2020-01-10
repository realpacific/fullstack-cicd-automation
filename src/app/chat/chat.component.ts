import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Conversation} from '../widget/conversation-box/conversation.model';
import {Store} from '@ngrx/store';
import {ChatState} from './chat.model';
import {clearDraft, loadAsDraft, receivedReply, sendConversationSuccess} from './actions/chat.actions';
import {UiState} from '../settings/settings.model';
import {delay, filter, map, take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewInit {

  conversations: Conversation[] = [];
  username: string;
  draft$: Observable<string>;
  @ViewChild('chat', {static: false})
  chatScreen: ElementRef;


  @ViewChild('message', {static: false})
  inputTextElem: ElementRef;

  constructor(private socket: Socket, private store: Store<{ chatState: ChatState, settingState: UiState }>) {
    this.store.select(state => state.chatState.conversations)
      .pipe(
        map(conversations => this.conversations = conversations),
        delay(300),
        tap(_ => this.scrollToBottom())
      )
      .subscribe();

    // Load user's draft
    this.draft$ = this.store.select(state => state.chatState.draft)
      .pipe(
        filter(data => data !== undefined && data.length > 0),
        take(1)
      );

    this.draft$.subscribe(console.log);
    this.store.select(state => state.settingState.name).subscribe(res => this.username = res);
  }

  ngOnInit() {
    this.socket.connect();
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

  ngAfterViewInit(): void {
    this.inputTextElem.nativeElement.focus();
  }

  ngOnDestroy(): void {
    // Save user's input as draft
    const userInput = this.inputTextElem.nativeElement.value;
    if (userInput !== undefined && userInput.length > 0) {
      this.store.dispatch(loadAsDraft({
        data: userInput
      }));
    }
    ['response', 'ack', 'connect'].forEach(it => {
      this.socket.removeAllListeners(it);
    });
    this.socket.disconnect();
  }

  sendMessage(value: string) {
    this.socket.emit('message', new Conversation(this.username, value));
  }

  clearMessage() {
    this.inputTextElem.nativeElement.value = '';
    this.store.dispatch(clearDraft());
  }

  private scrollToBottom() {
    if (this.chatScreen) {
      const nodes = this.chatScreen.nativeElement.querySelectorAll('app-conversation-box');
      if (nodes.length > 2) {
        // Scroll to the last item then again scroll by some amount
        nodes[nodes.length - 1].scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
        window.scrollBy({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
}
