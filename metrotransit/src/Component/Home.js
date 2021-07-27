import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div>
      <nav>
        <p>
          <Link to="/alltrains">Search All Trains</Link>
        </p>
        <Link to="/searchtrains">Search Trains</Link>
      </nav>
    </div>
  );
}

export default Home;
