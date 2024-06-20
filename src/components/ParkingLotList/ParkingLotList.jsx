import React from 'react';
import ParkingLotItem from './ParkingLotItem';

export default function ParkingLotList({ parkingLotItems}) {

    let ParkingLotItemsJsxList = parkingLotItems.map(item => <ParkingLotItem />);

  return (
    <div>
        ParkingLotList
        {ParkingLotItemsJsxList}
    </div>
  )
}
