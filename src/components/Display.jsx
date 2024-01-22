import styles from "../styles/Display.module.css";
const Display = ({ inputText }) => {
  return (
    <input
      type="text"
      className={styles.inputStyle}
      readOnly
      value={inputText}
    />
  );
};

export default Display;
