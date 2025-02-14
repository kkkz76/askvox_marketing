import Download from "@/components/section/Download";
import Faq from "@/components/section/Faq";
import Features from "@/components/section/Features";
import FirstHeader from "@/components/section/FirstHeader";
import Hero from "@/components/section/Hero";
import Pricing from "@/components/section/Pricing";
import { createWebVisitData } from "@/services/query";

export default async function Home() {
  await createWebVisitData();

  return (
    <>
      <FirstHeader />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Download />
    </>
  );
}
