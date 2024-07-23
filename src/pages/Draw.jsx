import { useState } from "react";
import { useParticipantsList } from "../hooks/useParticipantsList";
import { useDraw } from "../hooks/useDraw";

export const Draw = () => {
  const names = useParticipantsList();
  const [currentParticipant, setCurrentParticipant] = useState(names[0]);
  const [secretFriend, setSecretFriend] = useState('');
  const draw = useDraw();

  const selectParticipant = (event) => {
    setSecretFriend('');
    setCurrentParticipant(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSecretFriend(draw.get(currentParticipant));
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <select required name="currentParticipant" id="currentParticipant" value={currentParticipant} onChange={selectParticipant}>
          <option>Selecione um nome</option>
          {names.map((name, i) => <option key={i}>{name}</option>)}
        </select>
        <button>Sortear</button>
      </form>
      {secretFriend && <p role="alert">{secretFriend}</p>}
    </section>
  );
};
