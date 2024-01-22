import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import Display from "./Display";

const CalculatorApp = () => {
  const [inputText, setInputText] = useState("");
  const handleButtonClick = (btnText) => {
    if (btnText === "C") {
      setInputText("");
    } else if (btnText === "=") {
      const result = eval(inputText);
      setInputText(result);
    } else {
      const newInputText = inputText + btnText;
      setInputText(newInputText);
    }
  };

  return (
    <>
      <Display inputText={inputText}></Display>
      <ButtonContainer handleButtonClick={handleButtonClick}></ButtonContainer>
    </>
  );
};

export default CalculatorApp;
