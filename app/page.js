import Image from "next/image";
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import HowItWorksAnimation from "../components/HowItWorksAnimation";
import FoundingDevelopers from "../components/foundingdevs"
import Footer from "../components/footer"

export default function Home() {
  return (
<>
<Navbar />
<Hero />
<About />
<section className="border-b border-black bg-[#FAFAF7] px-4 py-16 sm:px-6 sm:py-20">
  <h2 className="text-center text-2xl font-medium uppercase tracking-wide text-black">
    How it works
  </h2>
  <div className="mt-10">
    <HowItWorksAnimation />
  </div>
</section>
<FoundingDevelopers />
<Footer />
</>
  );
}
