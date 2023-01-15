import { render, screen } from "@testing-library/react";
import FetchingData from "./FetchingData";
import { useBattery } from "react-use";

jest.mock("react-use", () => ({
  useBattery: jest.fn(),
}));

describe("FetchingData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display "Loading..." when data is not fetched', () => {
    useBattery.mockReturnValue({ fetched: false });
    render(<FetchingData />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it('should display "Data fetched successfully!" when data is fetched', () => {
    useBattery.mockReturnValue({ fetched: true });
    render(<FetchingData />);

    expect(screen.getByText("Data fetched successfully!")).toBeInTheDocument();
  });
});
