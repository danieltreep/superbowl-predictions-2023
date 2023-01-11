import React from 'react'

import chargers from './images/chargers.png';
import jaguars from './images/jaguars.png';
import ravens from './images/ravens.png';
import bengals from './images/bengals.png';
import dolphins from './images/dolphins.png';
import bills from './images/bills.png';
import bucs from './images/bucs.png';
import sf from './images/sf.png';
import cowboys from './images/cowboys.png';
import giants from './images/giants.png';
import vikings from './images/vikings.png';
import seahawks from './images/seahawks.png';

export default function Wildcard({setResults, results, setPage}) {

    function checkSubmit(e) {
        e.preventDefault();
        setPage('Divisional');
    }

    return (
        <form onSubmit={(e) => checkSubmit(e)}>
            <h1>AFC Wildcard</h1>
            <p>Click on the logos to select the winners</p>
            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc1' value='5' id='chargers' hidden  onChange={(e) => setResults('afc1', e.target.value)}></input>
                <label htmlFor='chargers'><img src={chargers} alt='chargers' ></img></label>
                
                <input type='radio' name='afc1' value='4' id='jaguars' hidden  onChange={(e) => setResults('afc1', e.target.value)}></input>
                <label htmlFor='jaguars' ><img src={jaguars} alt='jaguars'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc2' value='7' id='dolphins' hidden  onChange={(e) => setResults('afc2', e.target.value)}></input>
                <label htmlFor='dolphins'><img src={dolphins} alt='dolphins' ></img></label>
                
                <input type='radio' name='afc2' value='2' id='bills' hidden  onChange={(e) => setResults('afc2', e.target.value)}></input>
                <label htmlFor='bills' ><img src={bills} alt='bills'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc3' value='6' id='ravens' hidden  onChange={(e) => setResults('afc3', e.target.value)}></input>
                <label htmlFor='ravens'><img src={ravens} alt='ravens' ></img></label>
                
                <input type='radio' name='afc3' value='3' id='bengals' hidden  onChange={(e) => setResults('afc3', e.target.value)}></input>
                <label htmlFor='bengals' ><img src={bengals} alt='bengals'></img></label>
            </div>

            <h1>NFC Wildcard</h1>
            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc1' value='5' id='cowboys' hidden  onChange={(e) => setResults('nfc1', e.target.value)}></input>
                <label htmlFor='cowboys'><img src={cowboys} alt='cowboys' ></img></label>
                
                <input type='radio' name='nfc1' value='4' id='bucs' hidden  onChange={(e) => setResults('nfc1', e.target.value)}></input>
                <label htmlFor='bucs' ><img src={bucs} alt='bucs'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc2' value='6' id='giants' hidden  onChange={(e) => setResults('nfc2', e.target.value)}></input>
                <label htmlFor='giants'><img src={giants} alt='giants' ></img></label>
                
                <input type='radio' name='nfc2' value='3' id='vikings' hidden  onChange={(e) => setResults('nfc2', e.target.value)}></input>
                <label htmlFor='vikings' ><img src={vikings} alt='vikings'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc3' value='7' id='seahawks' hidden  onChange={(e) => setResults('nfc3', e.target.value)}></input>
                <label htmlFor='seahawks'><img src={seahawks} alt='seahawks' ></img></label>
                
                <input type='radio' name='nfc3' value='2' id='sf' hidden  onChange={(e) => setResults('nfc3', e.target.value)}></input>
                <label htmlFor='sf' ><img src={sf} alt='sf'></img></label>
            </div>
            <button type='submit'>Divisional round --</button>
        </form>
    )
}
