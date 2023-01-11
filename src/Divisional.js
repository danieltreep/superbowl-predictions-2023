import React from 'react'

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
        <button type='submit' onClick={(e) => {e.preventDefault(); console.log(afcwildcard, nfcwildcard)}}>Championship round --</button>
    </form>
  )
}
