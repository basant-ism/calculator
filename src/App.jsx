import Container from "./components/Container";
import styles from "./styles/App.module.css";
import CalculatorApp from "./components/CalculatorApp";

function App() {
  return (
    <div className={styles.container}>
      <Container>
        <CalculatorApp></CalculatorApp>
      </Container>
    </div>
  );
}

export default App;
