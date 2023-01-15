import { render, screen } from "@testing-library/react";
import NotSupported from "./NotSupported";
import { useBattery } from "react-use";

jest.mock("react-use", () => ({
  useBattery: jest.fn(),
}));

describe("NotSupported", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display "Sorry, your browser does not support battery level indicator" when it is not supported', () => {
    useBattery.mockReturnValue({ isSupported: false });
    render(<NotSupported />);

    expect(
      screen.getByText(
        "Sorry, your browser does not support battery level indicator"
      )
    ).toBeInTheDocument();
  });

  it("should return null when it is supported", () => {
    useBattery.mockReturnValue({ isSupported: true });
    const { container } = render(<NotSupported />);

    expect(container.firstChild).toBeNull();
  });
});
