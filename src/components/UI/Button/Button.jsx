import classes from "./Button.module.sass";

const Button = (props) => {
  const style = {};
  if (props.bgcolor) {
    style["background"] = props.bgcolor;
  }

  return <button style={style} type={props.type} onClick={props.onClick} className={`${classes["button"]} ${props.className}`}>{props.children}</button>;
};

export default Button;
