import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetData, setMethod } from "../../store/data";
import src from "../../images/algorithmic.png";
import "./NavBar.css";

function NavBar({ timeoutArr, setTimeOutArr, speed, setSpeed }) {
  const dataMethod = useSelector((state) => state.data.method);
  const [prevMethod, setPrevMethod] = useState();
  const dispatch = useDispatch();
  const homeClick = () => {
    if (dataMethod !== "init") {
      timeoutArr.forEach((e) => {
        clearTimeout(e);
      });
      document.getElementById(`${prevMethod}`).classList.add("hidden");
      document.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      dispatch(setMethod("init"));
    }
    dispatch(resetData());
  };
  const sortClick = (method) => {
    if (dataMethod !== "init") {
      timeoutArr.forEach((e) => {
        clearTimeout(e);
      });
      document.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      dispatch(resetData());
    }
    document.getElementById(`${method}`).classList.remove("hidden");
    setPrevMethod(method);
    dispatch(setMethod(method));
  };
  const changeSpeed = (e) => {
    setSpeed(e.target.value);
    if (dataMethod !== "init") {
      timeoutArr.forEach((e) => {
        clearTimeout(e);
      });
      document.getElementById(`${prevMethod}`).classList.add("hidden");
      document.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
    }
    if (prevMethod) {
      sortClick(prevMethod);
    }
  };
  return (
    <>
      <div className="navbar__outer">
        <img className="logo__img" src={src} onClick={() => homeClick()}></img>
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
            onChange={(e) => changeSpeed(e)}
          ></input>
        </div>
        <div className="header__btn__container">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => sortClick("bubble")}
          >
            <div id="bubble" class="spinner-grow text-primary hidden"></div>
            Bubble Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => sortClick("selection")}
          >
            <div id="selection" class="spinner-grow text-primary hidden"></div>
            Selection Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => sortClick("insertion")}
          >
            <div id="insertion" class="spinner-grow text-primary hidden"></div>
            Insertion Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => sortClick("quick")}
          >
            <div id="quick" class="spinner-grow text-primary hidden"></div>
            Quick Sort
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => sortClick("merge")}
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
