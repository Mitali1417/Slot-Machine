import React from "react";
import Shuffle from "./SlotMach";
import "./index.css";

function App() {
    return (
      <>
        <h1 className="heading__style">Easy Slot Machine</h1>

        <div className="slotMachine">
          <div className="slotDisplay">
      
            <input id="row1" type="text" value="😄" disabled />
           
            <input id="row2" type="text" value="😃" disabled />
    
            <input id="row3" type="text" value= "😲" disabled />
          </div>
          <div className="shuffle">
          <button id="shuffle" onClick={Shuffle}>Shuffle</button>
          </div>
          <div className="history">
            <textarea id="lastOutput" disabled></textarea>
          </div>
        </div>
  
      </>
    );
  }
  
  export default App;