import './App.css';

import ParkingLotForm from './components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './components/ParkingLotList/ParkingLotList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Browser Parking Lot</h1>
      </header>
      <main>
        <ParkingLotForm />
        <ParkingLotList />
      </main>
    </div>
  );
}

export default App;
