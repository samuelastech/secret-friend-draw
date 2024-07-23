import { useRecoilValue } from 'recoil';
import { participantsListState } from '../state/atom.js';

export const useParticipantsList = () => {
  return useRecoilValue(participantsListState);
};
 
