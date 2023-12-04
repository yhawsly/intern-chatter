import "./App.css";
import EditProfile from "./editProfile";
import { useState } from "react";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col justify-center h-screen items-center bg-gradient-to-b from-line-200 to-line-600">
      <EditProfile />
    </div>
  );
}

export default App;
