let users;
let tabelaClientes = document.querySelector("#tabelaClientes");
let tabelaClientesHeader = tabelaClientes.innerHTML;

async function getUsers() {
  try {
   const clientes = await getRequest(`${BASE_URL}/client`);
   if (clientes.status == 200){
    return clientes.data;
   }
   else{
    alert("Houve um problema ao carregar os clientes!");
   }
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  users = await getUsers();
  populateTable(users);
}

async function removeUser(id) {

  try {
    let deleteClient = await deleteRequest(`${BASE_URL}/client/${id}`);
    if (deleteClient.status == 204) {
      alert("Cliente excluído com sucesso!");
      renderUsers();
    }
    else{
      alert("Houve um problema ao tentar excluir este cliente.");
    }
   } catch (error) {
    alert("Houve um problema ao tentar excluir este cliente.");
   }
}

async function populateTable(items) {
  let html = "";
  await items.forEach((item) => {
    let htmlSegment = `<tr id="${item.id}" name="${item.name}" age="${item.age}" address="${item.address}">
      <input type="hidden" name="user-${item.name}" id="user-${item.id}" value="${item.id}">
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.address}</td>
      <td>
        <a href="javascript:;" class="button" onClick="edit(this);">
          <image
            src="./../../assets/images/icons/edit.png"
            width="16"
            height="16"
            alt="Edit"
          />
        </a>
      </td>
      <td> 
        <a href="javascript:;" class="button" onClick="remove(this);">
          <image
            src="./../../assets/images/icons/remove.png"
            width="16"
            height="16"
            alt="Remove"
          />
        </a>
      </td>
    </tr>`;

    html += htmlSegment;
  });
  if (html) {
    tabelaClientes.innerHTML = tabelaClientesHeader + html;
  } else {
    alert("Cliente não encontrado!");
    tabelaClientes.innerHTML = "<tr>Cliente não encontrado!</tr>";
  }
}

renderUsers();

function edit(element) {
  //Pega a linha da tabela a partir do botão editar que foi clicado:
  let selectedRow = element.parentNode.parentNode;
  window.location.replace(`../altera-cliente/index.html?id=${selectedRow.id}`);
}

function remove(element) {
  let selectedElement = element.parentNode.parentNode;
  let message = `Tem certeza de que deseja excluir este cliente?\n${selectedElement.getAttribute(
    "name"
  )} [id: ${selectedElement.id}]`;
  if (confirm(message)) {
    removeUser(selectedElement.id);
  } else {
    alert("Exclusão cancelada!");
  }
}

function clearOther(element) {
  let nameInput = document.getElementById("name");
  let addressInput = document.getElementById("address");

  if (element === nameInput) {
    addressInput.value = "";
  } else {
    nameInput.value = "";
  }
}

function consultarCliente() {
  let nameInput = document.getElementById("name");
  let addressInput = document.getElementById("address");
  let search = nameInput.value ? nameInput : addressInput;
  if (!search.value) {
    renderUsers();
    return;
  }
  let found;
  if (search.id === "name") {
    found = users.filter(function (item) {
      return item.name.includes(search.value);
    });
  } else {
    found = users.filter(function (item) {
      return item.address.includes(search.value);
    });
  }
  populateTable(found);
}
