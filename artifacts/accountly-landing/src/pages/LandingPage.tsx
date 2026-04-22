import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { Industries } from '../components/sections/Industries';
import { Features } from '../components/sections/Features';
import { Why } from '../components/sections/Why';
import { FAQ } from '../components/sections/FAQ';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden min-h-[100dvh]">
      <Navbar />
      <Hero />
      <Industries />
      <Features />
      <Why />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
