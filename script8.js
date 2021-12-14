let modal = document.getElementById("myModal");
let list = document.getElementById("list");
let span = document.getElementsByClassName("close")[0];


for(let i=0; i<10; i++){
    let button = document.createElement("div");
    button.innerHTML =  `<button class="myBtn" onclick="show()" >Open Modal</button>`
    list.appendChild(button);
}

function show() {
    console.log('here');
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}