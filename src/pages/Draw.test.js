import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "../hooks/useParticipantsList";
import { useDraw } from "../hooks/useDraw";
import { Draw } from "./Draw";

jest.mock("../hooks/useParticipantsList");
jest.mock("../hooks/useDraw");

const names = ['Moses', 'Jacob', 'Araon', 'Magdala'];
const draw = new Map([
  ['Moses', 'Jacob'],
  ['Jacob', 'Araon'],
  ['Araon', 'Magdala'],
  ['Magdala', 'Moses'],
]);

beforeEach(() => {
  useParticipantsList.mockReturnValue(names);
  useDraw.mockReturnValue(draw);
  render(
    <RecoilRoot>
      <Draw />
    </RecoilRoot>
  );
});

test('all participants can show their secret friend', () => {
  const options = screen.queryAllByRole('option');
  expect(options).toHaveLength(names.length + 1);
});

test('the secret friend is shown when asked', () => {
  const select = screen.getByRole("combobox");
  fireEvent.change(select, { target: { value: names[0] } });
  const button = screen.getByRole('button');
  fireEvent.click(button);
  const friend = screen.getByRole('alert');
  expect(friend).toBeInTheDocument();
});