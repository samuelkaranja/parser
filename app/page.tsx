import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
//import Pricing from "@/components/landing-page/Pricing";
import Stats from "@/components/landing-page/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
    </main>
  );
}
