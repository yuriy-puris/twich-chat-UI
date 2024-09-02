import React, { useRef } from 'react';
import ChatCommandItem from './ChatCommandItem';
import ChatContainerPopup from './ContainerPopup';
import { TCommand } from '@/features/chat/models/commands.model';
import useKeyDown from '@/features/chat/hooks/useKeyDown';

type ChatUserTagPopupProp = {
  data: TCommand[];
  onClose: () => void;
};

const ChatCommandPopup = ({ data, onClose }: ChatUserTagPopupProp) => {
  const containerRef = useRef(null);
  const { selectedIdx, pressedIdx } = useKeyDown(data.length, containerRef);

  return (
    <ChatContainerPopup onClose={onClose}>
      <div
        ref={containerRef}
        className="bg-slate-800 p-2 rounded-lg shadow-lg max-w-sm w-full max-h-48 overflow-y-auto">
        {data.length ? (
          data.map((command: TCommand, index: number) => (
            <ChatCommandItem
              key={index}
              item={command}
              isActive={selectedIdx === index}
              isPressed={pressedIdx === index}
              onClose={onClose}
            />
          ))
        ): (
          <p className="text-gray-300 text-xs ml-0">Commands not found.</p>
        )}
      </div>
    </ChatContainerPopup>
  );
};

export default ChatCommandPopup;
