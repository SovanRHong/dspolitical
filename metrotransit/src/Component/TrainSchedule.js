import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainSchedule = () => {
  const [allTrains, setAllTrains] = useState([]);
  // save all the train information into a state, so we are able to render the information on our page
  const [filter, setFilter] = useState("");
  // save the filter data into a state, so we are able to use it to allow the user to filter the train location

  const fetchAllTrain = async () => {
    const allTrainSchedule = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/ALL`
    );
    //GET train data from API
    console.log(allTrainSchedule.data.trains_data.Trains);
    //Print the data to Chrome Inspector
    setAllTrains(allTrainSchedule.data.trains_data.Trains);
  };
  // with the data that is usable for the user, set it to a state

  useEffect(fetchAllTrain, []);
  // runs useEffect so the code would run and render every time the data changes add an empty array so you would not be in a continuous loop
  return (
    <div>
      <p>
        <input
          id="filter"
          name="filter"
          type="text"
          placeholder=" Filter by Current Station"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </p>

      <>
        {allTrains
          .filter((info) => {
            if (filter === "") {
              return info;
            } else {
              return info.LocationName.toLowerCase().includes(
                filter.toLowerCase()
              );
            }
          })
          .map((trainsInfo, index) => {
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
      </>
    </div>
  );
};

export default TrainSchedule;
