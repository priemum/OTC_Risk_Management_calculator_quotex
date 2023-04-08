import React, { useState } from "react";
import "./FormContainer.scss";
import { motion } from "framer-motion";
import BaseInput from "../../UIelements/Inputs/BaseInput/BaseInput";
import BaseBtn from "../../UIelements/Buttons/BaseBtn/BaseBtn";

const FormContainer = (props) => {
  const [inputData, setInputData] = useState({});
  const setData = (key, val) => {
    setInputData((state) => ({ ...state, [`${key}`]: val }));
  };

  const handleInitialCapChange = (e) => {
    setData("initialCap", +e.target.value);
    props.setStartingInitialCap(+e.target.value)
  };
  const handlePerReturn = (e) => {
    setData("perReturn", +e.target.value);
  };
  const handlePerRisk = (e) => {
    setData("perRisk", +e.target.value);
  };
  const handleCapSL = (e) => {
    setData("capSL", +e.target.value);
  };
  return (
    <React.Fragment>
      <motion.div
        className="formContent"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "linear", stiffness: 400, damping: 100 }}
        viewport={{ once: true }}
        // exit={props.exit}
        key={props.key}
        ref={props.ref}
      >
        <div className="title">Calculate Your Risks</div>
        <div className="form_container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.setState({ ...inputData });
              props.setShow((prevState)=>!prevState)
            }}
          >
            <BaseInput
              label="Initial Capital"
              id="initialCap"
              type="number"
              required
              onChange={handleInitialCapChange}
            />
            <BaseInput
              label="% Return"
              id="perReturn"
              type="number"
              required
              onChange={handlePerReturn}
            />
            <BaseInput
              label="% Cap. Risk"
              id="perRisk"
              type="number"
              required
              onChange={handlePerRisk}
            />
            <BaseInput
              label="% Of Stop Loss"
              id="capSL"
              type="number"
              required
              onChange={handleCapSL}
            />
            <div className="submitBtn">
              <BaseBtn type="submit">Submit</BaseBtn>
            </div>
          </form>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default FormContainer;
