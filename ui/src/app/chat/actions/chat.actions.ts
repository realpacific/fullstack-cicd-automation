import {createAction, props} from '@ngrx/store';
import {Conversation} from '../../widget/conversation-box/conversation.model';

export const sendConversationSuccess = createAction('[CHAT] Sent', props<{ data: Conversation }>());

export const receivedReply = createAction('[CHAT] Received reply', props<{ data: Conversation }>());


export const loadAsDraft = createAction('[CHAT] Load as draft', props<{ data: string }>());
export const clearDraft = createAction('[CHAT] Clear draft');
