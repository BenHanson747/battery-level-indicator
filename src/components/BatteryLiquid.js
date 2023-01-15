import { useBattery } from "react-use";

const batteryStyles = [
  { level: 0.2, className: "gradient-color-red" },
  { level: 0.4, className: "gradient-color-orange" },
  { level: 0.8, className: "gradient-color-yellow" },
  { className: "gradient-color-green" },
];

function BatteryLiquid() {
  const { level } = useBattery();
  const BatteryLiquidHeight = { height: `${parseInt(level * 100)}%` };

  const style = batteryStyles.find(({ level: lvl }) => lvl > level) || {};
  const className = style.className || "gradient-color-green";

  return (
    <div
      style={BatteryLiquidHeight}
      className={`battery__liquid ${className}`}
    ></div>
  );
}

export default BatteryLiquid;
