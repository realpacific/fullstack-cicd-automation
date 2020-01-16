import {createReducer, on} from '@ngrx/store';
import {INITIAL_CHAT_STATE} from '../chat.model';
import {clearDraft, loadAsDraft, receivedReply, sendConversationSuccess} from '../actions/chat.actions';
import {Conversation} from '../../widget/conversation-box/conversation.model';

const reducer = createReducer(INITIAL_CHAT_STATE,
  on(sendConversationSuccess, (state, action) => {
    // To leverage ChangeDetectionStrategy.OnPush, copy the element references of items in old array into a NEW array
    // and then use the new array
    const newState: Conversation[] = [...state.conversations];
    newState.push(action.data);
    return {
      ...state,
      conversations: newState
    };
  }),
  on(receivedReply, (state, action) => {
    const newState: Conversation[] = [...state.conversations];
    newState.push(action.data);
    return {
      ...state,
      conversations: newState
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
