import AboutSection from "@/components/home-page/about-us/about-section";
import GetStarted from "@/components/home-page/getstarted/getstarted-section";
import { HeroBanner } from "@/components/home-page/hero/hero-section";
import HomeComponentsSection from "@/components/home-page/view-components/home-comp-section";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <GetStarted />
      <HomeComponentsSection />
    </div>
  );
}
