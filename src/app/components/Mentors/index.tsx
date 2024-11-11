import React from 'react';
import MentorCard from '../MentorCard';

const Mentors = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-xl text-center mb-2">
          We Know Just Education Is Not Enough Anymore
        </h2>
        <h2 className="text-3xl font-bold text-center mb-12">
          So We&apos;ve Got The{' '}
          <span className="text-teal-600"> Best Mentors </span> For You.
        </h2>
        <div className="flex flex-row items-center justify-center gap-16 p-8">
          <MentorCard
            index={1}
            image="/mentor-1.png"
            name="Vikas Shukla"
            role="Software Engineering"
            institute="IIT-BHU"
            text='" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "'
          />
          <MentorCard
            index={2}
            image="/mentor-2.png"
            name="Sumit Bhatt"
            role="Software Engineering"
            institute="IIT-BHU"
            text='" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "'
          />
          <MentorCard
            index={3}
            image="/mentor-3.png"
            name="Neelu Verma"
            role="Software Engineering"
            institute="IIT-BHU"
            text='" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "'
          />
        </div>
      </div>
    </section>
  );
};

export default Mentors;
