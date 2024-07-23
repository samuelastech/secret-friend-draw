import { useRecoilValue } from "recoil";
import { drawResultState } from "../state/atom";

export const useDraw = () => {
  return useRecoilValue(drawResultState);
};