import { atom } from "recoil";

export const participantsListState = atom({
  key: 'participantsListState',
  default: [],
});

export const drawResultState = atom({
  key: 'drawResultState',
  default: new Map(),
});

export const errorState = atom({
  key: 'errorState',
  default: '',
});
