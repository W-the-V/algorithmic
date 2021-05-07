const SET_DATA = "data/array";
const CHANGE_DATA = "data/change";
const SET_METHOD = "data/method";

// Create array with randomized data from 5 to 100
const makeData = (max) => {
  const dataArray = new Array();
  for (let i = 1; i <= max; i++) {
    dataArray.push(Math.round(Math.random() * 95 + 5));
  }
  return dataArray;
};
// function to dispatch to reset Data array in redux state
export const resetData = (max) => {
  const data = makeData(max);
  return {
    type: SET_DATA,
    data,
  };
};
// function to dispatch to change data array in redux state
export const changeData = (data) => {
  return {
    type: CHANGE_DATA,
    data,
  };
};
//function to dispatch to change algorithm method
export const setMethod = (method) => {
  return {
    type: SET_METHOD,
    method,
  };
};
//reducer
const initialState = { array: makeData(50), method: "init" };
const dataReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_DATA:
      newState = Object.assign({}, state, { array: action.data });
      return newState;
    case CHANGE_DATA:
      newState = Object.assign({}, state, { array: action.data });
      return newState;
    case SET_METHOD:
      newState = Object.assign({}, state, { method: action.method });
      return newState;
    default:
      return state;
  }
};

export default dataReducer;
