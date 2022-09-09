// Seleção
const form = document.getElementById("form");
const input = document.querySelectorAll(".campo");

// eventos
form.addEventListener("submit", (e) => {
  e.preventDefault();

  input.forEach(campo => {
    if (campo.value.trim() === "") {
      campo.parentElement.classList.add("erro");
    } else {
      campo.parentElement.classList.remove("erro");
    }
  });
});

input.forEach(campo => {
  campo.addEventListener("change", () => {
    if(campo.parentElement.classList.contains("erro")) {
      campo.parentElement.classList.remove("erro");
    }

    if(campo.value.trim() !== "") {
      campo.parentElement.classList.add("sucesso");
    } else {
      campo.parentElement.classList.remove("sucesso");
    }
  });
});
