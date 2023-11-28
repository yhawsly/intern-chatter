import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-2xl font-semibold text-gray-600 text-center">
        The Intern Chatter Project
      </h1>
    </div>
  );
}

export default App;
