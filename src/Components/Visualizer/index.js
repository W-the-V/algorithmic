import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bubbleSort } from "../../Algorithms";
import { setMethod } from "../../store/data";
import "./Visualizer.css";

function Visualizer({ timeoutArr, setTimeOutArr, speed }) {
  const dataArray = useSelector((state) => state.data.array);
  const dataMethod = useSelector((state) => state.data.method);
  const dispatch = useDispatch();
  const animate = (array, dataArray) => {
    let timeoutsArr = [];
    let promisesArr = [];
    for (let i = 0; i < array.length - 1; i++) {
      let current = array[i];
      let next = array[i + 1];
      let afterNext = array[i + 2];
      let element1 = document.getElementById(`${current}`);
      let element2 = document.getElementById(`${next}`);
      promisesArr.push(
        new Promise((res, rej) => {
          timeoutsArr.push(
            setTimeout(() => {
              element1.classList.add("active");
              element2.classList.add("active");
              res();
            }, i * (200 - speed) + 200)
          );
        })
      );
      promisesArr.push(
        new Promise((res, rej) => {
          timeoutsArr.push(
            setTimeout(() => {
              element1.classList.remove("active");
              element2.classList.remove("active");
              res();
            }, i * (200 - speed) + 400)
          );
        })
      );
      if (Array.isArray(afterNext)) {
        promisesArr.push(
          new Promise((res, rej) => {
            timeoutsArr.push(
              setTimeout(() => {
                let prevHeight = element1.style.height;
                let prevFont = element1.style.fontSize;
                element1.style.height = element2.style.height;
                element1.style.fontSize = element2.style.fontSize;
                element2.style.height = prevHeight;
                element2.style.fontSize = prevFont;
                res();
              }, i * (200 - speed) + 400)
            );
          })
        );
        i += 2;
      }
      element1.classList.remove("active");
      element2.classList.remove("active");
    }
    setTimeOutArr(timeoutsArr);
    Promise.all(promisesArr).then((e) => {
      document.getElementById(`${dataMethod}`).classList.add("hidden");
      document.querySelectorAll(".visualizer__element").forEach((e) => {
        e.classList.add("active");
      });
    });
    dispatch(setMethod(""));
  };

  useEffect(() => {
    if (dataMethod === "bubble") {
      const animations = bubbleSort(dataArray);
      animate(animations, dataArray);
    }
  }, [dataMethod]);
  return (
    <>
      <div className="visualizer__outer">
        {dataArray.map((data, i) => (
          <div
            id={i}
            className="visualizer__element"
            key={i}
            style={{ height: `${data}%`, fontSize: `${data}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Visualizer;
