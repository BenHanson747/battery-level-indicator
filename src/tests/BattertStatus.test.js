import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import BatteryStatus from "./BatteryStatus";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("BatteryStatus component", () => {
  test("renders with full battery status", () => {
    act(() => {
      render(<BatteryStatus level={1} charging={false} />, container);
    });
    expect(container.textContent).toBe("Full Battery");
  });

  test("renders with low battery status", () => {
    act(() => {
      render(<BatteryStatus level={0.1} charging={false} />, container);
    });
    expect(container.textContent).toBe("Low battery");
  });

  test("renders with charging status", () => {
    act(() => {
      render(<BatteryStatus level={0.5} charging={true} />, container);
    });
    expect(container.textContent).toBe("Charging...");
  });
});
