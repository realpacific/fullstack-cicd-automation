import {createReducer, on} from '@ngrx/store';
import {INITIAL_CHAT_STATE} from '../chat.model';
import {receivedReply, sendConversationSuccess} from '../actions/chat.actions';

const reducer = createReducer(INITIAL_CHAT_STATE,
  on(sendConversationSuccess, (state, action) => {
    state.conversations.push(action.data);
    return state;
  }),
  on(receivedReply, (state, action) => {
    state.conversations.push(action.data);
    return state;
  })
);

export function chatReducer(state, action) {


  return reducer(state, action);
}
