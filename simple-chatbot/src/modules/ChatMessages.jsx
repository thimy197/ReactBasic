import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { BotThinking } from './BotThinking';
import './ChatMessages.css'

export function ChatMessages({chatList, isLoading}) {
    const [isLoadingVal] = isLoading;
    const [chatListVal] = chatList;
    const chatMessageRef = useAutoScroll(chatList[0]);
    return (
        <div className='chat-message-container' ref={chatMessageRef}>
            {chatListVal.length === 0 &&
                <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>}
            <ChatMessage chatList={chatList} />
            {isLoadingVal && <BotThinking />}
        </div>
    );
}

function useAutoScroll({ dependencies }) {
  // scroll to bottom when chatList change
  const chatMessageRef = useRef(null);// initialize ref
  useEffect(() => {
    const chatContainerElement = chatMessageRef.current;
    if (chatContainerElement) {
      chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
    }
  }, [dependencies]);
  return chatMessageRef;
}
