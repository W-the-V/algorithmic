import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Algorithms from "../../Algorithms";
import { setMethod, changeData } from "../../store/data";
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
    changeData,
    dataArray,
  };
  useEffect(() => {
    if (dataMethod === "bubble") {
      const animations = Algorithms.bubbleSort(dataArray);
      Tools.animate(animations, resources);
    } else if (dataMethod === "selection") {
      const animations = Algorithms.selectionSort(dataArray);
      Tools.animate(animations, resources);
    } else if (dataMethod === "insertion") {
      const animations = Algorithms.insertionSort(dataArray);
      Tools.animate(animations, resources);
    } else if (dataMethod === "quick") {
      const animations = Algorithms.quickSort(dataArray);
      // console.log(animations);
      Tools.quickAnimate(animations, resources);
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
