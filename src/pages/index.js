import React from 'react';


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
      <h1>Confirmed:</h1>
      <ConfirmedCard/>
      <div id='cases_confirmed'>
      </div>
      <div id='cases_recovered'>
        <h1>Recovered:</h1>
      </div>
      <div id='deaths'>
        <h1>Deaths:</h1>
      </div>
    </div>
  </main>
);

export default Index;
