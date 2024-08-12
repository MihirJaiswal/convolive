import ButtonGradient from "../../public/svg/ButtonGradient";
import HomeHeader from "@/components/home/HomeHeader";
import Hero from "@/components/home/Hero";
import Footer from "@/components/home/Footer";
import Collaboration from "@/components/home/Collaboration";
import Grid from "@/components/home/Grid";
import Help from "@/components/home/Help";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HomeHeader/>
        <Hero/>
        <Collaboration/>
        <Grid/>
        <Help/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}
