const BASE_URL = "https://locadora-0uhi.onrender.com";

function loadHeader() {
  fetch("./../../layout/header/index.html")
    .then((response) => response.text())
    .then((html) => {
      const headerContainer = document.getElementById("header-container");
      if (headerContainer) {
        headerContainer.innerHTML = html;

        const hamburger = document.getElementById("hamburger");
        const hideMenu = document.getElementById("hideMenu");
        if (hamburger) {
          hamburger.addEventListener("click", function (event) {
            hamburger.classList.toggle("open");
            hideMenu.classList.toggle("open");
          });
        }
      }
    })
    .catch((error) => console.error("Erro ao carregar o header:", error));
}

// Restante do seu código...

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
