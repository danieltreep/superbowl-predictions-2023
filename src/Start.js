import React from 'react';
import { Link } from 'react-router-dom';
import nfl from './images/nfl.png';


export default function Start({setName, names}) {

  function onChange(e) {
    setName(names[e]);
    const button = document.getElementById('predict');
    button.disabled = false;
    const welcome = document.querySelector('.welcome');
    welcome.innerHTML = `Welcome <img className='welcomeimg' src=${names[e]}></img>`;
  }

  return (
    <>
      <img src={nfl} alt='nfl'></img>
      <h1 className='welcome'>Welcome to the boys superbowl predictions!</h1>
      <form>
        <select id='name' defaultValue='Choose your name' onChange={(e) => onChange(e.target.value)}>
          <option disabled>Choose your name</option>
          <option value='alec'>Alec</option>
          <option value='bobby'>Bobby</option>
          <option value='elvis'>Elvis</option>
          <option value='ivar'>Ivar</option>
          <option value='daniel'>Daniel</option>
        </select>
          
        <Link to='/wildcard'><button id='predict' disabled>Let's predict this shit  </button></Link>
    </form>
    </>
  )
}
