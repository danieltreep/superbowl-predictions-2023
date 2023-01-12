import React from 'react'
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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