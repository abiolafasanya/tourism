/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Layout from '@/layout/Index';
import NavBar from '@/utility/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import Data from 'data/dest.json';

const tabs = [
  { id: 1, text: 'Moon', to: '#moon' },
  { id: 1, text: 'Mars', to: '#mars' },
  { id: 1, text: 'Europa', to: '#europa' },
  { id: 1, text: 'Titan', to: '#titan' },
];

function destinations() {
  const [currentTab, setCurrentTab] = useState(0);
  const data = Data.destinations;
  const [dest, setDest] = useState([]);
  const { name, images, description, distance, travel } = data[currentTab];

  useEffect(() => {
    let isMounted = false;
    const controller = new AbortController();
    console.log(dest);
    // const d = data.filter((item, index) => index < 4 && item )
    // console.log("d Data", d)
    console.log('d Data', data.length);
    setDest(data);

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [data, dest]);

  return (
    <Layout
      title="Destination"
      description="destination of tourism in the space"
      background="destination-container"
    >
      <NavBar name="destinations" />
      <div className="py-8 sm:w-full lg:w-[90%] lg:ml-auto">
        <div className="md:ml-10 lg:ml-px flex space-x-4 sm:text-lg sm:justify-center md:justify-start md:text-2xl font-condensed">
          <span className="text-white opacity-50">01</span>
          <h5 className="text-white tracking-[0.25em]">
            PICK YOUR DESTINATION
          </h5>
        </div>
        <div className="flex sm:flex-col lg:flex-row  md:my-14 w-full">
          <div className="lg:w-4/6 sm:w-full">
            <Image
              src={images.png}
              className="sm:hidden lg:block"
              width={445}
              height={445}
              alt={name}
            />
            <Image
              src={images.png}
              className="md:block sm:hidden lg:hidden mx-auto my-5"
              width={300}
              height={300}
              alt={name}
            />
            <Image
              src={images.png}
              className="sm:block md:hidden mx-auto my-5"
              width={170}
              height={170}
              alt={name}
            />
          </div>
          <div className="lg:w-4/6 sm:w-full md:w-full">
            <ul className="flex sm:justify-center mx-auto  lg:justify-start md:space-x-12 sm:space-x-8 text-light-blue">
              {data.map((tab, index) => (
                <Link
                  className={`font-condensed uppercase text-xl tracking-sm hover:border-b-4 cursor-pointer hover:border-light-blue py-3 px-1 ${
                    currentTab === index
                      ? 'border-white border-b-4'
                      : 'border-none'
                  }`}
                  key={index}
                  href={`#${tab.name}`}
                  onClick={() => setCurrentTab(index)}
                >
                  {tab.name}
                </Link>
              ))}
            </ul>

            <div className="py-5 flex flex-col justify-between items-center lg:items-start">
              <h1 className="sm:text-[56px] text-center lg:text-left md:text-[7rem] uppercase font-bellefair text-white">
                {name}
              </h1>
              <p className="text-[18px] sm:w-[327px] md:w-[573px] lg:w-[444px] sm:text-center lg:text-justify text-light-blue font-barlow">
                {description}
              </p>

              <div className="bg-light-blue h-px my-8 opacity-50 sm:w-[327px] md:w-[573px] lg:w-[444px]" />

              <div className="flex sm:flex-col md:flex-row items-center justify-between md:w-[573px] lg:w-[444px]">
                <div className="flex flex-col sm:my-4 md:my-px uppercase text-center">
                  <h5 className="font-condensed spacing-2 text-[14px] text-light-blue md:items-center">
                    AVG. DISTANCE
                  </h5>
                  <h2 className="font-bellefair text-2xl pt-2 text-white">
                    {distance}
                  </h2>
                </div>
                <div className="flex flex-col uppercase text-center md:justify-between md:items-center">
                  <h5 className="font-condensed spacing-2 text-[14px] text-light-blue">
                    Est. travel time
                  </h5>
                  <h2 className="font-bellefair text-2xl pt-2 text-white">
                    {travel}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default destinations;
