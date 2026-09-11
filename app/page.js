import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Approach from "../components/Approach";
import AIGovCon from "../components/AIGovCon";
import WhoWeHelp from "../components/WhoWeHelp";
import Capabilities from "../components/Capabilities";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Approach />
        <AIGovCon />
        <WhoWeHelp />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
