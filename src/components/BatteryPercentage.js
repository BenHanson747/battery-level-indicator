import { useBattery } from "react-use";

function BatteryPercentage() {
  const { level } = useBattery();
  const BatteryLevel = Math.floor(level * 100) + "%";

  return <h1 className="battery__percentage">{BatteryLevel}</h1>;
}

export default BatteryPercentage;
