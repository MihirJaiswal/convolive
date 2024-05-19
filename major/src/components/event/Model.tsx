'use client'
import React, { useEffect } from 'react';
import { trackProgress } from 'https://esm.sh/@bramus/sda-utilities';

const NikeAirMaxModelViewer = () => {
  useEffect(() => {
    const model = document.querySelector('model-viewer') as HTMLModelViewerElement;
    trackProgress(model.getAnimations()[0], (progress) => {
      model.orientation = `0deg 0deg ${progress * -360}deg`;
    });
  }, []);

  return (
    <>
      <header className="fixed top-1 left-0 right-0 text-center italic">
        <p>
          Demo for{' '}
          <a href="https://brm.us/scroll-driven-3d" target="_top">
            https://brm.us/scroll-driven-3d
          </a>
        </p>
      </header>

      <div id='model-viewer'
        className="block w-full h-95vh fixed"
        src="https://assets.codepen.io/89905/nike_air_max_90.glb"
      ></div>

     
    </>
  );
};

export default NikeAirMaxModelViewer;
