import { useBattery } from "react-use";

function NotSupported() {
  const { isSupported } = useBattery();

  if (!isSupported) {
    return (
      <p>
        The Battery Level Indicator is not currently supported in this browser.
      </p>
    );
  }
}

export default NotSupported;
