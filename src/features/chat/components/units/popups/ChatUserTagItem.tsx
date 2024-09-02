import React, { useEffect } from 'react';
import { ECommandMessageType, TCommand } from '@/features/chat/models/commands.model';
import { TUserTag } from '@/features/chat/models/tag.model';
import { useChatCommandsContext } from '@/features/chat/contexts/CommandsProvider';

const ChatUserTagItem = ({ item, isActive, isPressed, onClose }: { item: TUserTag, isActive: boolean, isPressed: boolean, onClose: () => void }) => {
  const { username } = item;
  const { handleProcessCommand } = useChatCommandsContext();

  useEffect(() => {
    if (isPressed) {
      handleSubmit();
    }
  }, [isPressed]);

  const handleSubmit = () => {
    handleProcessCommand({ type: ECommandMessageType.TAG, value: username });
    onClose();
  };

  return (
    <div
      className={`mb-2 p-2 ${isActive && 'bg-slate-400'} hover:bg-slate-400 rounded-lg cursor-pointer`}
      onClick={handleSubmit}>
      <p className="text-gray-300">{username}</p>
    </div>
  );
};

export default ChatUserTagItem;
