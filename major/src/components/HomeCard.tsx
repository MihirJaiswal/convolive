"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

export function HomeCard({ img, title, description, handleClick }: HomeCardProps) {
  return (
    <div className="flex z-10" onClick={handleClick}>
      <PinContainer title={title} href="/">
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-60 h-60 md:w-48 md:h-48">
          <div className="h-full relative w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <div className="absolute top-1/2 flex flex-col mt-4 pl-2">
            <div className="flex-center glassmorphism size-12 rounded-[10px] absolute -top-[126px] md:-top-[104px]">
              <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            <h3 className="font-bold text-xl text-slate-100">{title}</h3>
            <span className="text-white mt-2">{description}</span>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
