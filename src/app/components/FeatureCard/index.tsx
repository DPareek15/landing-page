import React from 'react';
import Image from 'next/image';

type Props = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-white p-10 rounded-lg text-center">
      <Image src={icon} alt={title} width={120} height={60} />
      <h3 className="text-xl text-blue-500 text-left font-semibold mb-2">
        {title}
      </h3>
      <p className="text-left text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
