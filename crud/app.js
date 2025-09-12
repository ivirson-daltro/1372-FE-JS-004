let produtos = [];

const tbody = document.getElementById("tableBody");
const buttonAdd = document.getElementById("buttonAdd");

// buttonAdd.addEventListener("click", openModal);

function renderTable() {
  tbody.innerHTML = "";
  if (produtos.length) {
    produtos.forEach((prod) => {
      tbody.innerHTML += `
          <tr>
              <td>${prod.name}</td>
              <td>${prod.category}</td>
              <td>${prod.price.toFixed(2)}</td>
              <td>${prod.stock}</td>
              <td>
                <button type="button" class="btn btn-outline-primary" onclick="openEditModal('${
                  prod._id
                }')">
                    Editar
                </button>
                <button type="button" class="btn btn-outline-danger" onclick="deleteProduct('${
                  prod._id
                }')">
                    Excluir
                </button>
              </td>
          </tr>`;
    });
  } else {
    tbody.innerHTML = `
          <tr>
              <td colspan="5" class="text-center">Nenhum produto cadastrado</td>
          </tr>`;
  }
}

function getProducts() {
  getAll().then((data) => {
    produtos = data;
    renderTable();
  });
}

function openEditModal(id) {
  const modalElement = document.getElementById("modal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();

  getById(id).then((product) => {
    document.getElementById("id").value = product._id;
    document.getElementById("name").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("price").value = product.price;
    document.getElementById("stock").value = product.stock;
  });
}

function onSubmitForm(event) {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const price = parseFloat(document.getElementById("price").value);
  const stock = parseInt(document.getElementById("stock").value);

  if (id) {
    updateProduct(id, { name, category, price, stock });
  } else {
    saveProduct({ name, category, price, stock });
  }
}

function saveProduct(product) {
  create(product).then(() => {
    getProducts();
    closeModal();
  });
}

function updateProduct(id, updatedProduct) {
  update(id, updatedProduct).then(() => {
    getProducts();
    closeModal();
  });
}

function deleteProduct(id) {
  remove(id).then(() => {
    getProducts();
  });
}

function closeModal() {
  const modalElement = document.getElementById("modal");
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
  clearForm();
}

function clearForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
  document.getElementById("stock").value = "";
}

getProducts();
