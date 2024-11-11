import Image from 'next/image';
import React from 'react';

type Props = {
  index: number;
  icon: string;
  title: string;
  description: string;
};

const LearningsCard = ({ index, icon, title, description }: Props) => {
  return (
    <div
      key={index}
      className={`bg-white p-6 rounded-lg w-11/12 shadow-lg ${
        index % 2 == 1 ? 'ml-auto' : 'mr-auto'
      }`}
    >
      <div className="flex flex-col items-center overflow-visible mb-4">
        <div className="relative -top-14 bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center mr-3 text-4xl">
          {index}
        </div>
        <div className="flex flex-row gap-4 justify-start items-center w-full">
          <Image src={icon} alt={title} width={48} height={48} />
          <h3 className="text-xl text-gray-700">{title}</h3>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default LearningsCard;
