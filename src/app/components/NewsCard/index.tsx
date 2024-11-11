import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = {
  logo: string;
  source: string;
  date: string;
  image: string;
  description: string;
};

const NewsCard = ({ logo, source, date, image, description }: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 w-1/4">
      <div>
        <Image
          src={logo}
          alt={source}
          width={100}
          height={100}
          className="mb-4"
        />
        <p className="text-sm">{date}</p>
      </div>
      <Image
        src={image}
        alt={description}
        width={200}
        height={100}
        className="w-full"
      />
      <p className="text-sm text-black w-full mb-2">{description}</p>
      <div className="flex flex-row items-start justify-center gap-32 w-full">
        <button className="text-blue-600 hover:underline">Read article</button>
        <ArrowRight className="text-blue-600" />
      </div>
    </div>
  );
};

export default NewsCard;
