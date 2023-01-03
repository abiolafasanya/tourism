/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '@/layout/Index';
import NavBar from '@/utility/Navbar';
import techData from 'data/dest.json';
import Image from 'next/image';

const technology = () => {
  const data = techData.technology;
  const [current, setCurrent] = useState(0);
  const [tech, setTech] = useState([]);
  const { name, images, description } = tech;

  useEffect(() => {
    console.log(data);
    setTech(data[current]);
  }, [data, current]);

  return (
    <Layout
      background="tech-container"
      title="Technology"
      description="Technology area of tourism website"
    >
      <NavBar name="technology" />

      <div className="py-8 sm:w-full lg:w-[90%] lg:ml-auto">
        <div className="w-full md:pb-6 lg:pb-px md:md:mx-10 sm:text-center md:text-left sm:justify-center md:justify-start sm:mb-8 flex lg:flex-row space-x-4 sm:text-lg md:text-xl lg:text-2xl font-condensed">
          <span className="text-light-blue opacity-50">03</span>
          <h5 className="text-white tracking-[0.25em] uppercase">
            SPACE LAUNCH 101
          </h5>
        </div>

        <Image
              src={images?.landscape}
              className="w-full h-full sm:block lg:hidden"
              width={375}
              height={375}
              alt={name}
            />

        <div className="flex items-center sm:flex-col lg:flex-row">
          <div className="flex items-center sm:flex-col lg:flex-row">
            <div className="flex sm:flex-row sm:items-center sm:my-5 md:my-7 lg:my-px lg:items-start sm:space-x-6 lg:space-x-px lg:flex-col lg:space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={` ${
                    current === index ? 'bg-white' : 'transparent text-white'
                  } font-bellefair sm:text-[16px] lg:text-[32px] border border-opacity-50 border-light-blue sm:h-[40px] md:h-[60px] lg:h-[80px] sm:w-[40px] md:w-[60px] lg:w-[80px] text-center cursor-pointer flex justify-center items-center p-1px rounded-full`}
                  onClick={() => setCurrent(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="sm:mx-auto lg:mx-14">
              <h5 className="font-condensed text-[16px] sm:text-center lg:text-left text-white opacity-50">
                THE TERMINOLOGY…
              </h5>
              <h1 className="text-white sm:text-center lg:text-left font-bellefair sm:text-[24px] md:text-[40px] lg:text-[55px] uppercase sm:w-[327px] md:w-[457px] lg:w-[470px]">
                {name}
              </h1>
              <p className="text-light-blue font-barlow sm:text-center lg:text-justify sm:mt-5 lg:mt-px sm:text[16px] lg:text-[18px] sm:w-[327px] md:w-[457px] lg:w-[444px]">
                {description}
              </p>
            </div>
          </div>
          <div>
            <Image
              src={images?.portrait}
              className="w-full pl-12 sm:hidden lg:block"
              width={515}
              height={527}
              alt={name}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default technology;
