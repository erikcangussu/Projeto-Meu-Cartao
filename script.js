const botaoTema = document.getElementById("theme-toggle");
const corpo = document.body;

// Recupera o tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "noturno") {
  corpo.classList.add("dark-mode");
}

// Atualiza o texto do botão
function atualizarBotao() {
  const modoNoturno = corpo.classList.contains("dark-mode");

  botaoTema.textContent = modoNoturno
    ? "☀️ Modo diurno"
    : "🌙 Modo noturno";

  botaoTema.setAttribute(
    "aria-label",
    modoNoturno ? "Ativar modo diurno" : "Ativar modo noturno"
  );
}

// Alterna o tema ao clicar
botaoTema.addEventListener("click", () => {
  corpo.classList.toggle("dark-mode");

  const temaAtual = corpo.classList.contains("dark-mode")
    ? "noturno"
    : "diurno";

  localStorage.setItem("tema", temaAtual);

  atualizarBotao();
});

atualizarBotao();
