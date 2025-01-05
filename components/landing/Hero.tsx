import Image from "next/image";
import logo from "@/assets/heroImage.jpg"

export default function Hero() {
  return (
    <section className="flex flex-col">
      <h1 className="text-3xl font-semibold text-center bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] inline-block text-transparent bg-clip-text">
        Engage.Analyse.Elevate
      </h1>
      <h1 className="text-3xl text-center text-white">
        Insites that transform content
      </h1>
      <p className="text-center text-gray-500 text-lg">
        Discover what works best for your audience and post smarter, not harder.
      </p>
      <Image src={logo} alt="logo" className="mx-[auto]"/>
    </section>
  );
}
