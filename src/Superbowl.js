import React from 'react'

export default function Superbowl({setResults, teams, afcchampionship, nfcchampionship}) {

    return (
        <form>
            <h1>Superbowl</h1>
            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='superbowl' value={'afc'} id={teams.afcteams[afcchampionship[0]]} hidden onChange={(e) => setResults('superbowl', e.target.value)}></input>
                <label htmlFor={teams.afcteams[afcchampionship[0]]}><img src={teams.afcteams[afcchampionship[0]]} alt={afcchampionship[0]} ></img></label>
                
                <input type='radio' name='superbowl' value={'nfc'} id={teams.nfcteams[nfcchampionship[0]]} hidden onChange={(e) => setResults('superbowl', e.target.value)}></input>
                <label htmlFor={teams.nfcteams[nfcchampionship[0]]} ><img src={teams.nfcteams[nfcchampionship[0]]} alt={afcchampionship[1]}></img></label>
            </div>
            
            <button type='submit' onClick={(e) => {e.preventDefault(); console.log(afcchampionship, nfcchampionship)}}>Championship round --</button>
        </form>
    )
}
