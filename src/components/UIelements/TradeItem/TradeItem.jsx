import "./TradeItem.scss";
import { motion } from "framer-motion";

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
         <div className="title"> Trade Amount : </div><div className="title amount">{props.amount}</div>
        </div>
      </div>
      <div className="tradeItem__rightsec">
        <div className="title">Result</div>
      </div>
    </motion.div>
  );
};

export default TradeItem;
