import { ITopSecretFiles } from "./interfaces";

export const RETRIEVE_SECRET_FILES = "RETRIEVE_SECRET_FILES";
export const RETRIEVE_SECRET_FILES_SUCCESS = "RETRIEVE_SECRET_FILES_SUCCESS";

export interface RetrieveSecretFilesAction {
  type: typeof RETRIEVE_SECRET_FILES;
}

export interface RetrieveSecretFilesSuccessAction {
  type: typeof RETRIEVE_SECRET_FILES_SUCCESS;
  secretFiles: ITopSecretFiles;
}
