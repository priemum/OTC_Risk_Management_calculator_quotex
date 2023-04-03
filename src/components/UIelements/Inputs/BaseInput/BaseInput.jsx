import "./BaseInput.scss";

import { motion } from "framer-motion";
// import { useState } from "react";

const BaseInput = (props) => {
    // const [isSecFocused, setIsSecFocused] = useState(false)
  return (
    <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        viewport={{ once: true }}
        className={`app__baseInput ${props.className && props.className}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <motion.input
        type={props.type}
        id={props.id}
        onClick={props.onClick}
        onChange={props.onChange}
        required={props.required}
        // whileFocus={()=>setIsSecFocused(true)}
        className={` ${props.btnClass}`}
      ></motion.input>
    </motion.div>
  );
};

export default BaseInput;
