import React from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Awards = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium text-gray-700 mb-2">
          Our Efforts To <span className="text-teal-600">Innovate</span> Have
          Been
        </h2>
        <h2 className="text-4xl font-medium">
          <span className="text-teal-600">Recognized</span> And{' '}
          <span className="text-teal-600">Appreciated</span>
        </h2>
      </div>

      {/* Main content */}
      <div className="mx-auto px-4">
        <div className="relative">
          {/* Background shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-32 left-0 w-1/3 h-44 bg-gradient-to-r from-[#40E0D0] to-[#2196F3] transform skew-y-2"></div>
            <div className="absolute top-24 right-0 w-2/3 h-44 bg-gradient-to-r from-[#40E0D0] to-[#2196F3] transform skew-y-2"></div>
            <div className="absolute bottom-16 left-0 w-2/3 h-44 bg-gradient-to-l from-[#40E0D0] to-[#2196F3] transform skew-y-2"></div>
            <div className="absolute bottom-24 right-0 w-1/6 h-44 bg-gradient-to-l from-[#40E0D0] to-[#2196F3] transform skew-y-2"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Top section with main image and text */}
            <div className="flex items-center justify-between gap-8 px-12 py-8">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-6 h-6 text-blue-400" />
              </button>

              <div className="absolute top-0 right-[40rem] w-6 h-6 bg-[#2196F3] rounded-full"></div>
              <div
                className={`flex-2 relative bg-gradient-to-r from-blue-500 via-blue-950 to-blue-400 p-2 rounded-lg w-[600px] h-[300px] transform skew-x-6`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="/award-1.png"
                    alt="Award ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-64 right-64 w-8 h-8 m-4 border-2 border-white bg-[#2196F3] rounded-full"></div>

              <div className="max-w-md text-white">
                <p className="text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum
                </p>
              </div>

              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>

            {/* Bottom section with secondary image and text */}
            <div className="mt-16 flex justify-evenly items-center">
              <div className="w-1/3 text-white text-right pr-8">
                <h3 className="text-xl font-medium">
                  Honored by Shri Dharmendra Pradhan ji
                </h3>
                <p className="mt-2">
                  Union Minister for Education
                  <br />
                  Govt. of India - 2023
                </p>
              </div>
              <div
                className={`flex-4 relative bg-gradient-to-r from-blue-500 via-blue-950 to-blue-400 p-2 rounded-lg w-[600px] h-[300px] transform -skew-x-6`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <Image
                    src="/award-2.png"
                    alt="Award ceremony"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-16 left-20 w-8 h-8 border-2 border-white bg-[#2196F3] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
