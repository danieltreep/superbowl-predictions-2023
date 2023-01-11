import React from 'react'
import { Link } from 'react-router-dom'

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
            
            <button> <Link to='/summary'>Go to summary </Link> <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg></button>
        </form>
    )
}
