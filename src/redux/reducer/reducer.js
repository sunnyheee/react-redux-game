let initalState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initalState, action) {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num };
  }

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
}

export default reducer;
