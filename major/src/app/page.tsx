import ButtonGradient from "../../public/svg/ButtonGradient";
import HomeHeader from "@/components/home/HomeHeader";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import Footer from "@/components/home/Footer";
import Feature2 from "@/components/home/Feature2";
import Collaboration from "@/components/home/Collaboration";
import Help from "@/components/home/Help";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HomeHeader/>
        <Hero/>
        <Collaboration/>
        <WhyUs/>
        <Feature2/> 
        <Help/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}
