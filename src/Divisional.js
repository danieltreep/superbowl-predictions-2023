import React from 'react'

export default function Divisional({setResults, teams, afcwildcard, nfcwildcard}) {

     

    function createMatch() {
        return(
            <>
                <div className='match'>
                    <div className='vs'>VS</div>
                    <input type='radio' name='afc4' value={afcwildcard[0]} id={afcwildcard[0]} hidden onChange={(e) => setResults('afc4', e.target.value)}></input>
                    <label htmlFor={afcwildcard[0]}><img src={teams.afcteams[afcwildcard[0]]} alt={afcwildcard[0]} ></img></label>
                    
                    <input type='radio' name='afc4' value={afcwildcard[3]} id={afcwildcard[3]} hidden onChange={(e) => setResults('afc4', e.target.value)}></input>
                    <label htmlFor={afcwildcard[3]} ><img src={teams.afcteams[afcwildcard[3]]} alt={afcwildcard[1]}></img></label>
                </div>
                <div className='match'>
                    <div className='vs'>VS</div>
                    <input type='radio' name='afc5' value={afcwildcard[1]} id={afcwildcard[1]} hidden onChange={(e) => setResults('afc5', e.target.value)}></input>
                    <label htmlFor={afcwildcard[1]}><img src={teams.afcteams[afcwildcard[1]]} alt={afcwildcard[1]} ></img></label>
                    
                    <input type='radio' name='afc5' value={afcwildcard[2]} id={afcwildcard[2]} hidden onChange={(e) => setResults('afc5', e.target.value)}></input>
                    <label htmlFor={afcwildcard[2]} ><img src={[teams.afcteams[afcwildcard[2]]]} alt={afcwildcard[2]}></img></label>
                </div>
            </>
        )
    }
  return (
    <form>
        
        {createMatch()}
        <button type='submit' onClick={(e) => {e.preventDefault(); console.log(afcwildcard, nfcwildcard)}}>Championship round --</button>
    </form>
  )
}
