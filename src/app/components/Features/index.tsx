import React from 'react';
import Image from 'next/image';
import FeatureCard from '../FeatureCard';

const Features = () => {
  return (
    <section className="min-h-screen px-8 py-12 bg-gradient-to-r from-blue-400 to-blue-700">
      <div className="container mx-auto px-12">
        <h2 className="text-5xl text-left text-white mb-12">
          What Sets Us Apart?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <FeatureCard
            icon="/icons/Invitation.png"
            title="Created by IIT-IIM Alumni"
            description="We've learnt from the best and strive to bring you the best."
          />
          <FeatureCard
            icon="/icons/AIBoard.png"
            title="A.I. Integration"
            description="We have harnessed the power of A.I. to enhance and assess your knowledge."
          />
          <FeatureCard
            icon="/icons/Document.png"
            title="In-app Coding"
            description="The app features in-app coding, eliminating the need for laptops."
          />
          <FeatureCard
            icon="/icons/OpenBook.png"
            title="Extensive E-books"
            description="Deepen your understanding and mastery of the skills."
          />
          <FeatureCard
            icon="/icons/Camera.png"
            title="Recorded Lectures"
            description="Access lectures anywhere and anytime at your own pace."
          />
          <FeatureCard
            icon="/icons/Kindle.png"
            title="Flash cards"
            description="Make learning convenient and fun using flash cards."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
