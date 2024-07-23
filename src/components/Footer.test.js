import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { useParticipantsList } from "../hooks/useParticipantsList"; 
import { RecoilRoot } from "recoil";
import { useNavigate } from "react-router-dom";

jest.mock('../hooks/useParticipantsList');
jest.mock('react-router-dom');

const init = (param) => {
  useParticipantsList.mockReturnValue(param);
  render(
    <RecoilRoot>
      <Footer />
    </RecoilRoot>
  );
}

describe('Footer', () => {
  describe('root', () => {
    beforeEach(() => init([]));
    
    it('should use footer tag', () => {
      const footer = screen.getByRole('contentinfo');
      expect(footer).toBeInTheDocument();
    });

    it('should have a button to start the play', () => {
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('not enough people', () => {
    const participants = ['Moses', 'Jacob'];
    beforeEach(() => init(participants));

    it('should not be able to start the play', () => {
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('enough people', () => {
    const participants = ['Moses', 'Jacob', 'Paul', 'Peter', 'Mariah', 'James'];
    let button = null;
    let navigate = jest.fn();

    beforeEach(() => {
      useNavigate.mockReturnValue(navigate);
      init(participants);
      button = screen.getByRole('button');
    });

    it('should be able to start the play', () => {
      expect(button).toBeEnabled();
    });

    it('should start the play when the button is clicked', () => {
      fireEvent.click(button);
      expect(navigate).toHaveBeenCalled();
      expect(navigate).toHaveBeenCalledWith('/draw');
    });
  });
});