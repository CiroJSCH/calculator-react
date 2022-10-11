import { operations } from "./operations";

export function calculate(str) {
    const splittedFormula = str.split(" ");
    for (let i = 0; i < splittedFormula.length; i++) {
      if (splittedFormula[i] === "*" || splittedFormula[i] === "/") {
        let tempResult = operations[splittedFormula[i]](
          splittedFormula[i - 1],
          splittedFormula[i + 1]
        );
        splittedFormula.splice(i - 1, 3, tempResult);
      }
    }

    let tempResult = Number(splittedFormula[0]);
    for (let i = 1; i < splittedFormula.length; i += 2) {
      tempResult = operations[splittedFormula[i]](
        tempResult,
        Number(splittedFormula[i + 1])
      );
    }

    return tempResult;
  }