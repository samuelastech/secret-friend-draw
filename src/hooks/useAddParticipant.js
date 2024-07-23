import { useSetRecoilState, useRecoilValue } from 'recoil';
import { errorState, participantsListState } from '../state/atom.js';

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantsListState);
  const list = useRecoilValue(participantsListState);
  const setError = useSetRecoilState(errorState);

  return (name) => {
    if(list.includes(name)) {
      setError('Você não pode adicionar duas pessoas com o mesmo nome');
      setTimeout(() => setError(''), 5000);
      return;
    }
    return setList((list) => [...list, name]);
  }
};
 
