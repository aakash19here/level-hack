import footerImage from "../../public/assets/footerimage.jpg";
import { Slack, X } from "lucide-react";
import Image from "next/image";
import { MaxWidthWrapper } from "../ui/max-width-wrapper";

export default function Footer() {
  return (
    <MaxWidthWrapper>
      <footer className="text-white flex flex-col py-8 gap-4 px-4 lg:px-0 lg:py-6">
        <h1 className="text-xl font-semibold text-start">
          Powered by Passion. Inspired by{" "}
          <span className="bg-gradient-to-r font-secondary from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text">
            Level SuperMind.
          </span>
        </h1>
        <h4 className="text-muted-foreground text-sm">
          Celebrating innovation and collaboration with the minds driving this
          extraordinary competition
        </h4>
        <div className="flex items-center justify-center gap-3">
          <Slack className="text-white size-10" />
          <X />
          <div className="size-10 overflow-hidden rounded-full relative">
            <Image
              src={footerImage}
              alt="slack"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}
