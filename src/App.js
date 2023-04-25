const products = [
  {
    id: 1,
    name: "Paracetamol",
    description: "Medicamento para aliviar el dolor y la fiebre",
    price: 10.99,
    image: "https://dummyimage.com/300x300/000/fff&text=Paracetamol",
  },
  {
    id: 2,
    name: "Ibuprofeno",
    description: "Medicamento para aliviar el dolor, la inflamación y la fiebre",
    price: 12.99,
    image: "https://dummyimage.com/300x300/000/fff&text=Ibuprofeno",
  },
  {
    id: 3,
    name: "Aspirina",
    description: "Medicamento para aliviar el dolor, la inflamación y la fiebre",
    price: 8.99,
    image: "https://dummyimage.com/300x300/000/fff&text=Aspirina",
  },
  {
    id: 4,
    name: "Amoxicilina",
    description: "Antibiótico para tratar infecciones bacterianas",
    price: 14.99,
    image: "https://dummyimage.com/300x300/000/fff&text=Amoxicilina",
  },
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-description">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      </div>
    `;
    productList.appendChild(productElement);
  });
}

function addToCart(productId) {
  const productToAdd = products.find((product) => product.id === productId);
  cart.push(productToAdd);
  renderCart();
}

function removeFromCart(productId) {
  const productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex >= 0) {
    cart.splice(productIndex, 1);
  }
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach((product) => {
    const productElement = document.createElement("li");
    productElement.innerHTML = `
      <div class="product-description">
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${product.id})">Eliminar</button>
      </div>
    `;
    cartList.appendChild(productElement);
  });
}

renderProducts();
