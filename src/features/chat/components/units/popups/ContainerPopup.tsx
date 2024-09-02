import React, { useEffect, useRef } from 'react';

const ChatContainerPopup = ({ onClose, children }: { onClose: () => void, children: React.ReactNode }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: React.ChangeEvent<any> | any) => {
      if (popupRef?.current && !popupRef?.current?.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef, onClose]);

  return (
    <div 
      ref={popupRef}
      className="absolute w-11/12 bottom-full left-4 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {children}
    </div>
  );
};

export default ChatContainerPopup;
