'use client'
import React from 'react'
import Section from './Section'
import Image from 'next/image'
import heroBackground from '../../../public/hero/hero-background.jpg'
import { ScrollParallax } from "react-just-parallax"
import { BackgroundCircles, BottomLine, Gradient } from "./hero1";
import CompanyLogos from "./CompanyLogos";
import Notification from './Notification'
import { heroIcons } from '../../../constant'
import { useState } from 'react'
import { notification1 } from "../../../public";
import mainImg from "../../../public/services/home.png"
import a from '../../../public/services/video.png'
import b from '../../../public/services/stream.jpg'
import c from '../../../public/services/events.jpg'
import d from '../../../public/services/VR.jpg'

const Hero = () => {
    const parallaxRef = React.useRef(null)
    const [BackgroundImage, setBackgroundImage] = useState<any>(mainImg);

    const handleVideoConferenceHover = () => {
        setBackgroundImage(a);
    };

    const handleVideoConferenceLeave = () => {
        
    };
    const handleLiveStreamHover = () => {
        setBackgroundImage(b);
    };

    const handleLiveStreamLeave = () => {
       
    };
    const handleEventsHover = () => {
        setBackgroundImage(c);
    };

    const handleEventsLeave = () => {
       
    };
    const handleVrHover = () => {
        setBackgroundImage(d);
    };

    const handleVrLeave = () => {
        
    };

  return (
    <Section
        className="pt-[12rem] -mt-[5.3rem] md:pt-[13rem] md:-mt-[6.5rem] lg:pt-[14rem] lg:-mt-[7.5rem] xl:pt-[15rem] xl:-mt-[8.5rem] 2xl:pt-[16rem] 2xl:-mt-[9.5rem] bg-mainb"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings="lg:py-0"
        id="hero"
     >
    <div className='max-w-[77.5rem] h-max mx-auto px-4 md:px-10 lg:px-15 xl:max-w-[87.5rem] relative ' ref={parallaxRef}>        
  <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]">
            Experience the quality of&nbsp;Virtual Meet and&nbsp;events with {` `}
            <span className="inline-block relative">
              Convolive
              {/* <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              /> */}
            </span>
          </h1>
          <p className="text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 mt-2">
            Unleash the power of seamless stream and virtual events. Upgrade your productivity
            with Convolive.
          </p>
          <button className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
            </span>
            </button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient border border-gray-400  ">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-gray-800 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
               <Image
                  src={BackgroundImage}
                  className="w-full scale-[2.4] translate-y-[45%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[0%]"
                  width={1024}
                  height={490}
                  alt="AI"
                  quality={100}
                  loading='lazy'
                /> 

 
                <ScrollParallax isAbsolutelyPositioned>
               {/*  <ul className='mt-6'>
                  {heroIcons.map((icon, index) => (
                      <li className="p-3" key={index}>
                          <Image 
                          src={icon} 
                          width={24} 
                          height={25} 
                          loading='lazy'
                          alt={`icon-${index}`} />
                      </li>
                  ))}
                </ul> */}
                </ScrollParallax>

                <ScrollParallax  isAbsolutelyPositioned>
                
                 <Notification
                    className="hidden absolute -right-24 -top-4 w-[18rem] xl:flex "
                    title="Video Conference"
                    image={notification1}
                    onMouseEnter={handleVideoConferenceHover}
                    onMouseLeave={handleVideoConferenceLeave}
                  />
                  <Notification
                    className="hidden absolute -left-24 -top-4 w-[18rem] xl:flex "
                    title="Live Streaming"
                    image={notification1}
                    onMouseEnter={handleLiveStreamHover}
                    onMouseLeave={handleLiveStreamLeave}
                  />
                  <Notification
                    className="hidden absolute -right-24 bottom-20 w-[18rem] xl:flex "
                    title="Events Hosting"
                    image={notification1}
                    onMouseEnter={handleEventsHover}
                    onMouseLeave={handleEventsLeave}
                  />
                  <Notification
                    className="hidden absolute -left-24 bottom-20 w-[18rem] xl:flex "
                    title="VR"
                    image={notification1}
                    onMouseEnter={handleVrHover}
                    onMouseLeave={handleVrLeave}
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
              loading='lazy'
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  )
}

export default Hero