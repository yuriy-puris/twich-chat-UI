import { useState } from 'react';
import { Settings } from 'react-feather';

const ChatBottomPanel = () => {
  return (
    <div className='flex flex justify-end w-full py-2 px-4'>
      <div className='flex items-center'>
        <button
          type="button"
          className="p-2 text-white rounded-lg hover:opacity-50"
          onClick={() => alert('Cheer button clicked')}
        >
          <Settings size={15} />
        </button>
        <button
          type="button"
          className="bg-violet-700 py-1 px-4 ml-4 text-white rounded-lg hover:opacity-50"
          onClick={() => alert('Emote button clicked')}
        >
          Chat
        </button>
      </div>
    </div>
  )
};

export default ChatBottomPanel;
