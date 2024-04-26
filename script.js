const h2 = document.querySelector("h2")
h2.style.color = "blue";
h2.style.fontSize = "45px";

//Se usuário digitar um nome inválido
const username = document.querySelector("#login-usuario")
username.classList.add("error")

const errorText = document.querySelector(".error-text")
errorText.classList.add("visible")

//Usuário corrigiu nome, 
username.classList.remove("error")
errorText.classList.remove("visible")
username.classList.add("correct")

//mas senha incorreta
const password = document.querySelector("#login-senha")
password.classList.add("error")

const errorPassword = document.querySelectorAll(".error-text")
errorPassword[1].classList.add("visible")

