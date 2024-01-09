import React from 'react'
import { Link } from 'react-router-dom'

import packers from './images/packers.png';
import steelers from './images/steelers.png';
import lions from './images/lions.png';
import texans from './images/texans.png';
import browns from './images/browns.png';
import dolphins from './images/dolphins.png';
import bills from './images/bills.png';
import bucs from './images/bucs.png';
import cowboys from './images/cowboys.png';
import rams from './images/rams.png';
import chiefs from './images/chiefs.png';
import eagles from './images/eagles.png';

export default function Wildcard({setResults}) {

    return (
        <form>
            <h1>AFC Wildcard</h1>
            <p>Click on the logos to select the winners</p>
            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc1' value='5' id='browns' hidden  onChange={(e) => setResults('afc1', e.target.value)}></input>
                <label htmlFor='browns'><img src={browns} alt='browns' ></img></label>
                
                <input type='radio' name='afc1' value='4' id='texans' hidden  onChange={(e) => setResults('afc1', e.target.value)}></input>
                <label htmlFor='texans' ><img src={texans} alt='texans'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc2' value='7' id='steelers' hidden  onChange={(e) => setResults('afc2', e.target.value)}></input>
                <label htmlFor='steelers'><img src={steelers} alt='steelers' ></img></label>
                
                <input type='radio' name='afc2' value='2' id='bills' hidden  onChange={(e) => setResults('afc2', e.target.value)}></input>
                <label htmlFor='bills' ><img src={bills} alt='bills'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='afc3' value='6' id='dolphins' hidden  onChange={(e) => setResults('afc3', e.target.value)}></input>
                <label htmlFor='dolphins'><img src={dolphins} alt='dolphins' ></img></label>
                
                <input type='radio' name='afc3' value='3' id='chiefs' hidden  onChange={(e) => setResults('afc3', e.target.value)}></input>
                <label htmlFor='chiefs' ><img src={chiefs} alt='chiefs'></img></label>
            </div>

            <h1>NFC Wildcard</h1>
            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc1' value='5' id='eagles' hidden  onChange={(e) => setResults('nfc1', e.target.value)}></input>
                <label htmlFor='eagles'><img src={eagles} alt='eagles' ></img></label>
                
                <input type='radio' name='nfc1' value='4' id='bucs' hidden  onChange={(e) => setResults('nfc1', e.target.value)}></input>
                <label htmlFor='bucs' ><img src={bucs} alt='bucs'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc2' value='6' id='rams' hidden  onChange={(e) => setResults('nfc2', e.target.value)}></input>
                <label htmlFor='rams'><img src={rams} alt='rams' ></img></label>
                
                <input type='radio' name='nfc2' value='3' id='lions' hidden  onChange={(e) => setResults('nfc2', e.target.value)}></input>
                <label htmlFor='lions' ><img src={lions} alt='lions'></img></label>
            </div>

            <div className='match'>
                <div className='vs'>VS</div>
                <input type='radio' name='nfc3' value='7' id='packers' hidden  onChange={(e) => setResults('nfc3', e.target.value)}></input>
                <label htmlFor='packers'><img src={packers} alt='packers' ></img></label>
                
                <input type='radio' name='nfc3' value='2' id='cowboys' hidden  onChange={(e) => setResults('nfc3', e.target.value)}></input>
                <label htmlFor='cowboys' ><img src={cowboys} alt='cowboys'></img></label>
            </div>
            <Link to='/divisional'><button> Go to Divisional  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z"/></svg></button></Link>
    </form>
    )
}
