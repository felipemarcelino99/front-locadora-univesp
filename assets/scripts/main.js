// loadLayout.js

function loadHeader() {
  fetch("./../../layout/header/index.html") // Altere o caminho conforme a estrutura do seu projeto
    .then((response) => response.text())
    .then((html) => {
      const headerContainer = document.getElementById("header-container");
      if (headerContainer) {
        headerContainer.innerHTML = html;
      }
    })
    .catch((error) => console.error("Erro ao carregar o header:", error));
}

function loadFooter() {
  fetch("./../../layout/footer/index.html") // Altere o caminho conforme a estrutura do seu projeto
    .then((response) => response.text())
    .then((html) => {
      const footerContainer = document.getElementById("footer-container");
      if (footerContainer) {
        footerContainer.innerHTML = html;
      }
    })
    .catch((error) => console.error("Erro ao carregar o footer:", error));
}

// Chamar as funções para carregar o header e o footer
loadHeader();
loadFooter();
