import "./TradeItem.scss";
import { motion } from "framer-motion";
import BaseBtn from "../Buttons/BaseBtn/BaseBtn";

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
          <div className="title amount">{props.amount}</div>
        </div>
        <div className="leftsec__amount">
          <div className="title"> Return : </div>
          <div className="title amount">{props.return}</div>
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
