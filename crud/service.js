const apiUrl =
  "https://crudcrud.com/api/64a621c16cfe49a396bf41ee839e75c1/products";

async function create(product) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error creating product:", error));
}

async function getAll() {
  return fetch(apiUrl, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching products:", error));
}

async function getById(id) {
  return fetch(`${apiUrl}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching product:", error));
}

async function update(id, updatedProduct) {
  return fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  })
    .then(() => console.log("Product updated successfully"))
    .catch((error) => console.error("Error updating product:", error));
}

async function remove(id) {
  return fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then(() => console.log("Product deleted successfully"))
    .catch((error) => console.error("Error deleting product:", error));
}
