import Chat from "@/components/chat";
import { Clock } from "lucide-react";

export default async function Home() {
  return (
    <div className="relative">
      <div className="absolute flex items-center justify-between top-10 text-[hsl(140,100%,27%)] border border-[hsl(145,92%,91%)] bg-[hsl(143,85%,96%)] rounded-full px-4 py-2 right-10 text-sm">
        <Clock className="inline-block mr-2 size-4" /> <span>3</span>
      </div>

      <Chat />
    </div>
  );
}
