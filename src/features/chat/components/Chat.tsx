'use client'

import { useEffect, useState } from 'react';
import ChatInput from './units/ChatInput';
import ChatMessageList from './units/ChatMessageList';
import ChatBottomPanel from './units/ChatBottomPanel';
import { mockMessages } from '../consts/messagesData';
import { TMessage } from '../models/messages.model';
import { useChatCommandsContext } from '../contexts/CommandsProvider';

const Chat = () => {
  const { commandMessage } = useChatCommandsContext();

  const [messages, setMessages] = useState<TMessage[]>(mockMessages);

  const handleSendMessage = (message: TMessage) => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    if (commandMessage) handleSendMessage(commandMessage);
  }, [commandMessage]);

  return (
    <div className="relative flex flex-col h-[500px] shrink grow w-96 max-w-screen-md bg-gray-900 text-white">
      <ChatMessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
      <ChatBottomPanel />
    </div>
  );
};

export default Chat;
