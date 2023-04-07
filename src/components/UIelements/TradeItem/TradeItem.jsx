import "./TradeItem.scss";
import { motion } from "framer-motion";
import BaseBtn from "../Buttons/BaseBtn/BaseBtn";
import { useRef } from "react";

const TradeItem = (props) => {
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView();
  //   }
  // }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 4 ,y:-300}}
      whileInView={{ opacity: 1, scale: 1 ,y:0}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`app__tradeItem ${props.trade.nill ? "" :props.trade.loss ? "lossOutline" : "profitOutline"}`}
      viewport={{once:true}}
      ref={ref}
    >
      <div className={`tradeItem__leftsec ${!props.trade.nill && "fullWidth"}`}>
        <div className="leftsec__amount">
          <div className="title"> Trade Amount : </div>
          <div className="title amount">
            {props.getKValue(props?.trade?.amount|| 0)}K
          </div>
        </div>
        <div className="leftsec__amount">
          <div className="title"> Return : </div>
          <motion.div
           initial={{ opacity: 0, scale: 2, x:-100 }}
           whileInView={{ opacity: 1, scale: 1 , x:0}}
           transition={{ type: "linear", stiffness: 300, damping: 10 }}
            className={`title amount ${
              props.trade.nill
                ? ""
                : props.trade.loss
                ? "doneLoss"
                : "doneProfit"
            }`}
            viewport={{once:true}}
          >
            {props.trade.loss ? "-" : "+"}
            {props.getKValue(props?.trade?.returnAmount|| 0)}K
          </motion.div>
        </div>
      </div>
      <div className={`tradeItem__rightsec ${!props.trade.nill && "hide"}`}>
        <div>
          <div className="title result">Choose Result</div>
          <BaseBtn
            className="profit"
            disabled={!props.trade.nill}
            onClick={() => {
              props.markProfit(props.index);
              props.setMustScale(true);
            }}
            type="submit"
          >
            PROFIT
          </BaseBtn>
          <BaseBtn
            className="loss"
            disabled={!props.trade.nill}
            onClick={() => props.markLoss(props.index)}
            type="submit"
          >
            LOSS
          </BaseBtn>
        </div>
      </div>
    </motion.div>
  );
};

export default TradeItem;
