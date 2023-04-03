import React from 'react'
import './FormContainer.scss'
import { motion } from "framer-motion";
import BaseInput from '../../UIelements/Inputs/BaseInput/BaseInput';
import BaseBtn from '../../UIelements/Buttons/BaseBtn/BaseBtn';

const FormContainer=(props)=>{
    return(
        <React.Fragment>
            <motion.div
          className="formContent"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "linear", stiffness: 400, damping: 100 }}
          viewport={{ once: true }}
        >
          <div className="title">Calculate Your Risks</div>
          <div className="form_container">
            <form onSubmit={(e)=> {e.preventDefault();
            console.log(props.state)}}>
              <BaseInput
                label="Initial Capital"
                id="initialCap"
                type="number"
                required
                onChange={(e)=>props.setData("initialCap",+e.target.value)}
              />
              <BaseInput
                label="% Return"
                id="perReturn"
                type="number"
                required
                onChange={(e)=>props.setData("perReturn",+e.target.value)}
              />
              <BaseInput
                label="% Cap. Risk"
                id="perRisk"
                type="number"
                required
                onChange={(e)=>props.setData("perRisk",+e.target.value)}
              />
              <BaseInput
                label="% Of Stop Loss"
                id="capSL"
                type="number"
                required
                onChange={(e)=>props.setData("capSL",+e.target.value)}
              />
              <div className="submitBtn"><BaseBtn type="submit">Submit</BaseBtn></div>
              
            </form>
          </div>
        </motion.div>
        </React.Fragment>
    )
}


export default FormContainer;