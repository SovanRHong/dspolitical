import "./App.css";
import { Route, Switch } from "react-router-dom";
import SearchByTrain from "./Component/SearchByTrain";
import TrainSchedule from "./Component/TrainSchedule";
import Home from "./Component/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route
          exact
          path="/alltrains"
          render={() => {
            return <TrainSchedule />;
          }}
        />
        <Route
          exact
          path="/searchtrains"
          render={() => {
            return <SearchByTrain />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
