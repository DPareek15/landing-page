import React from 'react';
import NewsCard from '../NewsCard';

const News = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          We&apos;ve Also Been In <span className="text-teal-600"> News! </span>
        </h2>
        <div className="flex flex-row justify-center items-center gap-8 p-8">
          <NewsCard
            logo="/print-logo.png"
            source="print"
            date="31 March, 2023"
            image="/news-image.png"
            description="Coding Jr's CEO, Sumit Bhat felicitated at Times 40 Under 40"
          />
          <NewsCard
            logo="/outreach-logo.png"
            source="outreach"
            date="01 March, 2023"
            image="/news-image.png"
            description="Meet Vikas Shukla- The flag bearer of technology and . . ."
          />
          <NewsCard
            logo="/print-logo.png"
            source="print"
            date="01 March, 2023"
            image="/news-image.png"
            description="Meet Vikas Shukla- The flag bearer of technology and . . ."
          />
        </div>
      </div>
    </section>
  );
};

export default News;
