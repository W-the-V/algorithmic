import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bubbleSort } from "../../Algorithms";
import { setMethod } from "../../store/data";
import * as Tools from "../../Tools";
import "./Visualizer.css";

function Visualizer({ setTimeOutArr, speed }) {
  const dataArray = useSelector((state) => state.data.array);
  const dataMethod = useSelector((state) => state.data.method);
  const dispatch = useDispatch();
  const resources = {
    dataMethod,
    setMethod,
    dispatch,
    setTimeOutArr,
    speed,
  };
  useEffect(() => {
    if (dataMethod === "bubble") {
      const animations = bubbleSort(dataArray);
      Tools.animate(animations, resources);
    }
  }, [dataMethod]);
  return (
    <div className="visualizer__outer">
      <div className="visualizer__inner">
        {dataArray.map((data, i) => (
          <div
            id={i}
            className="visualizer__element"
            key={i}
            style={{ height: `${data}%`, fontSize: `${data}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Visualizer;
