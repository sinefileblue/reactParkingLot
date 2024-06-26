import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

import ParkingLotForm from "./components/ParkingLotForm/ParkingLotForm";
import ParkingLotList from "./components/ParkingLotList/ParkingLotList";

export default function App() {
    let [parkingLotItems, setParkingLotItems] = useState(getInitialState());

    function getInitialState() {
      let savedState = localStorage.getItem('items');
      if (typeof savedState === 'string') {
        return JSON.parse(savedState);
      }
      return [];
    }

    function addItem(date, link, description, priority) {
      setParkingLotItems((oldItems) => {
        let newItems = [
          ...oldItems,
         {
            id: nanoid(),
            date,
            description,
            link,
            priority
         },
        ];
        localStorage.setItem("items", JSON.stringify(newItems));
        return newItems;
      });
    }

    function deleteItem(id) {
      setParkingLotItems((oldItems) => {
        let newItems = oldItems.filter((item) => item.id !== id);
        localStorage.setItem("items", JSON.stringify(newItems));
        return newItems;
      });
    }

    return (
      <div className="App">
        <header>
          <h1>Browser Parking Lot</h1>
          <p>Kiss those tabs goodbye.</p>
        </header>
        <main>
          <ParkingLotForm addItem={addItem} />
          <ParkingLotList
            parkingLotItems={parkingLotItems} 
            deleteItem={deleteItem} 
            />
        </main>
      </div>
    );
  }
