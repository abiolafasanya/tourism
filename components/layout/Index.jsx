import React from 'react';
import NavBar from '@/utility/Navbar';
import Head from 'next/head';

const Layout = ({ title, description, children, background }) => {
  return (
    <>
      <Head>
        <title>{title || 'Tourism'}</title>
        <meta
          name="description"
          content={description || 'Tourism Challenge Frontend Mentor'}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <main className={`home-container ${background}`}>{children}</main>
    </>
  );
};

export default Layout;
