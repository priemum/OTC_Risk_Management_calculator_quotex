import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import BaseInput from "./components/UIelements/Inputs/BaseInput/BaseInput";
import BaseBtn from "./components/UIelements/Buttons/BaseBtn/BaseBtn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { percentages } from "./constants/percentageVars";
import FormContainer from "./components/Containers/FormContainer/FormContainer";

function App() {

  const [state,setState]=useState(null)

  const setData = (key,val)=>{
    setState((state)=>({...state,[`${key}`]:val}))
  }

  const [trades,setTrades]=useState([])

  useEffect(()=>{
    const firstFeild = document.getElementById("initialCap")
    if(firstFeild){
      firstFeild.focus()
    }
  },[])

  return (
    <>
      <GoogleFontLoader
        fonts={[
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
        <FormContainer setData={setData} state={state}/>
        {/* <motion.div
          className="formContent"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "linear", stiffness: 400, damping: 100 }}
          viewport={{ once: true }}
        >
          <div className="title">Calculate Your Risks</div>
          <div className="form_container">
            <form onSubmit={(e)=> {e.preventDefault();
            console.log(state)}}>
              <BaseInput
                label="Initial Capital"
                id="initialCap"
                type="number"
                onChange={(e)=>setData("initialCap",+e.target.value)}
              />
              <BaseInput
                label="% Return"
                id="perReturn"
                type="number"
                onChange={(e)=>setData("perReturn",+e.target.value)}
              />
              <BaseInput
                label="% Cap. Risk"
                id="perRisk"
                type="number"
                onChange={(e)=>setData("perRisk",+e.target.value)}
              />
              <BaseInput
                label="% Of Stop Loss"
                id="capSL"
                type="number"
                onChange={(e)=>setData("capSL",+e.target.value)}
              />
              <div className="submitBtn"><BaseBtn type="submit">Submit</BaseBtn></div>
              
            </form>
          </div>
        </motion.div> */}
      </div>
    </>
  );
}

export default App;
