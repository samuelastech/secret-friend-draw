import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../hooks/useParticipantsList.js";
import { useDrawer } from "../hooks/useDrawer.js";

export const Footer = () => {
  const names = useParticipantsList();
  const navigate = useNavigate();
  const draw = useDrawer();
  const start = () => {
    draw();
    navigate('/draw')
  };

  return (
    <footer>
      <button disabled={names.length < 3} onClick={start}>Começar a brincadeira</button>
    </footer>
  );
};
