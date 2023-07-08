import createDataContext from "../DataContext";
import reducer, { initialState } from "./reducer";
import { initializeAppData } from "./actions";

export const { Context: AppDataContext, Provider: AppDataProvider } =
  createDataContext(reducer, { initializeAppData }, initialState);
