function RandomNumber(inputText) {
  let lastNumber;
  function getRandNumber() {
    var x = Math.floor(Math.random() * 100 + 1);

    if (x === lastNumber) {
      return getRandNumber();
    }
    return x;
  }
  const number = getRandNumber();
  lastNumber = number;
  if (inputText === "") {
    document.getElementById("img").src = "images/sorry.jpg";
    document.getElementById("msg").innerText="invalid value";
    console.log("invalid value");
  }
  else if(isNaN(inputText)){
    document.getElementById("img").src = "images/sorry.jpg";
    document.getElementById("msg").innerText="Not a Number";
     console.log("Not a Number");
  }
  else if(inputText>number){
    document.getElementById("img").src = "images/sorry.jpg";
    document.getElementById("msg").innerText="It's too high";
    console.log("It's too high");
  }
  else if(inputText<number){
    document.getElementById("img").src = "images/sorry.jpg";
    document.getElementById("msg").innerText="It's too low";
    console.log("It's too low");
  }
  else{
    document.getElementById("img").src ="images/right.jpg";
    document.getElementById("msg").innerText=`yor are right and the number is ${number}`;
    console.log(`yor are right and the number is ${number}`);
  }
}
function inputValue() {
  const inputText = document.getElementById("inputPassword2").value;
  RandomNumber(inputText);
  //console.log(dataOfCity);
}
var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);