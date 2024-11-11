import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ProgramCard = ({ image, title, description }: Props) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 bg-white p-2 rounded-2xl shadow-lg">
      <Image
        src={image}
        alt={title}
        width={350}
        height={350}
        className="h-full object-cover rounded-xl"
      />
      <div className="flex flex-col justify-center items-start gap-2">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="mb-4">
          The app features in-app coding, eliminating the need for laptops. With
          cloud-based virtual machines and labs, students can practice freely,
          cutting hardware and maintenance costs.
        </p>

        <div className="flex flex-row justify-end items-end w-full px-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 justify-self-end">
            Explore <ChevronRight className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
