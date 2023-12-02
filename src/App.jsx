
import { useState, } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import GridLoader from "react-spinners/GridLoader";
import './App.css'
import Modal from "./Components/Modal";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
        <Modal />
        <div className="item">
          <GridLoader
          loading={loading}
          size={13}
          color="blue"
          />
        </div>
    </div>
  );
}

export default App;
