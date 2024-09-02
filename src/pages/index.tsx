import Chat from "@/features/chat/components/Chat";
import { ChatCommandsProvider } from "@/features/chat/contexts/CommandsProvider";

import '../app/globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ChatCommandsProvider>
        <Chat />
      </ChatCommandsProvider>
    </main>
  );
}
