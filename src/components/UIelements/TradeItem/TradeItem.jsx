import "./TradeItem.scss";
import { motion } from "framer-motion";
import BaseBtn from "../Buttons/BaseBtn/BaseBtn";
import { useEffect, useState } from "react";
import percentages from '../../../constants/percentageVars'

const TradeItem = (props) => {
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
          <div className="title amount">{props?.trade?.amount || 0}</div>
        </div>
        <div className="leftsec__amount">
          <div className="title"> Return : </div>
          <div className="title amount">{props?.trade?.returnAmount || 0}</div>
        </div>
      </div>
      <div className="tradeItem__rightsec">
        <div>
          <div className="title result">Choose Result</div>
          <BaseBtn className="profit" onClick={()=>props.markProfit(props.index)} type="submit">PROFIT</BaseBtn>
          <BaseBtn className="loss" onClick={()=>props.markLoss(props.index)} type="submit">LOSS</BaseBtn>
        </div>
      </div>
    </motion.div>
  );
};

export default TradeItem;
