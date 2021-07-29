import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainSchedule = () => {
  const [allTrains, setAllTrains] = useState([]);
  // save all the train information into a state, so we are able to render and update our state
  const [filter, setFilter] = useState("");
  // save the filter data into a state, so we are able to use it to allow the user to filter the train location

  useEffect(() => {
    // rendar the component when the resource change
    async function fetchAllTrain() {
      try {
        const allTrainSchedule = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/ALL`
        );
        //GET all train schedule from API
        // console.log(allTrainSchedule.data.trains_data.Trains);
        //if data is pulled display to Chrome Inspector
        setAllTrains(allTrainSchedule.data.trains_data.Trains);
        // if successful, set data to state
      } catch (e) {
        //if not successful display error message
        console.error("catch", e);
        alert(e);
      }
    }
    fetchAllTrain();
  }, []);
  return (
    <div>
      <p>
        To search for all the trains in your current station, please type in
        your desired station name below:
      </p>
      <input
        id="filter"
        name="filter"
        type="text"
        placeholder=" Filter by Current Station"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        // set onchange to modify the previous state value with setfilter so it would create a new value
      />

      <>
        {allTrains
          .filter((info) => {
            //filter the information for the user
            if (filter === "") {
              return info;
              // if filter is empty return all train data
            } else {
              return info.LocationName.toLowerCase().includes(
                filter.toLowerCase()
                // else return any data that includes user's input
              );
            }
          })
          .map((trainsInfo, i) => {
            //mapped through the data and display the information
            return (
              <div className="container" key={i}>
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
