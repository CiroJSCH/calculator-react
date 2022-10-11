import Swal from 'sweetalert2'
import Display from "./Display";
import Button from "./Button";
import { useState, useEffect } from "react";
import { calculate } from "../utils/calculate";
import "../styles/calculator.css";

const numericButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorButtons = [" * ", " - ", " + "];

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState(0.0);

  useEffect(() => {
    if (formula.slice(-1) === "=") {
      if (calculate(formula.substring(0, formula.length - 1)) % 1 === 0) {
        setResult(calculate(formula.substring(0, formula.length - 1)));
        setFormula(
          calculate(formula.substring(0, formula.length - 1)).toString()
        );
      } else {
        setResult(
          calculate(formula.substring(0, formula.length - 1)).toFixed(4)
        );
        setFormula(
          calculate(formula.substring(0, formula.length - 1))
            .toFixed(4)
            .toString()
        );
      }
    }

    if (isNaN(result)) {
      setResult(0.0);
      setFormula("");
    } else if (!isFinite(result)) {
      setFormula("");
      setResult(0.0);
      Swal.fire({
        icon: 'error',
        title: 'Error matemático!',
        text: 'No se puede dividir por 0',
      })
    }

  }, [formula]);

  if (formula.split(" ").indexOf("CE") !== -1) {
    setFormula("");
    setResult(0.0);
  }

  return (
    <div className="calculator">
      <Display
        formula={formula}
        calculate={calculate}
        result={result.toString()}
      />
      <div className="calculator-body">
        <div className="calculator-body-function">
          <Button
            key={"ce"}
            value={" CE "}
            setFormula={setFormula}
            formula={formula}
          />
          <Button
            key={"."}
            value={"."}
            setFormula={setFormula}
            formula={formula}
          />
          <Button
            key={"/"}
            value={" / "}
            setFormula={setFormula}
            formula={formula}
          />
        </div>
        <div className="calculator-container-body">
          <div className="calculator-body-numbers">
            {numericButtons.map((button, index) => {
              return (
                <Button
                  key={index}
                  value={button}
                  setFormula={setFormula}
                  formula={formula}
                />
              );
            })}
            <Button
              className="dot-button"
              key={"equal"}
              value={"="}
              setFormula={setFormula}
              formula={formula}
            />
          </div>
          <div className="calculator-body-operators">
            {operatorButtons.map((button, index) => {
              return (
                <Button
                  key={index}
                  value={button}
                  setFormula={setFormula}
                  formula={formula}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
