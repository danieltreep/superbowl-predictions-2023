import './App.css';
import { useState } from 'react';
import Start from './Start';
import Wildcard from './Wildcard';
import Divisional from './Divisional';
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
import chiefs from './images/chiefs.png';
import eagles from './images/eagles.png';

function App() {

  const [name, setName] = useState();

  const teams = {
    afcteams: {
        1: chiefs,
        2: bills,
        3: bengals,
        4: jaguars,
        5: chargers,
        6: ravens,
        7: dolphins
    },
    nfcteams: {
        1: chiefs,
        2: bills,
        3: bengals,
        4: jaguars,
        5: chargers,
        6: ravens,
        7: dolphins
    }
}
  
  const results = {
    afc1: '5',
    afc2: '7',
    afc3: '3',
    nfc1: '5',
    nfc2: '7',
    nfc3: '3',
    afc4: null,
    afc5: null,
    nfc4: null,
    nfc5: null,
    afc6: null,
    nfc6: null,
    superbowl: null
  }

  let afcwildcard = ['1', results.afc1, results.afc2, results.afc3];
  let nfcwildcard = ['1', results.nfc1, results.nfc2, results.nfc3];
  afcwildcard.sort();
  nfcwildcard.sort();

  function setResults(match, winner) {
    results[match] = winner;
    console.log(results);
    afcwildcard = [results.afc1, results.afc2, results.afc3];
    nfcwildcard = [results.nfc1, results.nfc2, results.nfc3];
    console.log(afcwildcard);
    console.log(nfcwildcard);
  }

  function setPage() {
    console.log('next page')
  }

  return (
    <div className="App">
        {/* <Start setName={setName}/> */}
        {/* <h1>{selected}</h1> */}
        {/* <Wildcard setResults={setResults} results={results} setPage={setPage}/> */}
        <Divisional setResults={setResults} teams={teams} afcwildcard={afcwildcard} nfcwildcard={nfcwildcard} />
    </div>
  );
}

export default App;
