import React, { useRef } from 'react';
import ChatUserTagItem from './ChatUserTagItem';
import ChatContainerPopup from './ContainerPopup';
import { TUserTag } from '@/features/chat/models/tag.model';
import useKeyDown from '@/features/chat/hooks/useKeyDown';

type ChatUserTagPopupProp = {
  data: TUserTag[];
  onClose: () => void;
}

const ChatUserTagPopup = ({ data, onClose }: ChatUserTagPopupProp) => {
  const containerRef = useRef(null);
  const { selectedIdx, pressedIdx } = useKeyDown(data.length, containerRef);

  return (
    <ChatContainerPopup onClose={onClose}>
      <div
        ref={containerRef}
        className="bg-slate-800 p-2 rounded-lg shadow-lg max-w-sm w-full max-h-48 overflow-y-auto">
        {data.length ? (
          data.map((tag: TUserTag, index: number) => (
            <ChatUserTagItem
              key={index}
              item={tag}
              isActive={selectedIdx === index}
              isPressed={pressedIdx === index}
              onClose={onClose} />
          ))
        ): (
          <p className="text-gray-300 text-xs ml-0">Users not found.</p>
        )}
      </div>
    </ChatContainerPopup>
  );
};

export default ChatUserTagPopup;
