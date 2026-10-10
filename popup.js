const campo = document.getElementById("termo");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("form-pesquisa");
const botaoAbrir = document.getElementById("abrir");

formulario.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const termo = campo.value.trim();

  if (!termo) {
    mensagem.textContent = "Digite um termo para pesquisar.";
    campo.focus();
    return;
  }

  const url =
    "https://www.tiktok.com/search?q=" + encodeURIComponent(termo);

  try {
    await browser.tabs.create({ url });
    mensagem.textContent = "Pesquisa aberta em uma nova aba.";
  } catch (erro) {
    console.error("Erro ao abrir a pesquisa:", erro);
    mensagem.textContent =
      "Não foi possível abrir a pesquisa. Tente novamente.";
  }
});

botaoAbrir.addEventListener("click", async () => {
  try {
    await browser.tabs.create({ url: "https://www.tiktok.com/" });
    mensagem.textContent = "TikTok aberto em uma nova aba.";
  } catch (erro) {
    console.error("Erro ao abrir o TikTok:", erro);
    mensagem.textContent =
      "Não foi possível abrir o TikTok. Tente novamente.";
  }
});
