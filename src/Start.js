import React from 'react';
import { Link } from 'react-router-dom';
import nfl from './images/nfl.png';

export default function Start({setName}) {

  function onChange(e) {
    setName(e);
    const button = document.getElementById('predict');
    button.disabled = false;
  }

  return (
    <>
      <img src={nfl} alt='nfl'></img>
      <h1>Welcome to the boys superbowl predictions!</h1>
      <form>
        <select id='name' defaultValue='Choose your name' onChange={(e) => onChange(e.target.value)}>
          <option disabled>Choose your name</option>
          <option value='Alec'>Alec</option>
          <option value='Bobby'>Bobby</option>
          <option value='Elvis'>Elvis</option>
          <option value='Ivar'>Ivar</option>
          <option value='Daniel'>Daniel</option>
        </select>
          
        <Link to='/wildcard'><button id='predict' disabled>Let's predict this shit  </button></Link>
    </form>
    </>
  )
}
