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
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<tr id="${user.id}" name="${user.id}" onClick="exibirOpcoes(this);">
      <input type="hidden" name="user-${user.id}" value="${user.id}">
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td>
        <a href="javascript:;" class="button" onClick="edit(this);">
          <image
            src="./../../assets/images/icons/edit.png"
            width="16"
            height="16"
            alt="Logo uniVHSp"
          />
        </a>
      </td>
      <td> 
        <a href="javascript:;" class="button" onClick="remove(this);">
          <image
            src="./../../assets/images/icons/remove.png"
            width="16"
            height="16"
            alt="Logo uniVHSp"
          />
        </a>
      </td>
    </tr>`;

    html += htmlSegment;
  });

  let container = document.querySelector("#tabelaClientes");
  container.innerHTML += html;
}

renderUsers();

function edit(element) {
  let selectedId = element.id;
  console.log(selectedId);
}

function remove(element) {
  let selectedId = element.parentNode;
  console.log(selectedId);
}

function exibirOpcoes(element) {
  let selectedId = element.parentNode;
  alert(selectedId);
}
