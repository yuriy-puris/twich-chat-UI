import React, { useEffect } from 'react';
import { ECommandMessageType, TCommand } from '@/features/chat/models/commands.model';
import { useChatCommandsContext } from '@/features/chat/contexts/CommandsProvider';

const ChatCommandItem = ({ item, isActive, isPressed, onClose }: { item: TCommand, isActive: boolean, isPressed: boolean, onClose: () => void }) => {
  const { command, description } = item;
  const { handleProcessCommand } = useChatCommandsContext();

  useEffect(() => {
    if (isPressed) {
      handleSubmit();
    }
  }, [isPressed]);

  const handleSubmit = () => {
    handleProcessCommand({ type: ECommandMessageType.SERVICE, value: command });
    onClose();
  };

  return (
    <div
      className={`mb-2 p-2 ${isActive && 'bg-gray-700'} hover:bg-gray-700 rounded-lg cursor-pointer`}
      onClick={handleSubmit}
      >
      <p className="font-semibold text-sm text-white">{command}</p>
      <p className="text-gray-300 text-xs ml-0">{description}</p>
    </div>
  );
};

export default ChatCommandItem;
