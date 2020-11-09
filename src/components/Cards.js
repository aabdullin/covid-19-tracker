import React from 'react';
import useAxios from 'axios-hooks';
import Card from './Card';

const Cards = () => {
  const [{ data, loading, error }] = useAxios('https://covid19.mathdro.id/api');
  const confirmedVal = JSON.stringify(data.confirmed.value, null, 2);
  const recoveredVal = JSON.stringify(data.recovered.value, null, 2);
  const deathVal = JSON.stringify(data.deaths.value, null, 2);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div id='Cards'>
      <Card value={confirmedVal} class='badge badge-warning' name='Confirmed'> </Card>
      <Card value={recoveredVal} class='badge badge-success' name='Recovered'> </Card>
      <Card value={deathVal} class='badge badge-danger' name='Deaths'> </Card>
    </div>
  );
};

export default Cards;

