const initialState = {
  saved: {
    content: [],
  },
  user: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SAVED":
      return {
        ...state,
        saved: {
          ...state.saved,
          content: [...state.saved.content, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
