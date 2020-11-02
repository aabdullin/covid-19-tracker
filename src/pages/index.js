import React from 'react';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
  <div style={{ color: 'purple' }}>
    <h1 className='text-success'>Hello Gatsby!</h1>
    <p className='text-muted'>What a world.</p>
    <img src='https://source.unsplash.com/random/400x200' />
  </div>
);
export default Home;
