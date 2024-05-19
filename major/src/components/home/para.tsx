'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TracingBeam } from "../ui/tracing-beam";

interface ContentItem {
    title: string;
    description: JSX.Element;
    badge: string;
    image?: string;
  }

  
interface ParaProps {
  content: ContentItem[];
}

const Para: React.FC<ParaProps> = ({ content }) => {
  return (
    <motion.div
      className="px-44 md:px-6"
      initial={{ width: "20rem", y: 40 }}
      whileInView={{ width: "40rem", y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      <TracingBeam>
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {content.map((item, index) => (
            <motion.div
              key={`content-${index}`}
              className="mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              exit={{ opacity: 0, y: -50 }}
              whileInView={{ y: 0 }}
            >
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-xl mb-4">{item.title}</p>

              <motion.div
                className="text-sm prose prose-sm dark:prose-invert"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileInView={{ y: 0 }}
              
              >
                {item?.image && (
                  <motion.div
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0,  }}
                    transition={{ delay: 1, duration: 0.5 }}
             
                  >
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="350"
                      width="350"
                      loading="lazy"
                      className="rounded-lg mb-10 object-cover"
                    />
                  </motion.div>
                )}
                {item.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </motion.div>
  );
};

export default Para;
