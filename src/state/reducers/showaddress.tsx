const reducer = (state = "", action: any) => {
  if (action.type === "showAddress") {
    return {
      address: action.payload,
      address2: action.payload2,
      address3: action.payload3,
      address4: action.payload4,
      address5: action.payload5,
    };
  } else {
    return state;
  }
};

export default reducer;
