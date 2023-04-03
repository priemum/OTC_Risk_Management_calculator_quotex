import "./BaseBtn.scss";

const BaseBtn = (props) => {
  return <button onClick={props.onClick} styles={props.styles} type={props.type} className={` app__baseBtn ${props.className}`} >{props.children}</button>;
};

export default BaseBtn;
