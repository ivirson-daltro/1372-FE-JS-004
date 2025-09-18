let db;

const request = indexedDB.open("db", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("users", {
    keyPath: "id",
    autoIncrement: true,
  });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
  listUsers();
};

request.onerror = function (event) {
  console.log("Error opening database:", event.target.errorCode);
};

function addUser(name, email) {
  const transaction = db.transaction(["users"], "readwrite");
  const objectStore = transaction.objectStore("users");
  const user = { name, email };
  objectStore.add(user);

  transaction.oncomplete = function () {
    listUsers();
  };
}

function listUsers() {
  const usersList = document.getElementById("userList");
  usersList.innerHTML = "";
  const transaction = db.transaction(["users"], "readonly");
  const objectStore = transaction.objectStore("users");
  const request = objectStore.openCursor();

  request.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      const user = cursor.value;
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      usersList.appendChild(li);
      cursor.continue();
    }
  };
}

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    addUser(name, email);
    event.target.reset();
  });
