import "./BaseBtn.scss";
import { motion } from "framer-motion";

const BaseBtn = (props) => {
  return (
    <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={props.onClick}
        styles={props.styles}
        type={props.type}
        className={` app__baseBtn ${props.className}`}
    >
      {props.children}
    </motion.button>
  );
};

export default BaseBtn;
