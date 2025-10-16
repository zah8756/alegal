"use client";

import { useMobileDetection } from "../hooks/useMobileDetection";

const Hero = () => {
  const isMobile = useMobileDetection();

  const DesktopHero = () => (
    <div className="w-full min-h-[750px] bg-[url(/LandingHero.jpg)] bg-cover bg-center bg-no-repeat flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col w-full max-w-[45%] justify-center gap-8 text-white">
          <h1 className="text-5xl font-bold mb-6">
            We&apos;re more than an <br />
            answering service
          </h1>

          <p className="text-2xl not-italic font-semibold leading-normal">
            Answering Legal has everything you need to make sure your firm never
            misses another opportunity.
          </p>

          <div className="flex w-56 flex-col items-center">
            <h3 className="text-center text-2xl not-italic font-bold">
              Excellent 4.84
            </h3>
            <h1 className="text-[#ffa130] text-5xl font-semibold tracking-widest text-center">
              ★★★★★
            </h1>
            <span className="font-semibold text-xl tracking-normal text-center align-middle">
              based on 230 reviews
            </span>
          </div>

          <button className="bg-button text-white px-6 py-3 rounded-lg w-fit hover:bg-bHover transition-all cursor-pointer duration-300">
            <span className="text-2xl not-italic font-semibold">
              See our pricing
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-center content-center self-stretch gap-4 py-8">
          <h2 className='relative text-center text-3xl not-italic font-bold after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[#3CCED7] after:rounded-full'>
            Heres what we can do for your law firm
          </h2>
        </div>
      </div>
    </div>
  );

  const MobileHero = () => (
    <div className="w-full flex flex-col">
      <div className="w-full h-[400px] bg-[url(/LandingHeroMobile.jpg)] bg-cover bg-center bg-no-repeat"></div>

      <div className="w-full bg-[#161641] px-4 py-8">
        <div className="flex flex-col w-full justify-center items-center gap-4 text-white">
          <div className="flex w-full flex-row items-center justify-center gap-15">
            <div className="text-center text-2xl not-italic font-bold">
              Excellent 4.84
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[#ffa130] text-3xl font-semibold tracking-widest text-center">
                ★★★★★
              </h1>
              <span className="font-semibold text-lg tracking-normal text-center align-middle">
                based on 230 reviews
              </span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            We&apos;re more than an <br />
            answering service
          </h1>
          <p className="text-lg not-italic font-semibold leading-normal">
            Answering Legal has everything you need to make sure your firm never
            misses another opportunity.
          </p>

          <button className="bg-button text-white px-4 py-2 rounded-lg w-full hover:bg-bHover transition-all duration-300">
            <span className="text-lg not-italic font-semibold">
              See our pricing
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileHero /> : <DesktopHero />;
};

export default Hero;
