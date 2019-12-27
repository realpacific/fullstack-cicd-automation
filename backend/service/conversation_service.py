import uuid
from typing import List

from backend.Chatbot.chatbot import Chat


class Conversation:
  def __init__(self, text, sender) -> None:
    self.text = text
    self.id = str(uuid.uuid4())
    self.sender = sender


class ConversationService:
  def __init__(self) -> None:
    self.chat = Chat()
    self._id = uuid.uuid4()
    self._conversations: List[Conversation] = []

  def receive(self, text: str, sender: str) -> Conversation:
    user_conversation = Conversation(text, sender)
    self._conversations.append(user_conversation)
    return user_conversation

  def reply(self, conversation: Conversation):
    bot_response = Conversation(self.chat.respond(conversation.text), 'bot')
    self._conversations.append(bot_response)
    return bot_response
