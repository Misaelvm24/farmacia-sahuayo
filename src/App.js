// Datos de los productos
const products = [
  {
    id: 1,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 2,
    name: "Paracetamol",
    description: "Reduce la fiebre y alivia el dolor.",
    price: 8.99,
    image: "https://via.placeholder.com/200x200",
  },
{
    id: 3,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 4,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 5,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 6,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 7,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 7,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 10.99,
    image: "https://via.placeholder.com/200x200",
  },
];

// Variables globales
const cart = [];

// Función para mostrar los productos en la pantalla
function renderProducts() {
  const productsSection = document.querySelector(".products");
  productsSection.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Precio: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;
    productsSection.appendChild(productElement);
  }
}

// Función para agregar un producto al carrito
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

// Función para mostrar el carrito en la pantalla
function renderCart() {
  const cartSection = document.querySelector(".cart");
  cartSection.innerHTML = `
    <h2>Carrito de compras</h2>
    <ul>
      ${cart
        .map(
          (product) => `
            <li>
              <strong>${product.name}</strong> - $${product.price}
            </li>
          `
        )
        .join("")}
    </ul>
    <p>Total: $${cart.reduce((acc, product) => acc + product.price, 0)}</p>
    <button onclick="checkout()">Pagar</button>
  `;
}

// Función para procesar el pago
function checkout() {
  // Aquí iría el código para procesar el pago en línea
  alert("Pago realizado con éxito");
  cart.length = 0;
  renderCart();
}

// Mostrar los productos en la pantalla al cargar la página
renderProducts();