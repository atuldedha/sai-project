import createDataContext from "../DataContext";
import reducer, { initialState } from "./reducer";
import { updateUser } from "./actions";

export const { Context: UserContext, Provider: UserProvider } =
  createDataContext(reducer, { updateUser }, initialState);
