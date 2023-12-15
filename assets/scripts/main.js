const BASE_URL = "https://locadora-0uhi.onrender.com";
/* const BASE_URL = "http://127.0.0.1:8080"; */

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

        mountMenuHeader();
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

function mountMenuHeader() {
  console.log(isAuthenticated);
  console.log(localStorage.getItem("auth"));
  if (isAuthenticated) {
    const listLinks = document.getElementById("listLinks");

    let liClientes = document.createElement("li");
    let linkClientes = document.createElement("a");
    linkClientes.setAttribute("href", "./../../screens/consultar-cliente/");
    linkClientes.innerText = "Clientes";
    liClientes.appendChild(linkClientes);
    listLinks.appendChild(liClientes);

    let liProdutos = document.createElement("li");
    let linkProdutos = document.createElement("a");
    linkProdutos.innerText = "Produtos";
    linkProdutos.setAttribute("href", "./../../screens/produtos/");
    liProdutos.appendChild(linkProdutos);
    listLinks.appendChild(liProdutos);

    let liLogout = document.createElement("li");
    let linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.setAttribute("href", "javascript:;");
    linkLogout.setAttribute("onclick", "logout()");
    liLogout.appendChild(linkLogout);
    listLinks.appendChild(liLogout);
  }
}
