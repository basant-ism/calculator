import Button from "./Button";
import styles from "../styles/ButtonContainer.module.css";
const ButtonContainer = ({ handleButtonClick }) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {buttons.map((value) => (
        <Button
          value={value}
          handleButtonClick={handleButtonClick}
          key={value}
        ></Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
