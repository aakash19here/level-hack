import Engagement from "@/components/landing/Engagement";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Posts from "@/components/landing/Posts";
import Response from "@/components/landing/Response";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <Response />
      <Engagement />
      <Footer />
    </>
  );
}
