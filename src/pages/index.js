import React from 'react';


function App() {
  const [{ confirmed, loading, error }, refetch] = useAxios(
    'https://covid19.mathdro.id/api/confirmed'
  )
  // const [{ data, loading, error }, refetch] = useAxios(
  //   'https://covid19.mathdro.id/api/recovered'
  // )
  // const [{ data, loading, error }, refetch] = useAxios(
  //   'https://covid19.mathdro.id/api/deaths'
  // )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <main class="container">
    <div id="root">
      <h1>COVID-19 Tracker</h1>
      <a className='text-muted' href="https://github.com/mathdroid/covid-19-api">Data via Mathdroid's COVID-19 API</a>
    </div>
    <div id="global_cases">
      <h1>Global Cases</h1>
    </div>
    <div id="cases_apis">
      <div id="cases_confirmed">
        <button onClick={refetch}>refetch</button>
        <a>Confirmed:</a>
        <pre>{JSON.stringify(confirmed, null, 2)}</pre>
      </div>
      <div id="cases_recovered">
        <h1>Recovered:</h1>
      </div>
      <div id="deaths">
        <h1>Deaths:</h1>
      </div>

    </div> 
    </main>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
export default App