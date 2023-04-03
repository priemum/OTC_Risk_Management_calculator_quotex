import './BaseInput.scss'

const BaseInput=(props)=>{
    return(
        <div className={`app__baseInput ${props.className && props.className}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
              type={props.type}
              id={props.id}
              onClick={props.onClick}
              onChange={props.onChange}
              className={` ${props.btnClass}`}
            ></input>
        </div>
    )
}

export default BaseInput;