import styles from "../styles/Button.module.css";

const Button = ({ value, handleButtonClick }) => {
  const onButtonClick = (btnText) => {
    handleButtonClick(btnText);
  };
  return (
    <button className={styles.btn} onClick={() => onButtonClick(value)}>
      {value}
    </button>
  );
};

export default Button;
