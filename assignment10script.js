// let player1Random = 0;
let sum1 = 0;
let sum2 = 0;
function RandomNumberOne() {
  let lastNumber;
  function getRandNumber() {
    var x = Math.floor(Math.random() * 5 + 1);

    if (x === lastNumber) {
      return getRandNumber();
    }
    return x;
  }

  const number = getRandNumber();
  lastNumber = number;

  sum1 = sum1 + number;
  console.log(number);
  document.getElementById("player1__random").innerText = number;
  document.getElementById("player1__total").innerText = sum1;
  if (sum1 >= 16) {
    alert("Player one win");
  }
  return number;
}
function RandomNumberTwo() {
  let lastNumber;
  function getRandNumber() {
    var x = Math.floor(Math.random() * 5 + 1);

    if (x === lastNumber) {
      return getRandNumber();
    }
    return x;
  }

  const number = getRandNumber();
  lastNumber = number;

  sum2 = sum2 + number;
  console.log(number);
  document.getElementById("player2__random").innerText = number;
  document.getElementById("player2__total").innerText = sum2;
  if (sum2 >= 16) {
    alert("Player two win");
  }
  return number;
}
