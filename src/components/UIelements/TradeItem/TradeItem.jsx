import "./TradeItem.scss";
import { motion } from "framer-motion";
import BaseBtn from "../Buttons/BaseBtn/BaseBtn";
import { useEffect, useState } from "react";
import percentages from '../../../constants/percentageVars'

const TradeItem = (props) => {
    const[tradeAmount,setTradeAmount] = useState(null)
    const[returnAmount,setReturnAmount] = useState(null)
    
    useEffect(() => {
       let IC = props.state.initialCap;
       let tradeAmount = IC * percentages.profitPer;
       let returnAmount =(tradeAmount * (props.state.perReturn >1 ?props.state.perReturn/100: props.state.perReturn));

        if(IC && tradeAmount && returnAmount){
            setTradeAmount(tradeAmount)
            setReturnAmount(returnAmount);
        }
    }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`app__tradeItem`}
    >
      <div className="tradeItem__leftsec">
        <div className="leftsec__amount">
          <div className="title"> Trade Amount : </div>
          <div className="title amount">{tradeAmount}</div>
        </div>
        <div className="leftsec__amount">
          <div className="title"> Return : </div>
          <div className="title amount">{returnAmount}</div>
        </div>
      </div>
      <div className="tradeItem__rightsec">
        <div>
          <div className="title result">Choose Result</div>
          <BaseBtn className="profit" type="submit">PROFIT</BaseBtn>
          <BaseBtn className="loss" type="submit">LOSS</BaseBtn>
        </div>
      </div>
    </motion.div>
  );
};

export default TradeItem;
