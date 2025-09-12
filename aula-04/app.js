let produtos = [];

const tbody = document.getElementById("tableBody");
const buttonAdd = document.getElementById("buttonAdd");

// buttonAdd.addEventListener("click", openModal);

function renderTable() {
  tbody.innerHTML = "";
  produtos.forEach((prod) => {
    tbody.innerHTML += `
        <tr>
            <td>${prod.name}</td>
            <td>${prod.category}</td>
            <td>${prod.price.toFixed(2)}</td>
            <td>${prod.stock}</td>
            <td>
            <button type="button" class="btn btn-outline-primary" onclick="openEditModal('${
              prod.id
            }')">
                Editar
            </button>
            <button type="button" class="btn btn-outline-danger" onclick="deleteProduct('${
              prod.id
            }')">
                Excluir
            </button>
            </td>
        </tr>`;
  });
}

// function openModal() {
//   const modalElement = document.getElementById("modal");
//   const modal = new bootstrap.Modal.getOrCreateInstance(modalElement);
//   modal.show();
// }

function saveProducts() {
  localStorage.setItem("produtos", JSON.stringify(produtos));
  renderTable();
}

function getProducts() {
  produtosFromLocalStorage = JSON.parse(localStorage.getItem("produtos"));
  if (produtosFromLocalStorage && produtosFromLocalStorage.length > 0) {
    produtos = produtosFromLocalStorage;
  } else {
    produtos = sampleData();
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }
  renderTable();
}

function sampleData() {
  return [
    {
      id: genId(),
      name: "Camiseta Básica",
      category: "Vestuário",
      price: 29.99,
      stock: 100,
      image: "",
    },
    {
      id: genId(),
      name: "Calça Jeans",
      category: "Vestuário",
      price: 89.99,
      stock: 50,
      image: "",
    },
    {
      id: genId(),
      name: "Tênis Esportivo",
      category: "Calçados",
      price: 700,
      stock: 30,
      image: "",
    },
  ];
}

function deleteProduct(id) {
  const index = produtos.findIndex((prod) => prod.id === id);
  produtos.splice(index, 1);
  saveProducts();
}

function openEditModal(id) {
  const modalElement = document.getElementById("modal");
  const modal = new bootstrap.Modal(modalElement);
  modal.show();

  const product = produtos.find((prod) => prod.id === id);
  if (product) {
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("category").value = product.category;
    document.getElementById("price").value = product.price;
    document.getElementById("stock").value = product.stock;
  }
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
  produtos.push({
    id: genId(),
    ...product,
  });

  saveProducts();
  closeModal();
}

function updateProduct(id, updatedProduct) {
  const index = produtos.findIndex((prod) => prod.id === id);
  if (index !== -1) {
    produtos[index] = { ...produtos[index], ...updatedProduct };
    saveProducts();
  }
  closeModal();
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
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
