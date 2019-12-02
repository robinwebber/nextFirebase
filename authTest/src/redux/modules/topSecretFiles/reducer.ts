import { createReducer } from "redux-starter-kit";
import { ITopSecretFiles } from "./interfaces";

import { RETRIEVE_SECRET_FILES, RetrieveSecretFilesAction } from "./types";

export interface ISecretFilesReducerState {
  title: string;
  body: string;
  secretFilesLoading: boolean;
}

const initialState: ISecretFilesReducerState = {
  title: "Top secret dog stuff",
  body: "Dogs are not horses",
  secretFilesLoading: false
};

export default createReducer<ISecretFilesReducerState>(initialState, {
  [RETRIEVE_SECRET_FILES]: state => {
    state.secretFilesLoading = true;
  }
});
