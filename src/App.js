import AnimatedBG from "./components/Utility/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";

function App() {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="bg">
        <AnimatedBG />
      </div>
      <div className="__container ">
        <div className="content">
          <label style={{fontFamily:"Roboto Mono"}} htmlFor="initialCap">Initial Capital</label>
          <input type="number" id="initialCap" className="" step="none"></input>
        </div>
      </div>
    </>
  );
}

export default App;
