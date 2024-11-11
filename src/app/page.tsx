'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Awards from './components/Awards';
import Learnings from './components/Learnings';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
import News from './components/News';
import Image from 'next/image';
import Form from './components/Form';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="bg-blue-200">
        <p className="text-center text-black text-xl font-bold py-4">
          Learn coding at the nearby{' '}
          <span className="text-blue-800">Coding Pro</span> Institute.{' '}
          <Link href="#" className="text-blue-800 underline">
            Enquire now
          </Link>
        </p>
      </div>

      <Navbar />

      <Hero />

      <Features />

      <Programs />

      <Awards />

      <Learnings />

      <Testimonials />

      <Mentors />

      <News />

      <section className="py-2">
        <Image
          src="/bg-phone.png"
          alt="phone-background"
          width={1500}
          height={1500}
        />
      </section>

      <Form />

      <Footer />
    </div>
  );
}
