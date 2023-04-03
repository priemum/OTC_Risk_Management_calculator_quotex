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
          {
            font: "Signika",
            weights: [300, 400, 500, 600],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="bg">
        <AnimatedBG />
      </div>
      <div className="__container ">
        <div className="content">
          <div className="input_compo">
            <label htmlFor="initialCap">Initial Capital</label>
            <input
              type="number"
              id="initialCap"
              className=""
              step="none"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
