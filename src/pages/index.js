import React from 'react';
import useAxios from 'axios-hooks';
import Cards from './Cards';

const Index = () => (

  <main className='container'>
    <div id='root'>
      <h1>COVID-19 Tracker</h1>
      <a className='text-muted' href='https://github.com/mathdroid/covid-19-api'>Data via Mathdroid's COVID-19 API</a>
    </div>
    <div id='global_cases'>
      <h1>Global Cases</h1>
    </div>
    <div id='cases_apis'>
      <Cards/>
    </div>
  </main>
);

export default Index;
