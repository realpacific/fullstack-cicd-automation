export class Conversation {
  id: string;
  sender: string;
  text: string;


  constructor(sender: string, text: string) {
    this.sender = sender;
    this.text = text;
  }

  static from(sender: string, text: string): Conversation {
    return new Conversation(sender, text);
  }
}
