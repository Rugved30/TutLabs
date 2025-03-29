import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Review from "./components/Review";
import BecomeTutor from "./components/BecomeTutor";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Review />
      <BecomeTutor />
      <Footer />
    </div>
  );
}

