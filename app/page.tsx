import Download from "@/components/section/Download";
import Faq from "@/components/section/Faq";
import Features from "@/components/section/Features";
import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import Pricing from "@/components/section/Pricing";
import Testimonials from "@/components/section/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </>
  );
}
