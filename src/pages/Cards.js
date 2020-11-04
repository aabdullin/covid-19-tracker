import React from 'react';
import useAxios from 'axios-hooks';
import Axios from 'axios';

function Cards(props) {
  const [{ data, loading, error }] = useAxios('https://covid19.mathdro.id/api');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div id='Cards'>
      <h1>Confirmed:</h1>
      <pre>{JSON.stringify(data.confirmed.value, null, 2)}</pre>
      <h1>Recovered:</h1>
      <pre>{JSON.stringify(data.recovered.value, null, 2)}</pre>
      <h1>Deaths:</h1>
      <pre>{JSON.stringify(data.deaths.value, null, 2)}</pre>
    </div>
  );
}

export default Cards;
