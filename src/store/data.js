const SET_DATA = "data/array";
const SET_METHOD = "data/method";

// Create array with randomized data from 5 to 100
const makeData = () => {
  const dataArray = new Array();
  for (let i = 0; i <= 50; i++) {
    dataArray.push(Math.round(Math.random() * 95 + 5));
  }
  return dataArray;
};
// function to dispatch to reset Data array in redux state
export const resetData = () => {
  const data = makeData();
  return {
    type: SET_DATA,
    data,
  };
};
//function to dispatch to change algorithm method
export const resetData = (method) => {
  return {
    type: SET_METHOD,
    method,
  };
};

const initialState = { array: makeData(), method: "" };
const dataReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_DATA:
      newState = Object.assign({}, state, { data: action.data });
      return newState;
    case SET_METHOD:
      newState = Object.assign({}, state, { method: action.method });
      return newState;
    default:
      return state;
  }
};

export default dataReducer;
