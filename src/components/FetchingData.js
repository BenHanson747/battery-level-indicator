import { useBattery } from "react-use";

function FetchingData() {
  const { fetched } = useBattery();

  if (!fetched) {
    return <p>Loading...</p>;
  }

  return <p>Data fetched successfully!</p>;
}

export default FetchingData;
