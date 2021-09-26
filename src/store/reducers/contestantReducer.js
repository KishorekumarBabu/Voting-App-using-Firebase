const initState = {};

const contestantReducer = (state = initState, action) => {
  switch (action.type) {
    case "DISPLAY_CONTESTANT":
      console.log("created Contestant", action.contestant);
      return {
        ...state,
        ...action.contestant
      };

    default:
      return state;
  }
};

export default contestantReducer;
