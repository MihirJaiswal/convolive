'use client'
import React from 'react'
import Notification from './Notification'
import { notification1 } from "../../../public";
import { ScrollParallax } from "react-just-parallax"
const Scroll = () => {
  return (
    <div>
        <ScrollParallax  isAbsolutelyPositioned>
                <Notification
                    className="hidden absolute -left-24 bottom-20 w-[18rem] xl:flex "
                    title="VR"
                    image={notification1}
                  />
                
                  <Notification
                    className="hidden absolute -left-24 -top-4 w-[18rem] xl:flex "
                    title="Live Streaming"
                    image={notification1}
                  />
                   <Notification
                    className="hidden absolute -right-24 -top-4 w-[18rem] xl:flex "
                    title="Video Conference"
                    image={notification1}
                  />
                  <Notification
                    className="hidden absolute -right-24 bottom-20 w-[18rem] xl:flex "
                    title="Events Hosting"
                    image={notification1}
                  />
                  
                </ScrollParallax>
    </div>
  )
}

export default Scroll