import Chat from "@/components/chat/chat";
import Limits from "@/components/chat/limits";

export default async function Home() {
  return (
    <div className="relative">
      <Limits />
      <Chat />
    </div>
  );
}
