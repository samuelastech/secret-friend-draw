import { render, screen } from "@testing-library/react";
import { Header } from "./Header.js";

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders the header', () => {
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('expects the logo to be there', () => {
    const logoElement = screen.getByAltText("Secret friend drawer's logo");
    expect(logoElement).toBeInTheDocument();
  });

  it('expects the avatar image to be there', () => {
    const logoElement = screen.getByAltText("Avatar image of a participant");
    expect(logoElement).toBeInTheDocument();
  });
});
