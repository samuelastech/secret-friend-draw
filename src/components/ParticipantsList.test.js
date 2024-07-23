import { render, screen } from "@testing-library/react";
import { ParticipantsList } from "./ParticipantsList";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../hooks/useParticipantsList";

jest.mock('../hooks/useParticipantsList');

describe('Participants List', () => {
  beforeEach(() => {
    useParticipantsList.mockReturnValue([]);
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );
  });

  it('must have a list tag UL or OL', () => {
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });

  describe('when empty', () => {
    it('must render a list without elements', () => {
      const itens = screen.queryAllByRole('listitem');
      expect(itens).toHaveLength(0);
    });
  });

  describe('when filled', () => {
    const names = ['Moses', 'Jacob'];

    beforeEach(() => {
      useParticipantsList.mockReturnValue(names);
      render(
        <RecoilRoot>
          <ParticipantsList />
        </RecoilRoot>
      );
    });

    it('must list/render the names', () => {
      const itens = screen.queryAllByRole('listitem');
      expect(itens).toHaveLength(names.length);
    });
  });
});
