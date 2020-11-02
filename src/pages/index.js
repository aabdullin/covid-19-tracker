import React from 'react';


function App() {
  const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
    'https://reqres.in/api/users/1'
  )

  return (
    <main class="container">
    <div id="root">
      <h1>COVID-19 Tracker</h1>
      <a className='text-muted' href="https://github.com/mathdroid/covid-19-api">Data via Mathdroid's COVID-19 API</a>
    </div>
    <div id="global_cases">
      <h1>Global Cases</h1>
    </div>
    </main>
  );
}
export default App