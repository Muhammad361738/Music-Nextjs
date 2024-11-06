import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestCards from "@/components/TestCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import WhyChoseUs from "@/components/WhyChoseUs";


export default function Home() {
  return (
    <main className="bg-black min-h-screen antialiased bg-grid-white/">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <TestCards/>
      <UpcomingWeb/>
      <Instructor/>
      <Footer/>
    </main>

  );
}
