import React from 'react';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import TestimonialCard from '../TestimonialCard';
import Image from 'next/image';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Saanvi Patel',
      role: 'Executive Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      name: 'Saanvi Sharma',
      role: 'Executive Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      name: 'Saanvi Shukla',
      role: 'Executive Engineer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="flex flex-col gap-12 justify-center items-center pb-32 mx-2 bg-gradient-to-b from-[#0196F9] via-[#2B95ED] to-[#14CBD5] overflow-hidden">
      <div className="w-full h-24">
        <Image
          src="/icons/Angular.png"
          alt="Angular"
          width={50}
          height={50}
          className="relative top-[36rem] left-[17.5rem] z-20"
        />
        <Image
          src="/icons/CSS.png"
          alt="CSS"
          width={150}
          height={100}
          className="relative top-[10rem] left-[23rem]"
        />
        <Image
          src="/icons/Flutter.png"
          alt="Flutter"
          width={150}
          height={150}
          className="relative top-[31.5rem] left-[75rem]"
        />
        <Image
          src="/icons/Java.png"
          alt="Java"
          width={100}
          height={100}
          className="relative -top-[20rem] left-[0rem]"
        />
        <Image
          src="/icons/Node.png"
          alt="Node"
          width={100}
          height={100}
          className="relative top-[12rem] left-[4rem] z-20"
        />
        <Image
          src="/icons/React.png"
          alt="React"
          width={100}
          height={100}
          className="relative -top-[4rem] left-[70rem]"
        />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12 text-white">
          And Our Students Agree ...
        </h2>
      </div>
      <div className="flex flex-row gap-24">
        <TestimonialCard
          icon="/programmer.png"
          name={
            testimonials[
              (currentTestimonial + 1 + testimonials.length) %
                testimonials.length
            ].name
          }
          role={
            testimonials[
              (currentTestimonial + 1 + testimonials.length) %
                testimonials.length
            ].role
          }
          text={
            testimonials[
              (currentTestimonial + 1 + testimonials.length) %
                testimonials.length
            ].text
          }
        />
        <TestimonialCard
          icon="/programmer.png"
          name={testimonials[currentTestimonial].name}
          role={testimonials[currentTestimonial].role}
          text={testimonials[currentTestimonial].text}
        />
        <TestimonialCard
          icon="/programmer.png"
          name={
            testimonials[
              (currentTestimonial - 1 + testimonials.length) %
                testimonials.length
            ].name
          }
          role={
            testimonials[
              (currentTestimonial - 1 + testimonials.length) %
                testimonials.length
            ].role
          }
          text={
            testimonials[
              (currentTestimonial - 1 + testimonials.length) %
                testimonials.length
            ].text
          }
        />
      </div>
      <div className="flex flex-row gap-16">
        <button
          onClick={prevTestimonial}
          className="bg-transparent border-[1px] border-white rounded-full p-2 shadow-bt"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-transparent border-[1px] border-white rounded-full p-2 shadow-bt"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
