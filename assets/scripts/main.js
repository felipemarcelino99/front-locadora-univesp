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
    //  Logout
    const menuFirstLine = document.getElementById("menuFirstLine");

    let linkLogout = document.createElement("a");
    linkLogout.innerText = "Logout";
    linkLogout.setAttribute("href", "javascript:;");
    linkLogout.setAttribute("onclick", "logout()");
    linkLogout.classList.add("logout");
    menuFirstLine.appendChild(linkLogout);

    
    const listLinks = document.getElementById("listLinks");

    //  Clientes
    let liClientes = document.createElement("li");
    listLinks.appendChild(liClientes);

    let pClientes = document.createElement("p");
    pClientes.innerText = "Clientes";
    liClientes.appendChild(pClientes);
    
    let clientesOptions = document.createElement("div");
    liClientes.appendChild(clientesOptions);

    // Clientes: Consulta
    let linkConsultaCliente = document.createElement("a");
    linkConsultaCliente.innerText = "Consultar";
    linkConsultaCliente.setAttribute("href", "./../../screens/consultar-cliente/");
    linkConsultaCliente.classList.add("subitem");
    clientesOptions.appendChild(linkConsultaCliente);

    //  Clientes: Cadastra
    let linkCadastraCliente = document.createElement("a");
    linkCadastraCliente.innerHTML = "Cadastrar";
    linkCadastraCliente.setAttribute("href", "./../../screens/cadastro-cliente/");
    linkCadastraCliente.classList.add("subitem");
    clientesOptions.appendChild(linkCadastraCliente);

    //  Produtos
    let liProdutos = document.createElement("li");
    listLinks.appendChild(liProdutos);

    let pProdutos = document.createElement("p");
    pProdutos.innerText = "Produtos";
    liProdutos.appendChild(pProdutos);

    let produtosOptions = document.createElement("div");
    liProdutos.appendChild(produtosOptions);

    //  Produtos: Consulta
    let linkConsultaProduto = document.createElement("a");
    linkConsultaProduto.innerText = "Consultar";
    linkConsultaProduto.setAttribute("href", "./../../screens/consulta-produto");
    linkConsultaProduto.classList.add("subitem");
    produtosOptions.appendChild(linkConsultaProduto);

    //  Produtos: Cadastra
    let linkCadastraProduto = document.createElement("a");
    linkCadastraProduto.innerHTML = "Cadastrar";
    linkCadastraProduto.setAttribute("href", "./../../screens/cadastro-produto/");
    linkCadastraProduto.classList.add("subitem");
    produtosOptions.appendChild(linkCadastraProduto);

    //  Locação
    let liLocar = document.createElement("li");
    listLinks.appendChild(liLocar);

    let pLocar = document.createElement("p");
    pLocar.innerText = "Locação";
    liLocar.appendChild(pLocar);

    let locarOptions = document.createElement("div");
    liLocar.appendChild(locarOptions);

    //  Locação: Consulta
    let linkConsultaLocacao = document.createElement("a");
    linkConsultaLocacao.innerText = "Consultar";
    linkConsultaLocacao.setAttribute("href", "./../../screens/consulta-locacao");
    linkConsultaLocacao.classList.add("subitem");
    locarOptions.appendChild(linkConsultaLocacao);

    //  Locação: Realizar locação
    let linkRealizarLocacao = document.createElement("a");
    linkRealizarLocacao.innerHTML = "Locar";
    linkRealizarLocacao.setAttribute("href", "./../../screens/realizar-locacao/");
    linkRealizarLocacao.classList.add("subitem");
    locarOptions.appendChild(linkRealizarLocacao);
  }
}
