import React from 'react'
import HOC from './HOC';

const Acom = (props) => {
   const {handler , counter ,name} = props;
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handler}>{name}</button>
    </div>
  )
}

export default HOC(Acom)
