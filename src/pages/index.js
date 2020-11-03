import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';

const Home = () => (
  <div style={{ color: 'purple' }}>
    <h1 className='text-success'>Hello Gatsby!</h1>
    <p className='text-muted'>What a world.</p>
    <img src='https://source.unsplash.com/random/400x200' />
  </div>
);
export default Home;
