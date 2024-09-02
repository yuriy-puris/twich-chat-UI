import React, { useRef } from 'react';
import ChatCommandItem from './ChatCommandItem';
import ChatContainerPopup from './ContainerPopup';
import { TEmotes } from '@/features/chat/models/emotes.model';
import ChatEmotesItem from './ChatEmoteItem';
import useKeyDown from '@/features/chat/hooks/useKeyDown';

type ChatEmotesPopupProp = {
  data: TEmotes[];
  onClose: () => void;
};

const ChatEmotePopup = ({ data, onClose }: ChatEmotesPopupProp) => {
  const containerRef = useRef(null);
  const { selectedIdx, pressedIdx } = useKeyDown(data.length, containerRef);

  return (
    <ChatContainerPopup onClose={onClose}>
      <div
        ref={containerRef}
        className="bg-slate-800 p-2 rounded-lg shadow-lg max-w-sm w-full max-h-48 overflow-y-auto">
        {data.length ? (
          data.map((emote: TEmotes, index: number) => (
            <ChatEmotesItem
              key={index}
              item={emote}
              isActive={selectedIdx === index}
              isPressed={pressedIdx === index}
              onClose={onClose}
            />
          ))
        ): (
          <p className="text-gray-300 text-xs ml-0">Emotes not found.</p>
        )}
      </div>
    </ChatContainerPopup>
  );
};

export default ChatEmotePopup;
