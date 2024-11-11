import React from 'react';
import Image from 'next/image';

type Props = {
  icon: string;
  name: string;
  role: string;
  text: string;
};

const TestimonialCard = ({ icon, name, role, text }: Props) => {
  return (
    <div className="bg-blue-100 p-10 pt-0 rounded-3xl relative w-[40rem] z-10">
      <div className="text-center">
        <Image
          src={icon}
          alt={name}
          width={100}
          height={100}
          className="relative -top-8 rounded-full mx-auto mb-4"
        />
        <div className="flex flex-row">
          <div className="text-blue-400 text-7xl relative -top-5">"</div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-lg italic mb-4">{text}</p>
            <p className="text-2xl text-blue-700">{name}</p>
            <p className="text-sm text-blue-700">{role}</p>
          </div>
          <div className="text-blue-400 text-7xl relative top-32">"</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
