import { useRef, useState } from 'react';
import { useAddParticipant } from '../hooks/useAddParticipant.js';
import { useErrorMessage } from '../hooks/useErrorMessage.js';

export const Form = () => {
  const [name, setName] = useState('');
  const submitButtonRef = useRef(null);
  const inputRef = useRef(null);
  const addParticipant = useAddParticipant();
  const errorMessage = useErrorMessage();

  const handleSubmit = (event) => {
    event.preventDefault();
    addParticipant(name);
    setName('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Insira o nome do partcipante" type="text" ref={inputRef} value={name} onChange={(event) => setName(event.target.value)} />
      <button type="submit" disabled={!name} ref={submitButtonRef}>Adicionar</button>
      {errorMessage && <p role='alert'>{errorMessage}</p>}
    </form>
  );
};
