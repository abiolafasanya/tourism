// import { Inter } from '@next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import Layout from '@/layout/Index';
import NavBar from '@/utility/Navbar';
import {menu} from 'data/index';

export default function Home() {
  return (
    <Layout>
      <NavBar name='home'/>

      <div className="py-8 sm:w-full lg:w-[80%] lg:mx-auto">
        <div className="flex sm:flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col sm:items-center lg:items-start md:mt-12 sm:w-full sm:text-[16px] lg:w-1/2">
            <h5 className="font-condensed md:text-center text-light-blue uppercase tracking-widest text-[24px]">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="font-bellefair sm:text-[6rem] md:text-[150px] lg:text-[9rem] text-white">SPACE</h1>
            <p className="sm:text-base font-barlow sm:text-center lg:text-justify md:text-[16px] lg:text-lg text-light-blue sm:w-[327px] md:w-[444px] lg:w-[80%]">
              Let’s face it if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="lg:w-1/2 sm:mt-[3rem] mt-1 flex">
            <div className='ml-auto sm:w-[150px] md:w-[274px] sm:h-[150px] md:h-[274px] p-1 border rounded-full bg-white md:mt-[56px] lg:mt-px'>
              <h2 className='md:text-2xl sm:text-[20px] sm:my-[4rem] md:my-[7.5rem] sm:mx-[1.8rem] md:mx-[4.5rem] uppercase font-bellefair text-dark-blue t0'>Explore</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
