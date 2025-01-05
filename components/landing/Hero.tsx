import logo from "@/assets/heroImage.jpg";
import Image from "next/image";
import { MaxWidthWrapper } from "../ui/max-width-wrapper";
import WordRotate from "../ui/word-rotate";

const texts = ["Engage", "Analyse", "Elevate"];

export default function Hero() {
  return (
    <section className="py-16 lg:py-20">
      <MaxWidthWrapper className="px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          <WordRotate
            duration={2000}
            words={texts}
            className="text-violet-500 font-secondary text-start text-4xl lg:text-6xl font-bold"
          />

          <h1 className="text-xl text-start text-white">
            Insites that transform content
          </h1>
          <h4 className="text-start text-gray-500 text-lg">
            Discover what works best for your audience and post smarter, not
            harder.
          </h4>
          <div className="relative w-[100%] h-[150px] my-5 lg:w-full lg:h-[500px] mx-auto lg:mx-0">
            <Image
              src={logo}
              alt="logo"
              fill
              className="object-cover lg:object-contain"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
