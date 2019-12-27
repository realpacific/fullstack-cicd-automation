import {createAction, props} from '@ngrx/store';
import {Conversation} from '../../widget/conversation-box/conversation.model';

export const sendConversation = createAction('[SEND] chat', props<{ data: Conversation }>());

export const sendConversationSuccess = createAction('[SENT] chat', props<{ data: Conversation }>());

export const receivedReply = createAction('[REPLY] chat', props<{ data: Conversation }>());
