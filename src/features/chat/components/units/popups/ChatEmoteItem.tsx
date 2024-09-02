import React, { useEffect } from 'react';
import { TEmotes } from '@/features/chat/models/emotes.model';
import Image from 'next/image';
import { useChatCommandsContext } from '@/features/chat/contexts/CommandsProvider';
import { ECommandMessageType } from '@/features/chat/models/commands.model';
import { parseURI } from '@/features/chat/utils/emotes';

const ChatEmotesItem = ({ item, isActive, isPressed, onClose }: { item: TEmotes, isActive: boolean, isPressed: boolean, onClose: () => void }) => {
  const { name } = item;
  const { handleProcessCommand } = useChatCommandsContext();

  useEffect(() => {
    if (isPressed) {
      handleSubmit();
    }
  }, [isPressed]);

  const handleSubmit = () => {
    handleProcessCommand({ type: ECommandMessageType.EMOTE, value: name });
    onClose();
  };

  return (
    <div
      className={`mb-2 p-2 ${isActive && 'bg-gray-700'} hover:bg-gray-700 rounded-lg cursor-pointer`}
      onClick={() => {}}
      >
      <div
        className='flex items-start item-center text-nowrap'
        onClick={handleSubmit}>
        <Image
          className="w-5 h-5 mr-2 rounded-full"
          src={parseURI(name)}
          width={7}
          height={7}
          alt={name} />
        <span className="font-semibold text-sm text-white mr-2">{name}</span>
      </div>
    </div>
  );
};

export default ChatEmotesItem;
