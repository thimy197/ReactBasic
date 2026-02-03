import { useState, useEffect } from 'react';
import { ChatInput } from './modules/ChatInput';
import { ChatMessages } from './modules/ChatMessages'
import { Chatbot } from 'supersimpledev';
import './App.css'

function App() {
  const chatList = useState([]);
  const isLoading = useState(false);
  const [messages, setMessages] = chatList;

  /* add some message to Chatbot */
  useEffect(() => {
    Chatbot.addResponses({"test": "Yes, this is a test response."});
    Chatbot.addResponses({"help": "Yes, how can I assist you?"});

    const chatListStorage = localStorage.getItem("chatList");
    if (chatListStorage && chatListStorage.length > 0 && chatListStorage !== '[]') {
      //console.log("local storage: ", chatListStorage);
      setMessages(JSON.parse(chatListStorage));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('chatList', JSON.stringify(messages));
  },[messages]);

  return (
    <div className="chatbox">
      <ChatMessages chatList={chatList} isLoading={isLoading} />
      <ChatInput chatList={chatList} isLoading={isLoading} />
    </div>
  );
}

export default App
