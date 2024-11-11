import React from 'react';
import Image from 'next/image';

type Props = {
  index: number;
  image: string;
  name: string;
  role: string;
  institute: string;
  text: string;
};

const MentorCard = ({ index, image, name, role, institute, text }: Props) => {
  return (
    <div
      className={`bg-gradient-to-b ${
        index % 2 == 1
          ? 'from-blue-300 to-blue-100'
          : 'from-blue-500 to-blue-300'
      } w-3/12 h-[30rem] text-center flex flex-col justify-end items-end gap-0`}
    >
      <h3 className="text-2xl font-semibold relative -left-48 top-4 text-white w-1/4">
        {name}
      </h3>
      <Image
        src={image}
        alt={name}
        width={index % 2 == 0 ? 200 : 250}
        height={index % 2 == 0 ? 200 : 250}
      />
      <div className="h-1/3 bg-gradient-to-b from-[#666666] to-black">
        <div className="flex flex-col items-start text-white relative -top-12 text-sm px-5 backdrop-blur-sm">
          <p className="text-left">{role}</p>
          <p>{institute}</p>
          <p className="mt-6 text-left">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
