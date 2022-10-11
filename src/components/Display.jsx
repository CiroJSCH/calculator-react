import { useEffect, useState } from "react";
import "../styles/display.css";

const Display = (props) => {

  return (
    <div className="container">
      <div className="display">
        <span className="display-formula">
          {
            props.formula === "" ? "0" : props.formula.substr(-1) === "="
            ? props.formula.substring(0, props.formula.length - 1)
            : props.formula
          }
        </span>
        <h1 className="display-result">{props.result}</h1>
      </div>
    </div>
  );
};

export default Display;
