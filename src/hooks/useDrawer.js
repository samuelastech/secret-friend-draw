import { useParticipantsList } from "./useParticipantsList";
import { useSetRecoilState } from "recoil";
import { drawResultState } from "../state/atom";
import { realizeDraw } from "../helpers/realizeDraw";

export const useDrawer = () => {
  const names = useParticipantsList();
  const setResult = useSetRecoilState(drawResultState);
  return () => setResult(realizeDraw(names));
};