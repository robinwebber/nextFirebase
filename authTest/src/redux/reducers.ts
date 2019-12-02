import { combineReducers } from "redux";

import topSecretFilesReducer from "./modules/topSecretFiles/reducer";

const combinedReducers: any = combineReducers({
  topSecretFilesReducer
});

export default combinedReducers;

export type AppState = ReturnType<typeof combinedReducers>;
