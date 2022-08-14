import { useBattery } from "react-use";

function FetchingData() {
  const { fetched } = useBattery();

  if (!fetched) {
    return <p>One moment... we are fetching the data we need.</p>;
  }
}

export default FetchingData;
