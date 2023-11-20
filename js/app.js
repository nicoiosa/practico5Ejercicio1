function startGame() {
  console.log("Estoy anashe");
  const btn = document.getElementsByClassName("btn");
  const input = document.getElementById("input");
  const paragraph = document.getElementsByTagName("p");
  const randomNumber = Math.floor(Math.random() * 99);
  console.log(btn);
  console.log(input);
  console.log(paragraph);
  console.log(randomNumber);
  btn[0].className += " d-none";
  input.className = "row justify-content-center";
  paragraph[0].innerHTML = "Ya elegi el numero, puedes adivinar";
  paragraph[0].className = "lead mb-5";
}
