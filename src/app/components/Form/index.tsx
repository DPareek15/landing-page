import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Form = () => {
  return (
    <section className="py-20 flex flex-row justify-center items-center max-w-screen-xl mx-auto shadow-lg p-12 gap-8 rounded-2xl w-3/4 h-[35rem]">
      <div className="flex-1">
        <Image
          src="/programming-woman.png"
          alt="programming girl"
          width={500}
          height={500}
        />
      </div>
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-start gap-4">
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Find Out More
          </h2>
          <h2 className="text-3xl font-bold text-center text-blue-500">
            Reasons To Stay
          </h2>
        </div>
        <form className="max-w-lg mx-auto bg-white">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Mobile no."
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Institute name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">
                Creating an account means you&apos;re okay with our Terms of
                Service, Privacy Policy, and default Notification Settings
              </span>
            </label>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 w-[10rem] rounded hover:bg-blue-700"
            >
              Enquire Now
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center w-full">
          <p className="text-center mt-4">
            Already Have An Account?{' '}
            <Link href="#" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Form;
