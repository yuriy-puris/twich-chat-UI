import React from 'react';
import { TMessage } from '../../models/messages.model';
import Image from 'next/image';
import { getUserColor } from '../../utils/generateColor';

const ChatMessage = ({ message }: { message: TMessage }) => {
  const { user, timestamp, text } = message;
  const userColor: string = getUserColor(user.name);

  const isMessageImage = text.includes('/images'); // I have decided do not type by image or text, just checking symbols

  return (
    <div className="flex items-start space-x-3 mb-2">
      <div>
        <div className="float-left mr-1 pt-0.5">
          <div className='flex items-start item-center text-nowrap'>
            <span className="text-gray-500 text-sm mr-2">{timestamp}</span>
            <Image
              className="w-5 h-5 mr-2 rounded-full"
              src={user.avatar}
              width={7}
              height={7}
              alt={user.name} />
            <span className="font-semibold text-sm text-white mr-2" style={{ color: userColor }}>{user.name}:</span>
          </div>
        </div>
        {isMessageImage ? (
          <Image
            className="inline w-5 h-5 mr-2 rounded-full"
            src={text}
            width={7}
            height={7}
            alt={text} />
        ) : (
          <p className="inline text-gray-300">{text}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
