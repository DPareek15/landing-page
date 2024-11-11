'use client';

import React from 'react';
import Image from 'next/image';
import TrainingCard from '../TrainingCard';
import StatsCard from '../StatsCard';

export default function Hero() {
  return (
    <div className="bg-white min-h-screen pt-12">
      <div className="flex flex-col gap-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Left Side - Mac Display */}
          <div className="relative fit-content">
            <Image
              src="/desktop.png"
              alt="Mac desktop"
              width={800}
              height={600}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-16 flex flex-col justify-start items-start gap-4">
            {/* Heading */}
            <h1 className="text-[#2D4356] text-4xl lg:text-5xl font-bold leading-tight">
              Where The World
              <br />
              Learns To Code
            </h1>

            {/* Training Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <TrainingCard
                img_path="/icons/University.png"
                title="Campus Training"
              />
              <TrainingCard
                img_path="/icons/Office.png"
                title="Professional Training"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 px-4">
          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <StatsCard path="/icons/Location.png" content="50+ Cities" />
            <StatsCard path="/icons/Notes.png" content="80+ Modules" />
            <StatsCard path="/icons/Graduation.png" content="10K+ Students" />
            <StatsCard path="/icons/Building.png" content="100+ Institutes" />
          </div>

          {/* Decorative Lines */}
          <div className="flex justify-items-end">
            <div className="flex space-x-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-1 bg-cyan-400 transform -rotate-45"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-blue-100 flex flex-row gap-4 items-center justify-evenly p-4">
          <div>
            <Image
              src="/comm-dept-logo.png"
              alt="commerce department logo"
              width={250}
              height={125}
            />
          </div>
          <div className="border-x border-gray-600 px-8 py-4">
            <p className="text-center text-gray-700 text-sm">RECOGNISED BY</p>
            <Image
              src="/nsdc-india-logo.png"
              alt="nsdc india logo"
              width={250}
              height={125}
            />
          </div>
          <div>
            <Image
              src="/startup-india-logo.png"
              alt="startup india logo"
              width={250}
              height={125}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
