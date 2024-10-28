import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestCards from "@/components/TestCards";
import WhyChoseUs from "@/components/WhyChoseUs";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen antialiased bg-grid-white/">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <TestCards/>
    </main>

  );
}
