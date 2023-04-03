import './TradesContainer.scss'

const TradesContainer=(props)=>{
    return(
        <div className="app__tradesContainer">{props.children}</div>
    )
}

export default TradesContainer;