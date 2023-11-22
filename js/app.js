const btn = document.getElementsByClassName("btn");
const paragraphs = document.getElementsByTagName("p");
const list = document.querySelector("ul");
const formNumber = document.querySelector("#formNumber");
let randomNumber;

function startGame() {
  randomNumber = Math.floor(Math.random() * 99);
  console.log(randomNumber);
  btn[0].className += " d-none";
  formNumber.className = "row justify-content-center";
  paragraphs[0].className = "lead mb-5";
}

function guess(e) {
  e.preventDefault();
  const inputNumber = document.getElementById("inputNumber").value;
  if (inputNumber >= 1 && inputNumber <= 100) {
    if (inputNumber == randomNumber) {
      window.alert("Adivinaste el numero");
      btn[0].className = "btn btn-primary mb-5 btn-lg";
      formNumber.className += " d-none";
      paragraphs[0].className += " d-none";
      paragraphs[1].className = "lead mb-5";
      list.className = "list-group list-group-flush";
      const newEntry = document.createElement("li");
      newEntry.innerHTML = inputNumber;
      newEntry.className = "list-group-item";
      list.appendChild(newEntry);
    } else {
      window.alert("No adivinaste el numero");
      if (inputNumber < randomNumber) {
        alert("El numero que ingresaste es menor al numero magico");
      } else {
        alert("El numero que ingresaste es mayor al numero magico");
      }
    }
  } else {
    alert("No ingresaste un numero valido")
  }
  formNumber.reset();
}

formNumber.addEventListener("submit", guess);