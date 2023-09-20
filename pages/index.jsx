import Head from "next/head";
import Hero from "../components/Hero/Index";
import AboutEvent from "../components/AboutEvent/Index";
import AboutUs from "../components/AboutUs/Index";
import EventResources from "../components/EventResources/Index";
import OurSpeakers from "../components/OurSpeakers/Index";
import TheyTrustedUs from "../components/TheyTrustedUs/Index";
import Schedule from "../components/Schedule/Index";
import Footer from "../components/Footer/Index";
export default function Home() {
  return (
    <>
      <Head>
        <title>Chainlink Dehradun</title>
        <link rel="shortcut icon" href="/qiskit.png" />
      </Head>

      <Hero />
      <main className="font-IBM-Plex">
        <AboutEvent />
        <AboutUs />
        <EventResources />
        <OurSpeakers/>
        <TheyTrustedUs />
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
