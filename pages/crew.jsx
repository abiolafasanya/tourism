/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Layout from '@/layout/Index';
import NavBar from '@/utility/Navbar';
import Image from 'next/image';
import crewData from 'data/dest.json';
import { motion } from 'framer-motion';

const motion1 = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const crew = (props) => {
  const data = crewData.crew;
  const [profile, setProfile] = useState([]);
  const [current, setCurrent] = useState(0);
  const { name, role, bio, images } = profile;

  useEffect(() => {
    console.log(data);
    setProfile(data[current]);
  }, [profile, current, data]);
  return (
    <Layout
      title="Crew"
      description="Crew description of tourism travel min-h-screen"
      background="crew-container"
    >
      <NavBar name="crew" />
      <div className="sm:py-8 md:py-0 sm:w-full lg:w-[90%] lg:ml-auto md:ml-10">
        <div className="flex space-x-4 sm:text-lg sm:justify-center md:justify-start md:text-2xl font-condensed">
          <span className="text-white opacity-50">02</span>
          <h5 className="text-white tracking-[0.25em] uppercase">
            Meet your crew
          </h5>
        </div>

        <div className="flex sm:flex-col-reverse md:flex-col lg:flex-row items-center justify-between">
          <div className="uppercase lg:w-[60%] flex sm:flex-col sm:w-[327px]">
            <h4 className="md:text-[32px] sm:text-center md:mt-14 lg:mt-px lg:text-justify sm:text-[16px] text-white opacity-50 font-bellefair">
              {role}
            </h4>
            <h1 className="md:text-[40px] lg:text-[56px] sm:text-[24px] md:w-[458px] lg:w-[488px] sm:text-center lg:text-justify text-white font-bellefair">{name}</h1>
            <p className="lg:text-[18px] sm:text-[16px] sm:mb-14 md:mb-2 sm:w-[327px] md:w-[458px] lg:w-[444px] sm:text-center lg:text-justify text-light-blue font-barlow">{bio}</p>
            <div className="sm:hidden lg:flex md:mt-20 space-x-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    current === index ? 'opacity-100' : 'opacity-50'
                  } cursor-pointer bg-white rounded-full p-[8px]`}
                  onClick={() => setCurrent(index)}
                ></div>
              ))}
            </div>
          </div>
            <div className="sm:my-10 md:my-12 sm:flex lg:hidden space-x-4 sm:justify-center sm:mb-5">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    current === index ? 'opacity-100' : 'opacity-50'
                  } cursor-pointer bg-white rounded-full p-[8px]`}
                  onClick={() => setCurrent(index)}
                ></div>
              ))}
            </div>
          <motion.div
            className="lg:w-[40%]"
            initial="hidden"
            animate="visible"
            variants={motion1}
          >
            <Image src={images?.png} width={568} height={712} alt={name} className='sm:hidden md:hidden lg:block' />
            <Image src={images?.png} width={456} height={572} alt={name} className='sm:hidden md:block w-full lg:hidden w-4/5 mx-auto mt-7' />
            <Image src={images?.png} width={327} height={223} alt={name} className='sm:block md:hidden w-4/5 mx-auto mt-7' />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default crew;
