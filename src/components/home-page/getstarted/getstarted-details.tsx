"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../../ui/wobble-card";
import { BiRightArrow } from "react-icons/bi";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";

export function GetStartedDetails() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-black min-h-[500px] lg:min-h-[200px]"
        className=""
      >
        <div className="max-w-md">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Pixelwind UI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base opacity-60">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/bg-banner2.webp"
          width={300}
          height={300}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-20 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 max-h-[350px] bg-black flex "
        className=""
      >
        <div className="flex justify-center size-full flex-col">
          <div className="flex flex-col justify-center items-center text-gradient">
            <span className="font-semibold text-sm">OVER</span>
            <span className="text-6xl font-extrabold">100+</span>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 gap-2">
            <span className="text-lg font-semibold text-black dark:text-white">
              Components
            </span>
            <p className="max-w-[26rem] text-center text-sm font-medium opacity-60">
              Kick-start your project effortlessly with Pixelwind UI's wide
              range of examples and layouts using Tailwind CSS.
            </p>
            <span className=" hover:underline mt-2 font-medium flex items-center gap-1 z-10">
              Get Started <FaAngleRight size={13} />{" "}
            </span>
          </div>
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-950 min-h-[500px] lg:min-h-[600px] xl:min-h-[350px]">
        <div className="max-w-xl">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base opacity-60">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/bg-banner1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[-5%] bottom-12 scale-150 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
