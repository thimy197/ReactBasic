import BotImage from '../assets/robot.png';
import BotLoadingGif from '../assets/loading-spinner.gif';

export function BotThinking() {
  return (
    <div>
      <img src={BotImage} className='chat-message-profile' />
      <img src={BotLoadingGif} alt="Loading..." className='chat-message-profile' />
    </div>
  );
}