import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import { useEffect, useState } from "react";
import FormContainer from "./components/Containers/FormContainer/FormContainer";
import TradesContainer from "./components/Containers/TradesContainer/TradesContainer";
import TradeItem from "./components/UIelements/TradeItem/TradeItem";

function App() {

  const [state,setState]=useState(null)
  const [formIsFilled,setFormIsFilled]=useState(false)
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
  useEffect(()=>{
    let IC = state?.initialCap || null;
    let perReturn = state?.perReturn||null;
    let perRisk = state?.perRisk||null;
    let capSL = state?.capSL||null;
    
    if(IC && perReturn && perRisk && capSL){
      setFormIsFilled(true)
    }
  },[state])
  console.log(setTrades)

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
        {formIsFilled && <TradesContainer>
          <TradeItem state={state} />
          <TradeItem state={state} />
          <TradeItem state={state} />
          <TradeItem state={state} />
          <TradeItem state={state} />
          <TradeItem state={state} />
        </TradesContainer>}
        
      </div>
    </>
  );
}

export default App;
