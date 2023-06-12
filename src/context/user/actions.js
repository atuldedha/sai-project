import { ADD_USER } from "./keys";

export const updateUser = (dispatch) => (user) => {
  dispatch({
    type: ADD_USER,
    payload: { ...user },
  });
};
