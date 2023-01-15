import { useBattery } from "react-use";
import { RiFlashlightLine, RiPlugLine, RiBattery2Fill } from "react-icons/ri";

function BatteryStatus() {
  const { level, charging } = useBattery();
  const red = { background: "var(--gradient-color-red)" };
  const green = { background: "var(--gradient-color-green)" };

  let text, icon;

  switch (true) {
    case level === 1:
      text = "Full Battery";
      icon = <RiBattery2Fill style={green} />;
      break;
    case level <= 0.2 && !charging:
      text = "Low battery";
      icon = <RiPlugLine style={red} />;
      break;
    case charging:
      text = "Charging...";
      icon = <RiFlashlightLine style={green} />;
      break;
    default:
      text = "";
      icon = null;
  }

  return (
    <p className="battery__status">
      {text} {icon}
    </p>
  );
}

export default BatteryStatus;
