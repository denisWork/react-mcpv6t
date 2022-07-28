import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [clicked, setClicked]=useState(true)
  return (
    <div>
      {clicked
      ?<button onClick={()=>setClicked(!clicked)} className='btn'> RUN </button>
      :<div onClick={()=>setClicked(!clicked)}className='modalWindow'>
        <div className='leftSide'>
        </div>
        <p> ghhhh</p>
        <div className='right'>
        </div>
      </div>
      }
    </div>
  );
}
