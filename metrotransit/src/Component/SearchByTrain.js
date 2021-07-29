import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchByTrain = () => {
  const [stationCode, setStationCode] = useState("");
  //save the user station code input to a state so we can later reuse it in the link so the user can find their station
  const [searchedStationData, setSearchedStationData] = useState([]);
  //save the search station data into a state so we can use this information to display back to the user
  useEffect(() => {
    async function SearchByStationCode() {
      try {
        const singleStationResult = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/${stationCode}`
        );
        //fetch the station data with the station code
        //   console.log(singleStationResult.data.station_data.Trains);
        // if successful display the data onto Chrome Inspector
        setSearchedStationData(singleStationResult.data.station_data.Trains); //set the desired data into a useState
      } catch (e) {
        //if not successful display error message
        console.error("catch", e);
      }
    }
    SearchByStationCode();
  }, [stationCode]);

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
        // setstationcode for an onchange so the user can type in thier desired station code.
      />

      {searchedStationData.map((trainsInfo, i) => {
        //mapped through the given data and display if for the user
        return (
          <div key={i}>
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
