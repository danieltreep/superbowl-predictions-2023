import React from 'react';
import nfl from './images/nfl.png';

export default function Start({setName}) {
  return (
    <>
        <img src={nfl} alt='nfl'></img>
        <h1>Welcome to the boys superbowl predictions!</h1>

        <form onSubmit={(e) => e.preventDefault}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' onChange={(e) => setName(e.target.value)} required></input>
            <button type='submit'>Let's predict this shit</button>
        </form>
    </>
  )
}
