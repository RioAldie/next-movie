import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-1 flex-col w-full justify-center items-center gap-8">
      <Image
        src={'/image/movie-thum.png'}
        alt="thumbnail"
        width={700}
        height={600}
      />
      <h2 className="font-bold w-3/4 text-3xl text-blue-400 text-center">
        Temukan Movie Terbaru dan Terlengkap
      </h2>
      <p className="text-xl w-3/4 text-slate-300 text-center ">
        Getmovie membantu kamu menemukan movie terbaru maupun movie
        classic terpopuler pada masanya, tidak hanya lokal tetapi juga
        movie mancanegara.
      </p>
    </div>
  );
};

export default Hero;
