import "../styles/button.css";

const Button = (props) => {
  return (
    <button
      className={
        props.value === "="
          ? "wide-button"
          : 
          props.value === " CE "
          ? "wide-button clear-button"
          :props.value === " + "
          ? "tall-button"
          : null
      }
      onClick={() => props.setFormula(props.formula + props.value)}
    >
      {props.value}
    </button>
  );
};

export default Button;
