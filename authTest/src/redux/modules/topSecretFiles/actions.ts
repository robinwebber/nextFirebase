import {
  RETRIEVE_SECRET_FILES,
  RETRIEVE_SECRET_FILES_SUCCESS,
  RetrieveSecretFilesAction,
  RetrieveSecretFilesSuccessAction
} from "./types";

import { ITopSecretFiles } from "./interfaces";

export const doRetrieveSecretFiles = (): RetrieveSecretFilesAction => ({
  type: RETRIEVE_SECRET_FILES
});
