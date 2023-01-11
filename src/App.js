import React from 'react'
import './App.css';
import { useState } from 'react';
import Start from './Start';
import Wildcard from './Wildcard';
import Divisional from './Divisional';
import Championship from './Championship';
import Superbowl from './Superbowl';
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
import Summary from './Summary';

function App() {

  const [name, setName] = useState('bitchboi');
  const [winner, setWinner] = useState('nfc');

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
        1: eagles,
        2: sf,
        3: vikings,
        4: bucs,
        5: cowboys,
        6: giants,
        7: seahawks
    }
  }
  
  const results = {
    afc1: '5',
    afc2: '7',
    afc3: '3',
    nfc1: '5',
    nfc2: '7',
    nfc3: '3',
    afc4: '1',
    afc5: '7',
    nfc4: '1',
    nfc5: '7',
    afc6: '1',
    nfc6: '1',
    superbowl: null
  }

  let afcwildcard = ['1', results.afc1, results.afc2, results.afc3];
  let nfcwildcard = ['1', results.nfc1, results.nfc2, results.nfc3];
  let afcdivisional = [results.afc4, results.afc5];
  let nfcdivisional = [results.nfc4, results.nfc5];
  let afcchampionship = [results.afc6];
  let nfcchampionship = [results.nfc6];
  afcwildcard.sort();
  nfcwildcard.sort();

  function setResults(match, winner) {
    results[match] = winner;
    console.log(results);
    afcwildcard = [results.afc1, results.afc2, results.afc3];
    nfcwildcard = [results.nfc1, results.nfc2, results.nfc3];
    afcdivisional = [results.afc4, results.afc5];
    nfcdivisional = [results.nfc4, results.nfc5];
    afcchampionship = [results.afc6];
    nfcchampionship = [results.nfc6];
  }

  return (
    <div className="App">
        {/* <Start setName={setName}/> */}
        
        {/* <Wildcard setResults={setResults} results={results} setPage={setPage}/> */}
        {/* <Divisional setResults={setResults} teams={teams} afcwildcard={afcwildcard} nfcwildcard={nfcwildcard} /> */}
        {/* <Championship setResults={setResults} teams={teams} afcdivisional={afcdivisional} nfcdivisional={nfcdivisional} /> */}
        <Superbowl setResults={setResults} teams={teams} afcchampionship={afcchampionship} nfcchampionship={nfcchampionship} />
        {/* {<Summary 
          teams={teams} 
          name={name} 
          winner={winner} 
          afcwildcard={afcwildcard} 
          nfcwildcard={nfcwildcard} 
          afcdivisional={afcdivisional} 
          nfcdivisional={nfcdivisional}
          afcchampionship={afcchampionship} 
          nfcchampionship={nfcchampionship}
        />} */}
    </div>
  );
}

export default App;
