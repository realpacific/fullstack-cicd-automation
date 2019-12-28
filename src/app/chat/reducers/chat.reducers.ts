import {createReducer, on} from '@ngrx/store';
import {INITIAL_CHAT_STATE} from '../chat.model';
import {receivedReply, sendConversationSuccess} from '../actions/chat.actions';

const reducer = createReducer(INITIAL_CHAT_STATE,
  on(sendConversationSuccess, (state, action) => {
    return {
      ...state,
      conversations: state.conversations.concat(action.data)
    };
  }),
  on(receivedReply, (state, action) => {
    return {
      ...state,
      conversations: state.conversations.concat(action.data)
    };
  })
);

export function chatReducer(state, action) {
  return reducer(state, action);
}
