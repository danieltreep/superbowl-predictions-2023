import React from 'react'

export default function Championship({setResults, teams, afcdivisional, nfcdivisional}) {

  return (
    <form>
        <h1>AFC Divisional</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='afc6' value={afcdivisional[0]} id={teams.afcteams[afcdivisional[0]]} hidden onChange={(e) => setResults('afc6', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcdivisional[0]]}><img src={teams.afcteams[afcdivisional[0]]} alt={afcdivisional[0]} ></img></label>
            
            <input type='radio' name='afc6' value={afcdivisional[1]} id={teams.afcteams[afcdivisional[1]]} hidden onChange={(e) => setResults('afc6', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcdivisional[1]]} ><img src={teams.afcteams[afcdivisional[1]]} alt={afcdivisional[1]}></img></label>
        </div>
        <h1>NFC Divisional</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='nfc6' value={nfcdivisional[0]} id={teams.nfcteams[nfcdivisional[0]]} hidden onChange={(e) => setResults('nfc6', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcdivisional[0]]}><img src={teams.nfcteams[nfcdivisional[0]]} alt={nfcdivisional[0]} ></img></label>
            
            <input type='radio' name='nfc6' value={nfcdivisional[1]} id={teams.nfcteams[nfcdivisional[1]]} hidden onChange={(e) => setResults('nfc6', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcdivisional[1]]} ><img src={teams.nfcteams[nfcdivisional[1]]} alt={nfcdivisional[1]}></img></label>
        </div>
        
        <button type='submit' onClick={(e) => {e.preventDefault(); console.log(afcdivisional, nfcdivisional)}}>Championship round --</button>
    </form>
  )
}
