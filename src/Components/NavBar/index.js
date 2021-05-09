import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetData, setMethod } from "../../store/data";
import src from "../../images/algorithmic.png";
import * as Tools from "../../Tools";
import "./NavBar.css";

function NavBar({ timeoutArr, setTimeOutArr, speed, setSpeed, size, setSize }) {
  const dataMethod = useSelector((state) => state.data.method);
  const [prevMethod, setPrevMethod] = useState();
  const dispatch = useDispatch();
  const resources = {
    dataMethod,
    setMethod,
    prevMethod,
    setPrevMethod,
    timeoutArr,
    setTimeOutArr,
    dispatch,
    resetData,
    size,
    setSize,
    speed,
    setSpeed,
  };
  return (
    <>
      <div className="navbar__outer">
        <img
          className="logo__img"
          src={src}
          onClick={() => Tools.homeClick(resources)}
        ></img>
        <div className="header__slider__outer">
          <label for="customRange2" class="form-label">
            Speed
          </label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="197"
            id="customRange2"
            value={speed}
            onChange={(e) => Tools.changeSpeed(e, resources)}
          ></input>
        </div>
        <div className="header__slider__outer">
          <label for="customRange2" class="form-label">
            Size
          </label>
          <input
            type="range"
            class="form-range"
            min="3"
            max="100"
            id="customRange2"
            value={size}
            onChange={(e) => Tools.changeSize(e, resources)}
          ></input>
        </div>
        <div className="header__btn__container">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => Tools.sortClick("bubble", resources)}
          >
            <div id="bubble" class="spinner-grow text-primary hidden"></div>
            Bubble Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => Tools.sortClick("selection", resources)}
          >
            <div id="selection" class="spinner-grow text-primary hidden"></div>
            Selection Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => Tools.sortClick("insertion", resources)}
          >
            <div id="insertion" class="spinner-grow text-primary hidden"></div>
            Insertion Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => Tools.sortClick("quick", resources)}
          >
            <div id="quick" class="spinner-grow text-primary hidden"></div>
            Quick Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => Tools.sortClick("merge", resources)}
          >
            <div id="merge" class="spinner-grow text-primary hidden"></div>
            Merge Sort
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
