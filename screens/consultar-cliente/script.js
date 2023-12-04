async function getUsers() {
  try {
      let res = await fetch(`${BASE_URL}/client`, {
        /* mode: 'no-cors', */
        method: "GET",
        headers: {
             "Content-Type": "application/json"
        }});
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(user => {
    let htmlSegment = `<tr>
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
    </tr>`;

      html += htmlSegment;
  });

  let container = document.querySelector('#tabelaClientes');
  container.innerHTML = html;
}

renderUsers();