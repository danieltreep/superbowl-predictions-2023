import React from 'react'
import { Link } from 'react-router-dom'

export default function Divisional({setResults, teams, afcwildcard, nfcwildcard}) {

  return (
    <form>
        <h1>AFC Divisional</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='afc4' value={afcwildcard[0]} id={teams.afcteams[afcwildcard[0]]} hidden onChange={(e) => setResults('afc4', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcwildcard[0]]}><img src={teams.afcteams[afcwildcard[0]]} alt={afcwildcard[0]} ></img></label>
            
            <input type='radio' name='afc4' value={afcwildcard[3]} id={teams.afcteams[afcwildcard[3]]} hidden onChange={(e) => setResults('afc4', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcwildcard[3]]} ><img src={teams.afcteams[afcwildcard[3]]} alt={afcwildcard[1]}></img></label>
        </div>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='afc5' value={afcwildcard[1]} id={teams.afcteams[afcwildcard[1]]} hidden onChange={(e) => setResults('afc5', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcwildcard[1]]}><img src={teams.afcteams[afcwildcard[1]]} alt={afcwildcard[1]} ></img></label>
            
            <input type='radio' name='afc5' value={afcwildcard[2]} id={teams.afcteams[afcwildcard[2]]} hidden onChange={(e) => setResults('afc5', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcwildcard[2]]} ><img src={[teams.afcteams[afcwildcard[2]]]} alt={afcwildcard[2]}></img></label>
        </div>
        <h1>NFC Divisional</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='nfc4' value={nfcwildcard[0]} id={teams.nfcteams[nfcwildcard[0]]} hidden onChange={(e) => setResults('nfc4', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcwildcard[0]]}><img src={teams.nfcteams[nfcwildcard[0]]} alt={nfcwildcard[0]} ></img></label>
            
            <input type='radio' name='nfc4' value={nfcwildcard[3]} id={teams.nfcteams[nfcwildcard[3]]} hidden onChange={(e) => setResults('nfc4', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcwildcard[3]]} ><img src={teams.nfcteams[nfcwildcard[3]]} alt={nfcwildcard[1]}></img></label>
        </div>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='nfc5' value={nfcwildcard[1]} id={teams.nfcteams[nfcwildcard[1]]} hidden onChange={(e) => setResults('nfc5', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcwildcard[1]]}><img src={teams.nfcteams[nfcwildcard[1]]} alt={nfcwildcard[1]} ></img></label>
            
            <input type='radio' name='nfc5' value={nfcwildcard[2]} id={teams.nfcteams[nfcwildcard[2]]} hidden onChange={(e) => setResults('nfc5', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcwildcard[2]]} ><img src={teams.nfcteams[nfcwildcard[2]]} alt={nfcwildcard[2]}></img></label>
        </div>
        <Link to='/championship'><button> Go to Championship  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg></button></Link>
    </form>
  )
}
