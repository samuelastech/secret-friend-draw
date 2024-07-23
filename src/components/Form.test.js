import { act, fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form.js';
import { RecoilRoot } from 'recoil';

let input, button = null;

describe('Form', () => {
  beforeEach(() => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    input = screen.getByPlaceholderText('Insira o nome do partcipante');
    button = screen.getByRole('button');
  });

  it('while input is void, new participants cannot be added', () => {
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('add a participant if there is a name', () => {
    fireEvent.change(input, { target: { value: 'Rosilda' } });
    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
  });

  it('the list cannot have duplicated names', () => {
    fireEvent.change(input, { target: { value: 'Rosilda' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Rosilda' } });
    fireEvent.click(button);

    const message = screen.getByRole('alert');
    expect(message.textContent).toBe('Você não pode adicionar duas pessoas com o mesmo nome');
  });

  it('the error message must stay on screen for only some seconds', () => {
    jest.useFakeTimers();
    fireEvent.change(input, { target: { value: 'Rosilda' } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: 'Rosilda' } });
    fireEvent.click(button);

    let message = screen.getByRole('alert');
    expect(message).toBeInTheDocument();

    act(() => jest.runAllTimers());

    message = screen.queryByRole('alert');
    expect(message).toBeNull();
  });
});
