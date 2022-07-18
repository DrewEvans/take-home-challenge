import React from 'react';
import GetSales from '../components/GetSales';
import { SearchRedirect } from '../components/SearchRedirect';

const Home = () => {
  return (
    <>
      <header className='header-main'>
        <h1>SECRETESCAPES</h1>
        <SearchRedirect />
      </header>
      <main className='deals-container'>
        <GetSales />
      </main>
    </>
  );
};

export default Home;
