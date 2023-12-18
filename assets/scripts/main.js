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

    //  Clientes
    let liClientes = document.createElement("li");
    let ulClientes = document.createElement("ul");
    liClientes.innerText = "Clientes";
    listLinks.appendChild(liClientes);
    liClientes.appendChild(ulClientes);

    let consultaCliente = document.createElement("li");
    let linkConsultaCliente = document.createElement("a");
    linkConsultaCliente.setAttribute("href", "./../../screens/consultar-cliente/");
    ulClientes.appendChild(consultaCliente);
    consultaCliente.appendChild(linkConsultaCliente);
    linkConsultaCliente.innerText = "Consultar";

    let cadastraCliente = document.createElement("li");
    let linkCadastraCliente = document.createElement("a");
    linkCadastraCliente.setAttribute("href", "./../../screens/cadastro-cliente/");
    ulClientes.appendChild(cadastraCliente);
    cadastraCliente.appendChild(linkCadastraCliente);
    linkCadastraCliente.innerHTML = "Cadastrar";

    //Produtos
    let liProdutos = document.createElement("li");
    let ulProdutos = document.createElement("ul");
    liProdutos.innerText = "Produtos";
    listLinks.appendChild(liProdutos);
    liProdutos.appendChild(ulProdutos);

    let consultaProduto = document.createElement("li");
    let linkConsultaProduto = document.createElement("a");
    linkConsultaProduto.setAttribute("href", "./../../screens/consulta-produto");
    ulProdutos.appendChild(consultaProduto);
    consultaProduto.appendChild(linkConsultaProduto);
    linkConsultaProduto.innerText = "Consultar";

    let cadastraProduto = document.createElement("li");
    let linkCadastraProduto = document.createElement("a");
    linkCadastraProduto.setAttribute("href", "./../../screens/cadastro-produto/");
    ulProdutos.appendChild(cadastraProduto);
    cadastraProduto.appendChild(linkCadastraProduto);
    linkCadastraProduto.innerHTML = "Cadastrar";

    //Locação
    let liLocar = document.createElement("li");
    let ulLocar = document.createElement("ul");
    liLocar.innerText = "Locação";
    listLinks.appendChild(liLocar);
    liLocar.appendChild(ulLocar);

    let consultaLocacao = document.createElement("li");
    let linkConsultaLocacao = document.createElement("a");
    linkConsultaLocacao.setAttribute("href", "./../../screens/consulta-locacao");
    ulLocar.appendChild(consultaLocacao);
    consultaLocacao.appendChild(linkConsultaLocacao);
    linkConsultaLocacao.innerText = "Consultar";

    let realizarLocacao = document.createElement("li");
    let linkRealizarLocacao = document.createElement("a");
    linkRealizarLocacao.setAttribute("href", "./../../screens/realizar-locacao/");
    ulLocar.appendChild(realizarLocacao);
    realizarLocacao.appendChild(linkRealizarLocacao);
    linkRealizarLocacao.innerHTML = "Locar";

    //Logout
    let liLogout = document.createElement("li");
    let linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.setAttribute("href", "javascript:;");
    linkLogout.setAttribute("onclick", "logout()");
    liLogout.appendChild(linkLogout);
    listLinks.appendChild(liLogout);
  }
}
