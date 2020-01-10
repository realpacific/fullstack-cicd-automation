import {createAction, props} from '@ngrx/store';
import {Conversation} from '../../widget/conversation-box/conversation.model';

export const sendConversationSuccess = createAction('[SENT] chat', props<{ data: Conversation }>());

export const receivedReply = createAction('[REPLY] chat', props<{ data: Conversation }>());


export const loadAsDraft = createAction('[LOAD] draft', props<{ data: string }>());
export const clearDraft = createAction('[CLEAR] draft');
