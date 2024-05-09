import { Media } from '@/payload-types';
import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  content: string;
  logo: Media;
  backgroundImage: Media;
}

const Hero = ({ title, content = '', backgroundImage, logo }: Props) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        {backgroundImage && (
          <Image
            src={backgroundImage.url!}
            fill
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        )}

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className=" relative z-10 flex flex-col sm:flex-row items-center justify-center max-w-screen-lg mx-auto h-full p-6 gap-4">
        {logo && (
          <Image src={logo.url!} width={250} height={500} alt={logo.alt!} />
        )}

        <div className="flex flex-col justify-center items-center h-full text-start self-end">
          <h1 className="text-5xl font-bold leading-tight mb-4 self-start">
            {title}
          </h1>
          <p className="text-lg text-gray-300 mb-8">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
