import React from 'react';
import useAxios from 'axios-hooks';
import Card from './Card';

const Cards = () => {
  const [{ data, loading, error }] = useAxios('https://covid19.mathdro.id/api');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const confirmedVal = data.confirmed.value;
  const recoveredVal = data.recovered.value;
  const deathVal = data.deaths.value;

  return (
    <div className='d-flex flex-row'>
      <Card value={confirmedVal} class='badge badge-warning' name='Confirmed'> </Card>
      <Card value={recoveredVal} class='badge badge-success' name='Recovered'> </Card>
      <Card value={deathVal} class='badge badge-danger' name='Deaths'> </Card>
    </div>
  );
};

export default Cards;
