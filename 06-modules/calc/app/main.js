import "./styles.css";
import "./helpers/math";
import { display, sqt } from "./helpers/math";

let result = ""; // global variable for current result

Array.from(document.getElementsByClassName("global")).forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.value !== "=") {
      // Adding numbers while user doesn't press result button
      result += event.target.value;
      display(result); // Displays the result on the calculator
    }

    if (event.target.value === "=") {
      // User Pressed on result button
      if (!result.includes("√")) {
        // Handle squart button
        try {
          if (result !== "") result = String(eval(result));
        } catch (error) {
          alert("Wrong Syntax");
        }
        if (String(result.includes(".")) && result.length > 6) {
          // Cuts the float number if too long
          result = result.substring(0, 5);
        }
        display(result);
      } else {
        if (!result.includes("+", "-", "*", "/", "%", "(", ")")) {
          // Squarts only on number without operations
          if (result.length !== 1 && result[0] === "√") {
            result = sqt(Number(result.substring(1)));
            result = String(result);
            if (result.includes(".") && result.length > 6) {
              result = result.substring(0, 5);
            }
            display(result);
          } else {
            alert("Wrong Syntax");
          }
        } else {
          alert("Wrong Syntax");
        }
      }
    }
  });
});

document.getElementById("delete").addEventListener("click", () => {
  // Handles delete button
  if (result.length > 0) {
    result = result.substring(0, result.length - 1); // Deletes last char
    display(result);
  }
});
