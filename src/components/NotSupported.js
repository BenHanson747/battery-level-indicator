import { useBattery } from "react-use";

function NotSupported() {
  const { isSupported } = useBattery();

  if (!isSupported) {
    return <p>Sorry, your browser does not support battery level indicator</p>;
  }

  return null;
}

export default NotSupported;
