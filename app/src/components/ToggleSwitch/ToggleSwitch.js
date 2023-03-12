import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = (props) => {
  const [status, setStatus] = useState(props.status);

  return (
    
      <div className="button r" id="button-3">
        <input
          type="checkbox"
          className="checkbox"
          onChange={() => {
            setStatus((prevStatus)=>{
              props.onChange &&
              typeof props.onChange === "function" &&
              props.onChange(!prevStatus);
              return !prevStatus;
            });
            
          }}
          checked={status}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </div>
    
  );
};

export default ToggleSwitch;
