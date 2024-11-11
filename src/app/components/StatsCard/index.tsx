import React from 'react';
import Image from 'next/image';

type Props = {
  path: string;
  content: string;
};

const StatsCard = ({ path, content }: Props) => {
  const arr = content.split(' ');
  return (
    <div className="border-2 border-blue-500 rounded-lg p-4 flex items-center space-x-3">
      <div className="flex items-center justify-center rounded-full h-24 w-24 bg-blue-100">
        <Image src={path} alt={arr[1].toLowerCase()} width={96} height={96} />
      </div>
      <div>
        <div className="text-2xl font-bold text-blue-500">{arr[0]}</div>
        <div className="text-2xl font-bold text-blue-500">{arr[1]}</div>
      </div>
    </div>
  );
};

export default StatsCard;
