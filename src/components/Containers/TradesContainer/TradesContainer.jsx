import './TradesContainer.scss'
import { motion } from "framer-motion";

const TradesContainer=(props)=>{
    return(
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "linear", stiffness: 400, damping: 100 }}
          viewport={{ once: true }}
         className="app__tradesContainer">{props.children}</motion.div>
    )
}

export default TradesContainer;