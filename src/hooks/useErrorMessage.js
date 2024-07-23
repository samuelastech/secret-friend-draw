import { useRecoilValue } from "recoil";
import { errorState } from "../state/atom.js";

export const useErrorMessage = () => {
  return useRecoilValue(errorState);
};