// Datos de los productos
const products = [
  {
    id: 1,
    name: "Ibuprofeno",
    description: "Alivia el dolor y la inflamación.",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/41Yxb7A7mRL._QL92_SH45_SS200_.jpg",
  },
  {
    id: 2,
    name: "Paracetamol",
    description: "Reduce la fiebre y alivia el dolor.",
    price: 95.00,
    image: "https://lafedar.com/wp-content/uploads/2022/09/paracetamol-lafedar-200x200.jpg",
  },
{
    id: 3,
    name: "Aderogyl",
    description: "Ayuda a la prevención y tratamiento de la gripa.",
    price: 170.00,
    image: "https://images-na.ssl-images-amazon.com/images/I/7142SBlhsnL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 4,
    name: "Tabcin Active",
    description: "alivio a los síntomas del resfriado común.",
    price: 60.00,
    image: "https://cdn.quicksell.co/-MQ2mIdNkaCHMuwz5vti/products_200/-MR6M0mW0VkUaspTSnaG.jpg",
  },
  {
    id: 5,
    name: "Aspirina 500mg",
    description: "Alivia el dolor de cabeza,fiebre y reumatismo.",
    price: 24.99,
    image: "https://farmahope.it/178-large_default/aspirina-dolor-e-inflamacion-500mg-acido-acetilsalicilico-20-comprimidos.jpg",
  },
  {
    id: 6,
    name: "Neogen prueba rápida SARS-COV2 AG",
    description: "Prueba rápida para la detección de SARS-CoV-2.",
    price: 158.00,
    image: "https://www.fahorro.com/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/7/5/7501657901229_1.png",
  },
  {
    id: 7,
    name: "Vick Pyrena Antigripal Sabor Manzanilla 5 sobres",
    description: "té antigripal que alivia los síntomas asociados al resfriado como la congestión nasal, el dolor de cabeza, la fiebre, dolor de garganta y los dolores corporales.",
    price: 99.99,
    image: "https://www.fahorro.com/media/catalog/product/cache/2765542505660baab28ecd555e27366e/7/5/7506195102640_5.jpg",
  },
  {
    id: 7,
    name: "Amlodipino",
    description: "Reduce la presión arterial al relajar los vasos sanguíneos para que el corazón no tenga que bombear tan fuerte.",
    price: 90.00,
    image: "https://colsubsidio.vteximg.com.br/arquivos/ids/159114-200-200/7706569021588.jpg?v=637108478144200000",
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