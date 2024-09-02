import { useEffect, useState } from 'react';
import { Meh, ThumbsUp } from 'react-feather';
import { commandData } from '../../consts/commandsData';
import { userTags } from '../../consts/userTagsData';
import { ECommandType, TCommand } from '../../models/commands.model';
import { TUserTag } from '../../models/tag.model';
import { emotesData } from '../../consts/emotesData';
import { TEmotes } from '../../models/emotes.model';
import ChatUserTagPopup from './popups/ChatUserTagPopup';
import ChatCommandPopup from './popups/ChatCommandPopup';
import ChatEmotePopup from './popups/ChatEmotePopup';
import { UserMessage } from '../../consts/messagesData';
import { getChatTime } from '../../utils/date';
import { TMessage } from '../../models/messages.model';

const ChatInput = ({ onSendMessage }: { onSendMessage: (value: TMessage) => void }) => {
  const [commands, ] = useState(commandData);
  const [users, ] = useState(userTags);
  const [emotes, ] = useState(emotesData);

  const [filterCommands, setFilterCommands] = useState('');
  const [filterUserTags, setFilterUserTags] = useState('');
  const [filterEmotes, setFilterEmotes] = useState('');

  const [isActiveCommandPopup, setActiveCommandPopup] = useState(false);
  const [isActiveUserPopup, setActiveUserPopup] = useState(false);
  const [isActiveEmotePopup, setActiveEmotePopup] = useState(false);

  const [message, setMessage] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', () => handleKeyDown);

    return () => {
      window.removeEventListener('keydown', () => handleKeyDown);
    };
  }, []);

  const handleSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    if (message) {
      onSendMessage({
        ...UserMessage,
        timestamp: getChatTime(),
        text: message
      });
      setMessage('');
    }
  };

  const handleTypeMessage = (event: React.ChangeEvent<any>) => {
    const value = event.target.value;
    setMessage(value);
    handleProcessCommand(value);
  };

  const handleProcessCommand = (value: string) => {
    const _value = value.slice(1);
    if (value.startsWith(ECommandType.TAG)) {
      setActiveUserPopup(true);
      setFilterUserTags(_value);
    } else if (value.startsWith(ECommandType.SERVICE)) {
      setActiveCommandPopup(true);
      setFilterCommands(_value);
    } else if (value.startsWith(ECommandType.EMOTE)) {
      setActiveEmotePopup(true);
      setFilterEmotes(_value);
    } else {
      handleClosePopup();
    }
  }

  const handleFocusField = () => {
    if (message.length !== 0) {
      message.startsWith('@') && setActiveUserPopup(true);
      message.startsWith('/') && setActiveCommandPopup(true);
      message.startsWith(':') && setActiveEmotePopup(true);
    }
  };

  const handleClosePopup = () => {
    setActiveUserPopup(false);
    setActiveCommandPopup(false);
    setActiveEmotePopup(false);
    if (message.length === 0) {
      setFilterCommands('');
      setFilterUserTags('');
      setFilterEmotes('');
    }
  };

  const handleKeyDown = (event: React.ChangeEvent<any> | any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit(event);
    }
  };

  const filteredCommands = commands.filter(({ command }: TCommand) => command.toLowerCase().includes(filterCommands.toLowerCase()));
  const filteredUserTags = users.filter(({ username }: TUserTag) => username.toLowerCase().includes(filterUserTags.toLowerCase()));
  const filteredEmotes = emotes.filter(({ name }: TEmotes) => name.toLowerCase().includes(filterEmotes.toLowerCase()));

  return (
    <div className='relative'>
      <form onSubmit={handleSubmit} className="relative p-4 border-t border-gray-700 flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={handleTypeMessage}
          onClick={handleFocusField}
          placeholder="Send a message"
          className="w-full p-2 pr-20 bg-gray-900 text-white border border-gray-700 rounded-lg"
        />
        <div className="absolute top-2/4 right-5 -translate-y-2/4">
          <button
            type="button"
            className="p-2 text-white rounded-lg hover:opacity-50"
            onClick={() => alert('Cheer button clicked')}
          >
            <ThumbsUp size={15} />
          </button>
          <button
            type="button"
            className="p-2 text-white rounded-lg hover:opacity-50"
            onClick={() => alert('Emote button clicked')}
          >
            <Meh size={15} />
          </button>
        </div>
      </form>

      {isActiveUserPopup && <ChatUserTagPopup data={filteredUserTags} onClose={handleClosePopup} />}
      {isActiveCommandPopup && <ChatCommandPopup data={filteredCommands} onClose={handleClosePopup} />}
      {isActiveEmotePopup && <ChatEmotePopup data={filteredEmotes} onClose={handleClosePopup} />}
    </div>
  )
};

export default ChatInput;
