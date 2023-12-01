import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './globals.css'
import Modal from './Components/Modal.jsx';
function App() {
  const [publishModel,setOpenModel] = useState(false); 
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="text-2xl font-semibold text-gray-600 text-center">
        <p>The Intern Chatter Project</p>
        <button className=' w-24 h-12 font-bold bg-blue-500 text-zinc-200 rounded-xl  ' 
      onClick={() => {
        setOpenModel(true);
      }}>
        Publish</button>
      {publishModel && <Modal closeModel ={setOpenModel} />}
      </h1>
    </div>
  );
}

export default App;
