import Chat from "@/components/Chat/chat";
import Limits from "@/components/Chat/limits";


export default async function Home() {
  return (
    <div className="relative">
      <Limits />
      <Chat />
    </div>
  );
}
