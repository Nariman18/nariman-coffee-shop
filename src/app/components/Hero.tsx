"use client";

import Badge from "./Badge";
import Separator from "./Separator";

function Hero() {
  return (
    <section className="relative h-screen text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/assets/hero/133988-758552232_small.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg-hero_overlay w-full h-full absolute bg-primary/[0.93]"></div>

      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          {/* Badge */}
          <div className="flex flex-col items-center">
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            <h1 className="h1 text-white">
              <span className="text-accent">Coffee</span> & Joy
            </h1>
          </div>
          {/* Separator */}
          <Separator />
          <p className="lead font-light max-w-[300px] md:max-w-[450px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where
            every cup is crafted with passion and warmth
          </p>
          <button className="btn">Our menu</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
