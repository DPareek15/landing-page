import React from 'react';
import ProgramCard from '../ProgramCard';

const Programs = () => {
  return (
    <section className="bg-gray-100 pb-20 z-0">
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center">
        <h2 className="text-3xl text-center mb-12 w-5/12 z-2">
          Check Out Our <span className="text-teal-600">Holistic Programs</span>{' '}
          Designed To Help You Reach Your{' '}
          <span className="text-teal-600">Goals</span>
        </h2>
        <div className="flex flex-col items-center justify-evenly w-1/2 gap-8 z-2">
          <ProgramCard
            image="/campus-boy.png"
            title="Campus Training"
            description="For students | 24+ Modules | 10 instructors"
          />
          <ProgramCard
            image="/professional-woman.png"
            title="Professional Training"
            description="For Professionals | 24+ Modules | 10 instructors"
          />
        </div>
      </div>
    </section>
  );
};

export default Programs;
