let a = "",
  b = "",
  sign = "",
  finish = false;
const numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const oper = ["+", "X", "-", "/"];
const but = document.querySelectorAll(".calca__button");
const screen = document.querySelector(".calc__input");
but.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const key = event.target.innerHTML;
    if (numb.includes(key)) {
      if (b === "" && sign === "") {
        a += key;
        console.log(a, b, sign);
        screen.value = a;
      } else if (a !== "" && b !== "" && finish) {
        b = key;
        finish = false;
        screen.value = b;
      } else {
        b += key;
        screen.value = b;
      }
      console.log(a, b, sign);
      return;
    }
    if (oper.includes(key)) {
      sign = key;
      screen.value = sign;
      console.log(a, b, sign);
      return;
    }
    if (key === "=") {
      if (b === "") b = a;
      switch (sign) {
        case "+":
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "/":
          if (b === '0'){
            screen.value = 'Ошибка'
            a = '';
            b = '';
            sign = '';
            return;
          }
        
          a = a / b;
          break;
        case "X":
          a = a * b;
          break;
      }
      finish = true;
      screen.value = a;
    }
  });
  document.querySelector(".calc__clear").addEventListener("click", () => {
    clearAll();
  });
});

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  screen.value = "";
}
