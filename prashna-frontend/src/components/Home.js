import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Prashna</h1>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
