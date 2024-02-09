let a = "",
  b = "",
  sign = "",
  finish = false;
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"];
const oper = ["+", "-", "X", "/"];
const disp = document.querySelector(".calc__input");
const btns = document.querySelectorAll(".calca__button");
const clearBtn = document.querySelector(".calc__clear");
const percBtn = document.querySelector(".calc__perc");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const key = event.target.innerHTML;
    if (nums.includes(key)) {
      if (b === "" && sign === "") {
        a += btn.innerHTML;
        disp.value = a;
      } else if ((b !== "" && a !== "", finish)) {
        b = key;
        finish = false;
        disp.value = b;
        console.log(a, sign, b);
      } else {
        b += btn.innerHTML;
        disp.value = b;
      }
      return;
    }
    if (oper.includes(key)) {
      sign = key;
      disp.value = sign;
      return;
    }

    if (key === "=") {
      switch (sign) {
        case "+":
          if (b === "") {
            b = a;
          }
          a = +a + +b;
          break;
        case "-":
          a = a - b;
          break;
        case "X":
          a = a * b;
          break;
        case "/":
          if (b === "0") {
            disp.value = "Ошибка";
            console.log(a, b, sign);
            a = "";
            b = "";
            sign = "";
            return;
          }
          a = a / b;
          break;
      }
      disp.value = a;
      finish = true;
    }

    if (key === "%") {
      a = a / 100;
      disp.value = a;
      finish = true;
    }
    if (key === "+/-") {
      a = -a;
      disp.value = a;
      finish = true;
      console.log(a, b, sign);
    }
  });
});
clearBtn.addEventListener("click", () => {
  clearInput();
});
function clearInput() {
  disp.value = "";
  a = "";
  b = "";
  sign = "";
  finish = false;
}
