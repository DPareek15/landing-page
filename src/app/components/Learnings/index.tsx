import Image from 'next/image';
import React from 'react';
import LearningsCard from '../LearningsCard';

const Learnings = () => {
  return (
    <section className="bg-white py-20">
      <div className="container flex flex-col gap-0 justify-center items-center mx-auto px-2">
        <h2 className="text-3xl mb-12 w-1/2 text-center">
          Because We Offer What You Need At{' '}
          <span className="text-teal-600"> Every Step </span> Of Your{' '}
          <span className="text-teal-600">
            {' '}
            Transformative Learning Journey{' '}
          </span>
        </h2>
        <div className="w-5/12">
          <div>
            <Image
              src="/ellipse_frame.png"
              alt="ellipse"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div>
          <Image
            src="/dashed_line.png"
            alt="dashed line"
            width={5}
            height={500}
            className="relative -left-16"
          />
          <Image
            src="/dashed_line.png"
            alt="dashed line"
            width={5}
            height={500}
            className="relative -left-16 z-10"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-0.5">
          <div className="relative -top-[115rem] left-[8.5rem]">
            <div className={`relative left-[20rem] top-[18.6rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
                className="rotate-180"
              />
            </div>
            <div className={`relative left-[31rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
                className="rotate-180"
              />
            </div>
            <div className="relative left-[33.45rem] top-[1.9rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={1}
              icon="/icons/Degree.png"
              title="Custom Specialization"
              description="We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals."
            />
          </div>
          <div className="relative -top-[105rem] left-[14.75rem]">
            <div className={`relative -left-[1rem] top-[18.6rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
              />
            </div>
            <div className={`relative -left-[4rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
              />
            </div>
            <div className="relative -left-[4.5rem] top-[2rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={2}
              icon="/icons/Lab.png"
              title="Virtual Labs"
              description="We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection."
            />
          </div>
          <div className="relative -top-[92.5rem] -left-[54.85rem]">
            <div className={`relative left-[20rem] top-[18.8rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
                className="rotate-180"
              />
            </div>
            <div className={`relative left-[31rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
                className="rotate-180"
              />
            </div>
            <div className="relative left-[33.5rem] top-[1.9rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={3}
              icon="/icons/Report.png"
              title="AI Tests"
              description="We understand that teaching alone isn't enough, so we provide our students with AI-powered tests to assess their progress."
            />
          </div>
          <div className="relative -top-[120rem] left-[46.5rem]">
            <div className={`relative -left-[1rem] top-[18.6rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
              />
            </div>
            <div className={`relative -left-[4rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
              />
            </div>
            <div className="relative -left-[4.5rem] top-[2rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={4}
              icon="/icons/Resume.png"
              title="Resume Builder"
              description="We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd."
            />
          </div>
          <div className="relative -top-[108rem] -left-[23.25rem]">
            <div className={`relative left-[20rem] top-[18.25rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
                className="rotate-180"
              />
            </div>
            <div className={`relative left-[31rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
                className="rotate-180"
              />
            </div>
            <div className="relative left-[33.5rem] top-[1.9rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={5}
              icon="/icons/Briefcase.png"
              title="Placement Preparation"
              description="We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation."
            />
          </div>
          <div className="relative -top-[95rem] -left-[16.75rem]">
            <div className={`relative -left-[1rem] top-[18.6rem]`}>
              <Image
                src="/gradient_border.png"
                alt={`border`}
                width={176}
                height={176}
              />
            </div>
            <div className={`relative -left-[4rem] top-12`}>
              <Image
                src="/dashed_arrow.png"
                alt={`arrow`}
                width={48}
                height={48}
              />
            </div>
            <div className="relative -left-[4.5rem] top-[2rem] w-4 h-4 rounded-full bg-blue-500" />
            <LearningsCard
              index={6}
              icon="/icons/Desktop.png"
              title="AI Interviews"
              description="Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared."
            />
          </div>
        </div>
        <div className="h-36 mb-0">
          <Image
            src="/bg-engrs.png"
            alt="engineers"
            width={1540}
            height={1500}
            className="relative -top-[12rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Learnings;
