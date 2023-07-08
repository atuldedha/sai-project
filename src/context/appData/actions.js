import { INITIALIZE_APP_DATA } from "./keys";

export const initializeAppData = (dispatch) => (data) => {
  dispatch({
    type: INITIALIZE_APP_DATA,
    payload: { ...data },
  });
};
