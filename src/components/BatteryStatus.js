import { useBattery } from "react-use";
import { RiFlashlightLine, RiPlugLine, RiBattery2Fill } from "react-icons/ri";

function BatteryStatus() {
  const { level, charging } = useBattery();
  const red = { background: "var(--gradient-color-red)" };
  const green = { background: "var(--gradient-color-green)" };

  if (level === 1) {
    return (
      <p className="battery__status">
        Full Battery
        <RiBattery2Fill style={green} />
      </p>
    );
  } else if (level <= 0.2 && !charging) {
    return (
      <p className="battery__status">
        Low battery <RiPlugLine style={red} />
      </p>
    );
  } else if (charging) {
    return (
      <p className="battery__status">
        Charging... <RiFlashlightLine style={green} />
      </p>
    );
  }
}

export default BatteryStatus;
