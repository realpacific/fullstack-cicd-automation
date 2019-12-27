import {Conversation} from '../widget/conversation-box/conversation.model';

export interface ChatState {
  conversations: Conversation[];
}

export const INITIAL_CHAT_STATE: ChatState = {
  conversations: []
};
