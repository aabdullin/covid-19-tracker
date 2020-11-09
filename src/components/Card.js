import React from 'react';

const Card = (props) => {
  return (
    <div className='d-inline-flex p-2'>
      <pre>{props.value}</pre>
      <span className={props.class}>{props.name}</span>
    </div>
  );
};

export default Card;
