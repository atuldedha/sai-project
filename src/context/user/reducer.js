import { ADD_USER } from "./keys";

export const initialState = {
  userInfo: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, userInfo: action.payload };

    default:
      return state;
  }
};

export default reducer;
