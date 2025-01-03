import Chat from "@/components/chat";
import Limits from "@/components/limits";

export default async function Home() {
  return (
    <div className="relative">
      <Limits />
      <Chat />
    </div>
  );
}
