export const initialState = {
  user: null,
  name: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      // logic for setting user
      return { ...state, user: action.user, name: action.name };

    default:
      return state;
  }
}

export default reducer;
