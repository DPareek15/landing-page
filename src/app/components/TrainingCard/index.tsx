import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

type Props = {
  img_path: string;
  title: string;
};

const index = ({ img_path, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-6 shadow-xl bg-white border-2 border-blue-500">
      <Image
        src={img_path}
        alt={`${title} image`}
        width={48}
        height={48}
        className="mb-2"
      />
      <h3 className="text-blue-600 mb-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">
        Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum
        dolor
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center">
        Explore{' '}
        <span className="ml-2">
          <ChevronRight className="w-4 h-4" />
        </span>
      </button>
    </div>
  );
};

export default index;
