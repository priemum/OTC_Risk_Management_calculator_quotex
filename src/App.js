import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import BaseInput from "./components/UIelements/Inputs/BaseInput/BaseInput";
import BaseBtn from "./components/UIelements/Buttons/BaseBtn/BaseBtn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { percentages } from "./constants/percentageVars";
import FormContainer from "./components/Containers/FormContainer/FormContainer";
import TradesContainer from "./components/Containers/TradesContainer/TradesContainer";
import TradeItem from "./components/UIelements/TradeItem/TradeItem";

function App() {

  const [state,setState]=useState(null)
  const [trades,setTrades]=useState([{amount:80.92,return:72.02,loss:false,profit:false}])

  const setData = (key,val)=>{
    setState((state)=>({...state,[`${key}`]:val}))
  }

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
        <TradesContainer>
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
          <TradeItem amount={trades[0].amount} return={trades[0].return} loss={trades[0].loss} profit={trades[0].profit} />
        </TradesContainer>
      </div>
    </>
  );
}

export default App;
