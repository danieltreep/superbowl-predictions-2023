import React from 'react'
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './Start';
import Wildcard from './Wildcard';
import Divisional from './Divisional';
import Championship from './Championship';
import Superbowl from './Superbowl';


import ravens from './images/ravens.png';
import packers from './images/packers.png';
import steelers from './images/steelers.png';
import lions from './images/lions.png';
import texans from './images/texans.png';
import browns from './images/browns.png';
import dolphins from './images/dolphins.png';
import bills from './images/bills.png';
import bucs from './images/bucs.png';
import sf from './images/sf.png';
import cowboys from './images/cowboys.png';
import rams from './images/rams.png';
import chiefs from './images/chiefs.png';
import eagles from './images/eagles.png';

import alec from './images/alec.png'
import ivar from './images/ivar.png'
import elvis from './images/elvis.png'
import bobby from './images/bobby.png'
import daniel from './images/daniel.png'
import Summary from './Summary';

function App() {

  const [name, setName] = useState('');
  const [results, setResults] = useState({
    afc1: '',
    afc2: '',
    afc3: '',
    nfc1: '',
    nfc2: '',
    nfc3: '',
    afc4: '',
    afc5: '',
    nfc4: '',
    nfc5: '',
    afc6: '',
    nfc6: '',
    superbowl: '',
  })

  const names = {
    alec: alec,
    bobby: bobby,
    elvis: elvis,
    daniel: daniel,
    ivar: ivar
  }

  const teams = {
    afcteams: {
        1: ravens,
        2: bills,
        3: chiefs,
        4: texans,
        5: browns,
        6: dolphins,
        7: steelers
    },
    nfcteams: {
        1: sf,
        2: cowboys,
        3: lions,
        4: bucs,
        5: eagles,
        6: rams,
        7: packers
    }
  }

  let afcwildcard = ['1', results.afc1, results.afc2, results.afc3];
  let nfcwildcard = ['1', results.nfc1, results.nfc2, results.nfc3];
  let afcdivisional = [results.afc4, results.afc5];
  let nfcdivisional = [results.nfc4, results.nfc5];
  let afcchampionship = [results.afc6];
  let nfcchampionship = [results.nfc6];
  afcwildcard.sort();
  nfcwildcard.sort();

  function updateResults(match, winner) {
    setResults({...results, [match]: winner});
    afcwildcard = [results.afc1, results.afc2, results.afc3];
    nfcwildcard = [results.nfc1, results.nfc2, results.nfc3];
    afcdivisional = [results.afc4, results.afc5];
    nfcdivisional = [results.nfc4, results.nfc5];
    afcchampionship = [results.afc6];
    nfcchampionship = [results.nfc6];
  }

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Start setName={setName} names={names}/>}/>
          <Route path='/wildcard' element={<Wildcard setResults={updateResults} results={results} />}/>
          <Route path='/divisional' element={<Divisional setResults={updateResults} teams={teams} afcwildcard={afcwildcard} nfcwildcard={nfcwildcard}/>} />
          <Route path='/championship' element={<Championship setResults={updateResults} teams={teams} afcdivisional={afcdivisional} nfcdivisional={nfcdivisional}/>} />
          <Route path='/superbowl' element={<Superbowl setResults={updateResults} teams={teams} afcchampionship={afcchampionship} nfcchampionship={nfcchampionship}/>} />
          <Route path='/summary' element={<Summary 
            teams={teams} 
            name={name}  
            results={results}
            afcwildcard={afcwildcard} 
            nfcwildcard={nfcwildcard} 
            afcdivisional={afcdivisional} 
            nfcdivisional={nfcdivisional}
            afcchampionship={afcchampionship} 
            nfcchampionship={nfcchampionship}/>} />
        </Routes>
    </div>
  );
}

export default App;