import React from 'react';
import useAxios from 'axios-hooks';
import Cards from '../components/Cards';
import Rotate from '../components/RotateImage';
import Wrapper from '../components/WrapperComponent';

const [{ data }] = useAxios('https://covid19.mathdro.id/api');
const dateAndTime = data.lastUpdate.value;

const Index = () => (
  <main id='container'>
    <div id='root'>
      <Rotate> <img src='https://cdn2.iconfinder.com/data/icons/medical-5-5/128/medical_radioactivity-256.png' width='50' height='50' /> </Rotate>
      <h1>COVID-19 Tracker</h1>
      <a id='text-muted' href='https://github.com/mathdroid/covid-19-api'>Data via Mathdroids COVID-19 API</a>
    </div>
    <Wrapper>
      <div id='global_cases'>
        <h1>Global Cases</h1>
        Last updated: {dateAndTime}
      </div>
      <div id='cases_apis'>
        <Cards/>
      </div>
    </Wrapper>
  </main>
);

export default Index;
