import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import FeaturesSection from './components/FeatureSectoin';
import FaqSection from './components/Faqsection';
import Question from './components/Question';
import Footer from './components/Footer';

const App = () => {
  const features = [
    {
      id: 1,
      heading: "Detailed Link Analytics",
      detail:
        "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
      img: "https://tinyurl.com/build/assets/feature-1-DBj-yszF.webp",
    },
    {
      id: 2,
      heading: "Fully Branded Domains",
      detail:
        "Customize every part of your links with branded domains — say goodbye to default link shortening!",
      img: "https://tinyurl.com/build/assets/feature-2-CK8gMGGN.webp",
    },
    {
      id: 3,
      heading: "Bulk Short URLs",
      detail:
        "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
      img: "https://tinyurl.com/build/assets/feature-3-DxHuNqyl.webp",
    },
    {
      id: 4,
      heading: "Link Management",
      detail:
        "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
      img: "https://tinyurl.com/build/assets/feature-4-B9Ltz0dA.webp",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="p-18 text-center">
        <h1 className="font-bold text-3xl tracking-wider mb-12">
          TinyURL Plans Include:
        </h1>

        <div className="flex flex-row  justify-around gap">
          {features.map((e) => (
            <Plans key={e.id} heading={e.heading} detail={e.detail} img={e.img} />
          ))}
        </div>
      </div>
      <Hero2 />
      <FeaturesSection />
      <Hero3 />
      <FaqSection />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
