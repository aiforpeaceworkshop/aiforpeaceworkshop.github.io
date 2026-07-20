import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CallForPresentations } from "@/components/CallForPresentations";
import { Speakers } from "@/components/Speakers";
import { Organizers } from "@/components/Organizers";
import { FirstEditionTeaser } from "@/components/FirstEditionTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CallForPresentations />
      <Speakers />
      <Organizers />
      <FirstEditionTeaser />
    </>
  );
}
