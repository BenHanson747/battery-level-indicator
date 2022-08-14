import NotSupported from "./components/NotSupported";
import FetchingData from "./components/FetchingData";
import BatteryLiquid from "./components/BatteryLiquid";
import BatteryPercentage from "./components/BatteryPercentage";
import BatteryStatus from "./components/BatteryStatus";

function App() {
  return (
    <>
      <NotSupported />
      <FetchingData />
      <section className="battery">
        <div className="battery__card">
          <div className="battery__data">
            <p className="battery__text">Your battery is at:</p>
            <BatteryPercentage />
            <BatteryStatus />
          </div>

          <div className="battery__pill">
            <div className="battery__level">
              <BatteryLiquid />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
