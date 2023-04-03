import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import BaseInput from "./components/UIelements/Inputs/BaseInput/BaseInput";
import BaseBtn from "./components/UIelements/Buttons/BaseBtn/BaseBtn";
import { motion } from "framer-motion"

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
      
        <motion.div className="content"  initial={{ opacity: 0 ,scale:0}}
  whileInView={{ opacity: 1 ,scale:1}}
  viewport={{ once: true }}>
          <div className="title">Calculate Your Risks</div>
          <div className="form_container">
            <form>
              <BaseInput
                label="Initial Capital"
                id="initialCap"
                type="number"
              />
              <BaseBtn>Submit</BaseBtn>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
