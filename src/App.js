import { useState } from "react";
import './App.css';

import ParkingLotForm from './components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './components/ParkingLotList/ParkingLotList';

function App() {

  let [parkingLotItems, setParkingLotItems] = useState([
    {
      date: '2024-06-01',
      priority: 'Low',
      link: 'https://www.google.com',
      description: 'Ultimate source of truth',
    },
    {
      date: '2024-05-31',
      priority: 'Medium',
      link: 'https://react.dev',
      description: 'React documentation and tutorial',
    }
  ]);

  return (
    <div className="App">
      <header>
        <h1>Browser Parking Lot</h1>
        <p>Kiss those tabs goodbye.</p>
      </header>
      <main>
        <ParkingLotForm />
        <ParkingLotList />
      </main>
    </div>
  );
}

export default App;
