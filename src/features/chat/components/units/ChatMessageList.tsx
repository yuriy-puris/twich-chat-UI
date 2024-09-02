import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { TMessage } from "../../models/messages.model";

const ChatMessageList = ({ messages }: { messages: TMessage[] }) => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatContainerRef?.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="relative flex-1 overflow-auto p-4 space-y-2 h-96 overflow-y-auto">
      {messages.map((message: TMessage, index: number) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  )
};

export default ChatMessageList;
