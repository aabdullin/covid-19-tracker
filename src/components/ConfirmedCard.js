import React from 'react';
import useAxios from 'axios-hooks'
import Axios from 'axios'



const ConfirmedCard = () => {
  const { data, loading} = useAxios(
    'https://covid19.mathdro.id/api/?confirmed?value'
  )  
  
  return (
      <div id='cases_confirmed'>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

export default ConfirmedCard;
