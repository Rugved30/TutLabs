import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Review from "./components/Review";
import BecomeTutor from "./components/BecomeTutor";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>Tutlabs India</title>
        <meta name="description" content="Default Title for my website" />
      </Head>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Review />
      <BecomeTutor />
      <Footer />
    </>
  );
}

