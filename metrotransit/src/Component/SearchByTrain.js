import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchByTrain = () => {
  const [stationCode, setStationCode] = useState("");
  const [searchedStationData, setSearchedStationData] = useState([]);

  const SearchByStationCode = async () => {
    const singleStationResult = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/${stationCode}`
    );
    // console.log(singleStationResult.data);
    if (singleStationResult.data.hasOwnProperty("station_data")) {
      //   console.log(singleStationResult.data.station_data.Trains);
      setSearchedStationData(singleStationResult.data.station_data.Trains);
    } else {
      return;
    }
  };
  useEffect(SearchByStationCode, [stationCode]);

  return (
    <div>
      <p>Please enter your station code below:</p>
      <input
        id="stationCode"
        name="stationCode"
        type="text"
        placeholder=" Search by Station Code"
        value={stationCode}
        onChange={(e) => setStationCode(e.target.value)}
      />

      {searchedStationData.map((trainsInfo, index) => {
        return (
          <div key={index}>
            <p>Car: {trainsInfo.Car}</p>
            <p>Line: {trainsInfo.Line}</p>
            <p>Location Name: {trainsInfo.LocationName}</p>
            <p>Location Code: {trainsInfo.LocationCode}</p>
            <p>Destination: {trainsInfo.Destination}</p>
            <p>Destination Code: {trainsInfo.DestinationCode}</p>
            <p>Destination Name: {trainsInfo.DestinationName}</p>
            <p>Train Arrival Time: {trainsInfo.Min}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchByTrain;
