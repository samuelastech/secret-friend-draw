import { useParticipantsList } from "../hooks/useParticipantsList";

export const ParticipantsList = () => {
  const names = useParticipantsList();

  return (
    <ul>
      {names.map((name, i) => <li key={i}>{name}</li>)}
    </ul>
  );
};