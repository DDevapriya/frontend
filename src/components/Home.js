import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Component
      <button>
        <Link to="login">Logout</Link>
      </button>
    </div>
  );
};

export default Home;
