import BotImage from '../assets/robot.png';
import UserImage from '../assets/user.png';
import * as StringUtils from '../common/StringCommon';
import './ChatMessage.css'

export function ChatMessage(props) {
  const [chatList] = props.chatList;
  return chatList.map(msg => {
    return (
      <ChatBox msg={msg} key={msg.id} />
    );
  });
}

function ChatBox(props) {
  const msg = props.msg;
  return (
    <div className={msg.type === StringUtils.USER ? 'chat-message-user' : 'chat-message-bot'}>
      {msg.type === StringUtils.BOT && <img src={BotImage} className='chat-message-profile' />}
      <div className='chat-message-text'>
        {msg.text}
        <div className='chat-message-date'>{msg.date}</div>
      </div>
      {msg.type === StringUtils.USER && <img src={UserImage} className='chat-message-profile' />}
    </div>
  );
}