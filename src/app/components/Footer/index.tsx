import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-blue-700 to-blue-500 text-white py-16 mt-16 flex flex-row justify-center items-center">
      <div className="container mx-auto flex flex-col justify-center items-start gap-4 px-24">
        <h1 className="text-white text-3xl">Let&apos;s keep in touch!</h1>
        <p className="text-white text-sm">
          Request a CodingPro Institute enquiry!{' '}
        </p>
        <div className="flex flex-row items-center justify-center">
          <input
            type="text"
            placeholder="Institute name"
            className="px-4 py-2 rounded-l-3xl w-1/2 border border-[#9BFEFF] placeholder-[#9BFEFF] bg-transparent"
          />
          <button className="bg-gradient-to-b from-[#9BFEFF] to-[#5D9899] px-4 py-2 rounded-r-3xl border bordet-[#9BFEFF]">
            <ArrowRight className="text-black" />
          </button>
        </div>
        <Link href="#" className="text-white">
          Create Account
        </Link>
        <Link href="#" className="text-white">
          Sign In
        </Link>
        <div className="flex flex-row items-center justify-start">
          <Image
            src="/icons/phone-icon.png"
            alt="phone icon"
            width={16}
            height={16}
          />
          <p className="text-white text-sm">+91 97973 59144</p>
        </div>
        <div className="flex flex-row items-center justify-start">
          <Image
            src="/icons/mail-icon.png"
            alt="phone icon"
            width={16}
            height={16}
          />
          <p className="text-white text-sm">codingjr.in@gmail.com</p>
        </div>
        <div className="flex flex-row items-center justify-start">
          <Image
            src="/icons/map-pin-icon.png"
            alt="phone icon"
            width={16}
            height={16}
          />
          <p className="text-white text-sm">AIC-BHU, Varanasi, 421004</p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-start gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Campus Training Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Professional Training Program
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  B. Tech
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  B. Des.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Follow Us
            </h3>
            <div className="flex flex-row items-center justify-center gap-8">
              <Image src="/fb-logo.png" alt="facebook" width={30} height={30} />
              <Image src="/ig-logo.png" alt="facebook" width={30} height={30} />
              <Image src="/ln-logo.png" alt="facebook" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
