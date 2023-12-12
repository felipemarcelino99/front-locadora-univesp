let users;

async function getUsers() {
  try {
    let res = await fetch(`${BASE_URL}/client`, {
      /* mode: 'no-cors', */
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
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
    await fetch(`${BASE_URL}/client/${id}`, {
      /* mode: 'no-cors', */
      method: "DELETE",
    });
    // Verificar o código de resposta, que deve ser 200 ou 204 para deletado com sucesso.
    alert("Cliente excluído com sucesso!");
  } catch (error) {
    alert("Houve um problema ao tentar excluir este cliente.");
    console.log(error);
  }
}

function populateTable(items) {
  let container = document.querySelector("#tabelaClientes");
  /* container.innerHTML == ""; */

  let html = "";
  items.forEach((item) => {
    let htmlSegment = `<tr id="${item.id}" name="${item.id}" onClick="exibirOpcoes(this);">
      <input type="hidden" name="user-${item.id}" value="${item.id}">
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

  container.innerHTML = html;
}

renderUsers();

function edit(element) {
  // Criar uma página para edição e redirecionar para ela aqui
  let selectedId = element.id;
  console.log(selectedId);
}

function remove(element) {
  /* let selectedId = element.parentNode; */
  let message = `Tem certeza de que deseja excluir este cliente?\n[${element.id}] ${element.name}`;
  if(confirm(message)){
    removeUser(element.id);
  }
  else {
    alert("Exclusão cancelada!");
  }
}

function exibirOpcoes(element) {
  let selectedId = element.parentNode;
  alert(selectedId);
}

function clearOther(element){
  let nameInput = document.getElementById("name");
  let addressInput = document.getElementById("address");

  if (element === nameInput){
    addressInput.value = "";
  }
  else{
    nameInput.value = "";
  }
}

function consultarCliente(){
  let nameInput = document.getElementById("name");
  let addressInput = document.getElementById("address");
  let search = nameInput.value ? nameInput : addressInput;
  if (!search.value){
    renderUsers();
    return;
  }
  let found;
  if (search.id === "name"){
    found = users.filter(function(item) { return item.name.includes(search.value);});
  }
  else {
    found = users.filter(function(item) { return item.address.includes(search.value);});
  }
  populateTable(found);
}