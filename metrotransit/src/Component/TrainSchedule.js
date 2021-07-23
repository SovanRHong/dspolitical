import React from "react";
import axios from "axios";

const TrainSchedule = () => {
  const fetchAllTrain = async () => {
    let allTrainSchedule = await axios.get(
      `${process.env.METRO_BACKEND_URL}/ALL`,
      process.env.API_KEY
    );
  };

  fetchAllTrain();

  return <div></div>;
};

export default TrainSchedule;
