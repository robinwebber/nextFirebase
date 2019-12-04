import { combineReducers } from "redux";

import topSecretFilesReducer from "./modules/topSecretFiles/reducer";
import authReducer from "./modules/auth/reducer";

const combinedReducers: any = combineReducers({
  topSecretFilesReducer,
  authReducer
});

export default combinedReducers;

export type AppState = ReturnType<typeof combinedReducers>;
