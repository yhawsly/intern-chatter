
import { useState, } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GridLoader from "react-spinners/GridLoader";
import './App.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">

        <div className="item">
          <GridLoader
          loading={loading}
          size={13}
          color="blue"
          />
        </div>
=======
    <>
    
    <Router>
        <div className="m-[2%]">
      <Register />
      <Switch>
        <Route path="/register" component="{Register}" />
      </Switch>
      <Switch>
        <Route path="/login" component="{Login}" />
      </Switch>
    </div>
    </Router>
    </>
    </div>
  );
}

export default App;
