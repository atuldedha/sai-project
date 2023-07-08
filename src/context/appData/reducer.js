import { INITIALIZE_APP_DATA } from "./keys";

export const initialState = {
  appData: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE_APP_DATA:
      return { ...state, appData: action.payload };

    default:
      return state;
  }
};

export default reducer;
