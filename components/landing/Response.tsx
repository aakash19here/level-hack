import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Response() {
  return (
    <section className="relative hidden lg:block w-full h-[200px] mx-auto">
      <Image src={logo} alt="logo" fill className="object-contain" />
    </section>
  );
}
