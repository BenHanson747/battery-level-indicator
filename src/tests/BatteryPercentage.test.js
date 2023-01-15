import React from "react";
import { render } from "@testing-library/react";
import BatteryPercentage from "./BatteryPercentage";

jest.mock("react-use", () => ({
  useBattery: jest.fn(),
}));

describe("BatteryPercentage", () => {
  let useContextMock;
  beforeEach(() => {
    useContextMock = jest.spyOn(React, "useContext");
  });
  afterEach(() => {
    useContextMock.mockRestore();
  });

  const testCases = [
    { level: 0.3, percentage: "30%" },
    { level: 0.5, percentage: "50%" },
    { level: 0.75, percentage: "75%" },
  ];

  testCases.forEach(({ level, percentage }) => {
    it(`renders the correct battery percentage when level is ${level}`, () => {
      useContextMock.mockImplementation(() => ({ level }));
      const { getByText } = render(<BatteryPercentage />);
      const batteryPercentage = getByText(percentage);
      expect(batteryPercentage).toBeInTheDocument();
    });
  });
});
