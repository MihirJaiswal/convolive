import ButtonGradient from "../../public/svg/ButtonGradient";
import HomeHeader from "@/components/home/HomeHeader";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <HomeHeader/>
        <Hero/>
        <WhyUs/>
      </div>
      <ButtonGradient/>
    </>
  );
}
