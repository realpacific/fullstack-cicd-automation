import {createReducer, on} from '@ngrx/store';
import {INITIAL_CHAT_STATE} from '../chat.model';
import {clearDraft, loadAsDraft, receivedReply, sendConversationSuccess} from '../actions/chat.actions';

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
  }),
  on(loadAsDraft, (state, action) => {
    return {
      ...state,
      draft: action.data
    };
  }),
  on(clearDraft, (state, action) => {
    return {
      ...state,
      draft: undefined
    };
  })
);

export function chatReducer(state, action) {
  return reducer(state, action);
}
