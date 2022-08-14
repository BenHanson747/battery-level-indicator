import { useBattery } from "react-use";

function BatteryLiquid() {
  const { level } = useBattery();
  const BatteryLiquidHeight = { height: `${parseInt(level * 100)}%` };

  if (level <= 0.2) {
    return (
      <div
        style={BatteryLiquidHeight}
        className="battery__liquid gradient-color-red"
      ></div>
    );
  } else if (level <= 0.4) {
    return (
      <div
        style={BatteryLiquidHeight}
        className="battery__liquid gradient-color-orange"
      ></div>
    );
  } else if (level <= 0.8) {
    return (
      <div
        style={BatteryLiquidHeight}
        className="battery__liquid gradient-color-yellow"
      ></div>
    );
  } else {
    return (
      <div
        style={BatteryLiquidHeight}
        className="battery__liquid gradient-color-green"
      ></div>
    );
  }
}

export default BatteryLiquid;
