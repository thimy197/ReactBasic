import { useState} from 'react';
import { Chatbot } from 'supersimpledev';
import * as StringUtils from '../common/StringCommon';
import './ChatInput.css';

export function ChatInput(props) {
  const [message, setChangeMessage] = props.chatList;
  const [isLoading, setLoading] = props.isLoading;
  // handle bot response if message have an waiting
  async function getBotMessage() {
    const lastUserMessage = message.at(-1);
    // console.log("Bot thinking..., message: " + lastUserMessage.text);
    const response = await Chatbot.getResponseAsync(lastUserMessage.text);
    setChangeMessage([
      ...message,
      { text: response, type: StringUtils.BOT, id: crypto.randomUUID(), date: StringUtils.getCurrentDateFormatted(StringUtils.FORMAT_DATE) }
    ]);
    setLoading(false);
  }
  if (isLoading) {
    getBotMessage();
  }

  // handle user message
  const [newMessage, setNewMessage] = useState('');
  function changeInput(event) {
    setNewMessage(event.target.value);
  }
  function handleKey(event) {
    if (event.key === 'Enter') {
      sendMessageAsync();
    } else if (event.key === 'Escape') {
      setNewMessage(StringUtils.EMPLTY_STRING);
    }
  }

  function sendMessageAsync() {
    setChangeMessage([
      ...message,
      { text: newMessage, type: StringUtils.USER, id: crypto.randomUUID(), date: StringUtils.getCurrentDateFormatted(StringUtils.FORMAT_DATE) }
    ]);
    // reset input
    setNewMessage(StringUtils.EMPLTY_STRING);
    // tranfer to bot
    setLoading(true);
  }

  function clearMessages() {
    setChangeMessage([]);
  }

  return (
    <div className="chat-container">
      <input type="text" placeholder="Type your message here..."
        className="chat-input"
        onChange={changeInput}
        value={newMessage}
        onKeyDown={handleKey}
        disabled={isLoading}
      />
      <button
        className="send-button"
        onClick={sendMessageAsync}
        disabled={isLoading}>Send</button>
      <button
        className="clear-button"
        onClick={clearMessages}
        disabled={isLoading}>Clear</button>
    </div>
  );
}