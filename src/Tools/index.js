export const homeClick = ({
  dataMethod,
  prevMethod,
  timeoutArr,
  dispatch,
  setMethod,
  resetData,
  size,
}) => {
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
  dispatch(resetData(size));
};
export const sortClick = (
  method,
  {
    dataMethod,
    setPrevMethod,
    timeoutArr,
    dispatch,
    setMethod,
    resetData,
    size,
  }
) => {
  if (dataMethod !== "init") {
    timeoutArr.forEach((e) => {
      clearTimeout(e);
    });
    document.querySelectorAll(".active").forEach((e) => {
      e.classList.remove("active");
    });
    dispatch(resetData(size));
  }
  document.getElementById(`${method}`).classList.remove("hidden");
  setPrevMethod(method);
  dispatch(setMethod(method));
};
export const changeSpeed = (
  e,
  {
    dataMethod,
    setPrevMethod,
    prevMethod,
    timeoutArr,
    dispatch,
    setMethod,
    resetData,
    size,
    setSpeed,
  }
) => {
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
    sortClick(prevMethod, {
      dataMethod,
      setPrevMethod,
      timeoutArr,
      dispatch,
      setMethod,
      resetData,
      size,
    });
  }
};
export const changeSize = (
  e,
  {
    dataMethod,
    setPrevMethod,
    prevMethod,
    timeoutArr,
    dispatch,
    setMethod,
    resetData,
    size,
    setSize,
  }
) => {
  setSize(e.target.value);
  if (dataMethod === "init") {
    dispatch(resetData(size));
  }
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
    sortClick(prevMethod, {
      dataMethod,
      setPrevMethod,
      timeoutArr,
      dispatch,
      setMethod,
      resetData,
      size,
    });
  }
};
export const animate = (
  array,
  { dataMethod, setMethod, dispatch, setTimeOutArr, speed }
) => {
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
              element1 = document.getElementById(`${afterNext[0]}`);
              element2 = document.getElementById(`${afterNext[1]}`);
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
export const quickAnimate = (
  array,
  {
    dataMethod,
    setMethod,
    dispatch,
    setTimeOutArr,
    speed,
    changeData,
    dataArray,
  }
) => {
  const arr = [...dataArray];
  const animations = [...array];
  let count = 1;
  while (animations.length) {
    let workArr = animations.shift();
    let pivot = workArr.shift();
    let pivotEl = document.getElementById(arr.indexOf(pivot));
    pivotEl.classList.add("highlight");
    let leftArr = workArr[0];
    let rightArr = workArr[1];

    leftArr.forEach((e, i) => {
      console.log(pivot);
      if (typeof e !== "number") {
        setTimeout(() => {
          let removed = arr[e];
          arr.splice(e, 1);
          arr.unshift(removed);
          pivotEl.classList.remove("highlight");
          dispatch(changeData(arr));
          pivotEl.classList.add("active");
          pivotEl = document.getElementById(arr.indexOf(pivot));
          pivotEl.classList.add("highlight");
        }, count * (200 - speed) + 400);
        count += 1;
      } else {
        setTimeout(() => {
          document.getElementById(e).classList.add("active");
        }, count * (200 - speed) + 400);
        count += 1;
        setTimeout(() => {
          document.getElementById(e).classList.remove("active");
        }, count * (200 - speed) + 400);
        count += 1;
      }
    });
    rightArr.forEach((e, i) => {
      if (typeof e !== "number") {
        setTimeout(() => {
          let removed = arr[e];
          arr.splice(e, 1);
          arr.push(removed);
          pivotEl.classList.remove("highlight");
          dispatch(changeData(arr));
          pivotEl.classList.add("active");
          pivotEl = document.getElementById(arr.indexOf(pivot));
          pivotEl.classList.add("highlight");
        }, count * (200 - speed) + 400);
        count += 1;
      } else {
        setTimeout(() => {
          document.getElementById(e).classList.add("active");
        }, count * (200 - speed) + 400);
        count += 1;
        setTimeout(() => {
          document.getElementById(e).classList.remove("active");
        }, count * (200 - speed) + 400);
        count += 1;
      }
    });
  }
};
