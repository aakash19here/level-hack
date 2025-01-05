import logo from "@/assets/postsImage.jpg";
import Image from "next/image";
import { MaxWidthWrapper } from "../ui/max-width-wrapper";
import WordRotate from "../ui/word-rotate";

export default function Posts() {
  return (
    <MaxWidthWrapper className="px-6 lg:px-0">
      <div className="flex flex-col-reverse gap-12 lg:gap-0 lg:flex-row items-center w-full">
        <div className="w-1/2 h-[300px] lg:h-[600px] lg:-rotate-90 relative lg:mr-auto">
          <Image src={logo} alt="logo" fill className="object-contain" />
        </div>
        <div className="flex flex-col justify-start items-start lg:items-start gap-1">
          <WordRotate
            duration={1500}
            words={["Pick", "Post", "Dominate"]}
            className="text-green-500 font-secondary text-start text-2xl lg:text-4xl font-bold"
          />
          <h4 className="text-muted-foreground text-base max-w-md text-start lg:text-start">
            Pick a post type and uncover engagement trends tailored for your
            content strategy.
          </h4>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
