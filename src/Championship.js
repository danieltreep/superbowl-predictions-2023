import React from 'react'

export default function Championship({setResults, teams, afcdivisional, nfcdivisional}) {

  return (
    <form>
        <h1>AFC Championship</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='afc6' value={afcdivisional[0]} id={teams.afcteams[afcdivisional[0]]} hidden onChange={(e) => setResults('afc6', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcdivisional[0]]}><img src={teams.afcteams[afcdivisional[0]]} alt={afcdivisional[0]} ></img></label>
            
            <input type='radio' name='afc6' value={afcdivisional[1]} id={teams.afcteams[afcdivisional[1]]} hidden onChange={(e) => setResults('afc6', e.target.value)}></input>
            <label htmlFor={teams.afcteams[afcdivisional[1]]} ><img src={teams.afcteams[afcdivisional[1]]} alt={afcdivisional[1]}></img></label>
        </div>
        <h1>NFC Championship</h1>
        <div className='match'>
            <div className='vs'>VS</div>
            <input type='radio' name='nfc6' value={nfcdivisional[0]} id={teams.nfcteams[nfcdivisional[0]]} hidden onChange={(e) => setResults('nfc6', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcdivisional[0]]}><img src={teams.nfcteams[nfcdivisional[0]]} alt={nfcdivisional[0]} ></img></label>
            
            <input type='radio' name='nfc6' value={nfcdivisional[1]} id={teams.nfcteams[nfcdivisional[1]]} hidden onChange={(e) => setResults('nfc6', e.target.value)}></input>
            <label htmlFor={teams.nfcteams[nfcdivisional[1]]} ><img src={teams.nfcteams[nfcdivisional[1]]} alt={nfcdivisional[1]}></img></label>
        </div>
        
        <button type='submit' onClick={(e) => {e.preventDefault(); console.log(afcdivisional, nfcdivisional)}}>Superbowl <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg></button>
    </form>
  )
}
