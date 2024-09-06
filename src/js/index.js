const botao = document.getElementById("enviar");
const campos = document.querySelectorAll(".inputs");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");

botao.addEventListener("click", () => {
  campos.forEach(function (inputs, i) {
    if (inputs.value === "") {
      inputs.classList.add("invalido");
      inputs.classList.remove("valido");
      campoObrigatorio[i].classList.add("ativa");
    } else {
      inputs.classList.remove("invalido");
      inputs.classList.add("valido");
      campoObrigatorio[i].classList.remove("ativa");
    }
  });
});
