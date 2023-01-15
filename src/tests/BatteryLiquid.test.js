import React from "react";
import { render } from "@testing-library/react";
import BatteryLiquid from "./BatteryLiquid";

jest.mock("react-use", () => ({
  useBattery: jest.fn(),
}));

describe("BatteryLiquid", () => {
  let useContextMock;
  beforeEach(() => {
    useContextMock = jest.spyOn(React, "useContext");
  });
  afterEach(() => {
    useContextMock.mockRestore();
  });

  const testCases = [
    { level: 0.2, className: "gradient-color-red", height: "20%" },
    { level: 0.4, className: "gradient-color-orange", height: "40%" },
    { level: 0.8, className: "gradient-color-yellow", height: "80%" },
    { level: 0.9, className: "gradient-color-green", height: "90%" },
    { level: undefined, className: "gradient-color-green", height: undefined },
  ];

  testCases.forEach(({ level, className, height }) => {
    it(`renders the correct styles and classname when level is ${level}`, () => {
      useContextMock.mockImplementation(() => ({ level }));
      const { getByTestId } = render(<BatteryLiquid />);

      expect(getByTestId("battery-liquid")).toHaveStyle(`height: ${height}`);
      expect(getByTestId("battery-liquid")).toHaveClass(
        `battery__liquid ${className}`
      );
    });
  });
});
