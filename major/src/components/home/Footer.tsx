import React from "react";
import Section from "./Section";
import { socials } from "../../../constant/index";
import Image from "next/image";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10 mt-20">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-sm text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transition-colors hover:bg-n-6"
            >
              <Image 
              src={item.iconUrl} 
              width={16} 
              height={16} 
              loading="lazy"
              alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;