import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { id: 1, text: 'home', url: '/', number: '00' },
  { id: 2, text: 'destinations', url: '/destinations', number: '01' },
  { id: 3, text: 'crew', url: '/crew', number: '02' },
  { id: 4, text: 'technology', url: '/technology', number: '03' },
];

const NavBar = ({ name }) => {
  const [current, setCurrent] = useState(name || 'home');
  const [isSidebar, setIsSidebar] = useState(false)

  useEffect(() => {
    setCurrent(name);
  }, [name]);

  return (
    <nav className="w-full relative">
      <div className="flex sm:justify-between md:justify-left text-white w-full items-center">
        <Image
          src="/assets/shared/logo.svg"
          height={48}
          width={48}
          alt="logo image"
          className="sm:w-[40px] sm:h-[40px] sm:mx-5 md:mx-10 cursor-pointer"
        />

        <div className="sm:hidden md:flex items-center w-full font-barlow">
          <div className="horizontal-line w-[50%]" />
          <div className="nav-links justify-between w-[80%]">
            <div className="flex pl-14 justify-between max-w-5xl w-full">
              {links.map((link, index) => (
                <>
                  <Link
                    key={index}
                    href={link.url}
                    className={`border-b-4 ${
                      current === link?.text
                        ? 'border-white'
                        : 'border-transparent'
                    } hover:border-light-blue uppercase transition-all ease-in-out font-condensed`}
                  >
                    <div className="flex py-[36px] space-x-4 text-[18px]">
                      <span className="font-semibold">{link.number}</span>
                      <span className="font-light">{link.text}</span>
                    </div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}

        <Image
          src="/assets/shared/icon-hamburger.svg"
          width={24}
          height={21}
          alt="harmburger icon"
          className="lg:hidden md:hidden sm:visible mx-5"
          onClick={() => setIsSidebar(!isSidebar)}
        />
      </div>
      {isSidebar && (
        <div className="z-10 absolute top-0 right-0 sm:flex flex-col md:hidden w-[250px] min-h-screen h-full text-white backdrop-blur-md  bg-light-blue bg-opacity-20">
        <Image
          src="/assets/shared/icon-close.svg"
          width={19}
          height={19}
          alt="close sidebar"
          className='ml-auto my-8 mx-5'
          onClick={() => setIsSidebar(false)}
        />
        <div className="flex flex-col w-full mt-10">
          {links.map((link, index) => (
            <>
              <Link
                key={index}
                href={link.url}
                className={` ${
                  current === link?.text ? 'bg-white/30' : ''
                }  uppercase transition-all ease-in-out font-condensed`}
              >
                <div className="flex px-7 py-[12px] space-x-4 text-[18px]">
                  <span className="font-semibold">{link.number}</span>
                  <span className="font-light">{link.text}</span>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      )}
    </nav>
  );
};

export default NavBar;