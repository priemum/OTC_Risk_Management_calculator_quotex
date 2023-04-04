import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import { useEffect, useState } from "react";
import FormContainer from "./components/Containers/FormContainer/FormContainer";
import TradesContainer from "./components/Containers/TradesContainer/TradesContainer";
import TradeItem from "./components/UIelements/TradeItem/TradeItem";
import percentages from "./constants/percentageVars";

function App() {
  const [state, setState] = useState(null);
  const [formIsFilled, setFormIsFilled] = useState(false);
  const [trades, setTrades] = useState([]);

  const setData = (key, val) => {
    setState((state) => ({ ...state, [`${key}`]: val }));
  };

  useEffect(() => {
    const firstFeild = document.getElementById("initialCap");
    if (firstFeild) {
      firstFeild.focus();
    }
  }, []);
  useEffect(() => {
    let IC = state?.initialCap || null;
    let perReturn = state?.perReturn || null;
    let perRisk = state?.perRisk || null;
    let capSL = state?.capSL || null;

    if (IC && perReturn && perRisk && capSL) {
      let IC = state.initialCap;
      let tradeAmount = IC * percentages.profitPer;
      let returnAmount =
        tradeAmount *
        (state.perReturn > 1 ? state.perReturn / 100 : state.perReturn);

      setFormIsFilled(true);
      if(trades.length===0){
        setTrades((prevState) => [
          ...prevState,
          {
            amount: tradeAmount,
            returnAmount: returnAmount,
            loss: false,
            profit: false,
          },
        ]);
      }
    }
  }, [state]);

  const markLoss=(index)=>{
    let tradesState1 = [...trades];
    let tradesState2 = [...JSON.parse(JSON.stringify(tradesState1))]
    tradesState2[index].loss = true;
    let finalTradeState = [...JSON.parse(JSON.stringify(tradesState2))]

    let lastTrade = finalTradeState[finalTradeState.length-1];
    lastTrade.returnAmount = -lastTrade.amount
    let newTrade = {amount:lastTrade.amount*percentages.lossPer,return:0,loss:false,profit:false}
    finalTradeState.push(newTrade)

    state.initialCap = state.initialCap - lastTrade.amount
    
    setTrades([...finalTradeState])
  }

  const markProfit=(index)=>{
    let tradesState1 = trades;
    let tradesState2 = [...JSON.parse(JSON.stringify(tradesState1))]
    tradesState2[index].profit = true;
    let finalTradeState = [...JSON.parse(JSON.stringify(tradesState2))]

    let lastTrade = finalTradeState[finalTradeState.length-1];
    lastTrade.returnAmount = +lastTrade.amount* (percentages.profitPer+1)
    debugger
    state.initialCap = state.initialCap + lastTrade.amount
    let IC = state?.initialCap || null;
    let tradeAmount = IC * (percentages.profitPer+1);
    let newTrade = {amount:tradeAmount*percentages.profitPer,return:0,loss:false,profit:false}
    finalTradeState.push(newTrade)

    debugger

    setTrades([...finalTradeState])
  }
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
        <FormContainer setData={setData} setState={setState} state={state} />
        {formIsFilled && trades.length > 0 && (
          <TradesContainer>
            {trades.map((trade, index) => {
              return(<TradeItem key={index} trade={trade} index={index} markLoss={markLoss} markProfit={markProfit} />)
            })}
          </TradesContainer>
        )}
      </div>
    </>
  );
}

export default App;
