import React from 'react';
import useAxios from 'axios-hooks'
import Axios from 'axios'



function Cards(props) {
  const [{ data, loading, error }] = useAxios('https://covid19.mathdro.id/api')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
 
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Cards;
