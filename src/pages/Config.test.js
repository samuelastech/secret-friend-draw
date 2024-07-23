import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Config } from "./Config";

jest.mock('react-router-dom');

test('should render the page', () => {
  const { container } = render(
    <RecoilRoot>
      <Config />
    </RecoilRoot>
  );

  expect(container).toMatchSnapshot();
});