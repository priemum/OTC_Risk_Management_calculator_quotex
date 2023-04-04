import AnimatedBG from "./components/Utility/AnimatedBG/AnimatedBG";
import "./App.scss";
import GoogleFontLoader from "react-google-font-loader";
import { useEffect, useRef, useState } from "react";
import FormContainer from "./components/Containers/FormContainer/FormContainer";
import TradesContainer from "./components/Containers/TradesContainer/TradesContainer";
import TradeItem from "./components/UIelements/TradeItem/TradeItem";
import percentages from "./constants/percentageVars";
import { AnimatePresence, usePresence } from "framer-motion";
import { gsap } from "gsap";
import { motion } from "framer-motion";

function App() {
  const [state, setState] = useState(null);
  const [show, setShow] = useState(true);
  const [formIsFilled, setFormIsFilled] = useState(false);
  const [trades, setTrades] = useState([]);
  const [mustScale, setMustScale] = useState(false);
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);
  const setData = (key, val) => {
    setState((state) => ({ ...state, [`${key}`]: val }));
  };

  useEffect(() => {
    const firstFeild = document.getElementById("initialCap");
    if (firstFeild) {
      firstFeild.focus();
    }
  }, []);
  // useEffect(() => {
  //     setTimeout(() => {
  //       setMustScale(!mustScale)
  //     }, 3000);
  // }, [mustScale]);
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
      if (trades.length === 0) {
        setTrades((prevState) => [
          ...prevState,
          {
            amount: tradeAmount,
            returnAmount: 0,
            loss: false,
            nill: true,
          },
        ]);
      }
    }
  }, [state, trades.length]);

  const markLoss = (index) => {
    let tradesState1 = [...trades];
    let tradesState2 = [...JSON.parse(JSON.stringify(tradesState1))];
    tradesState2[index].loss = true;
    tradesState2[index].nill = false;
    let finalTradeState = [...JSON.parse(JSON.stringify(tradesState2))];

    let lastTrade = finalTradeState[finalTradeState.length - 1];
    lastTrade.returnAmount = lastTrade.amount;
    let newTrade = {
      amount: lastTrade.amount * percentages.lossPer,
      return: 0,
      loss: false,
      nill: true,
    };
    finalTradeState.push(newTrade);

    state.initialCap = state.initialCap - lastTrade.amount;

    setTrades([...finalTradeState]);
  };

  const markProfit = (index) => {
    let tradesState1 = trades;
    let tradesState2 = [...JSON.parse(JSON.stringify(tradesState1))];
    tradesState2[index].loss = false;
    tradesState2[index].nill = false;
    let finalTradeState = [...JSON.parse(JSON.stringify(tradesState2))];

    let lastTrade = finalTradeState[finalTradeState.length - 1];
    lastTrade.returnAmount =
      lastTrade.amount *
      (state.perReturn > 1 ? state.perReturn / 100 : state.perReturn);

    state.initialCap = state.initialCap + lastTrade.returnAmount;
    let IC = state?.initialCap || null;
    let tradeAmount = IC * (percentages.profitPer + 1);
    let newTrade = {
      amount: tradeAmount * percentages.profitPer,
      return: 0,
      loss: false,
      nill: true,
    };
    finalTradeState.push(newTrade);

    setTrades([...finalTradeState]);
  };
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
        <AnimatePresence>
          {show ? (
            <FormContainer
              ref={ref}
              setData={setData}
              setState={setState}
              state={state}
              setShow={setShow}
              show={show}
            />
          ) : null}
        </AnimatePresence>
        {formIsFilled && trades.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "linear", stiffness: 400, damping: 100 }}
            animate={{ scale: mustScale ? 3 : 1 }}
            onClick={()=>setMustScale(!mustScale)}
            className="Cap_head"
          >
            {state?.initialCap?.toFixed(2)}
          </motion.div>
        )}
        {formIsFilled && trades.length > 0 && (
          <TradesContainer>
            {trades.map((trade, index) => {
              return (
                <TradeItem
                  key={index}
                  trade={trade}
                  index={index}
                  markLoss={markLoss}
                  markProfit={markProfit}
                  setMustScale={setMustScale}
                />
              );
            })}
          </TradesContainer>
        )}
      </div>
    </>
  );
}

export default App;
