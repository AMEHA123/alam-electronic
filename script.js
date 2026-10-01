
// ================================
// عالم إلكترونيك - JavaScript
// ================================

const products = [
  {
    id: 1,
    name: "Galaxy S26 Ultra",
    category: "phones",
    categoryName: "هواتف",
    price: 499900,
    description: "هاتف قوي بكاميرا متقدمة وشاشة عالية الدقة.",
    image: "https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/1279fb2a-1c4b-5ca4-ac0d-9f370abd5b24/4cbaa4b4-65d2-5a5f-bfb2-2f048ee18613.jpg"
  },
  {
    id: 2,
    name: "iPhone 17 Pro Max",
    category: "phones",
    categoryName: "هواتف",
    price: 549900,
    description: "هاتف متطور بأداء قوي وتجربة تصوير مميزة.",
    emoji: "📱"
  },
  {
    id: 3,
    name: "Redmi Note",
    category: "phones",
    categoryName: "هواتف",
    price: 89900,
    description: "هاتف عملي مناسب للاستخدام اليومي.",
    emoji: "📱"
  },
  {
    id: 4,
    name: "لابتوب للعمل والدراسة",
    category: "laptops",
    categoryName: "لابتوبات",
    price: 329900,
    description: "أداء ممتاز وبطارية مناسبة للعمل والدراسة.",
    emoji: "💻"
  },
  {
    id: 5,
    name: "MacBook",
    category: "laptops",
    categoryName: "لابتوبات",
    price: 499900,
    description: "لابتوب أنيق للأعمال والإبداع والدراسة.",
    emoji: "💻"
  },
  {
    id: 6,
    name: "سماعات لاسلكية",
    category: "audio",
    categoryName: "صوتيات",
    price: 39900,
    description: "صوت نقي وبطارية تدوم طوال اليوم.",
    emoji: "🎧"
  },
  {
    id: 7,
    name: "سماعة Bluetooth",
    category: "audio",
    categoryName: "صوتيات",
    price: 24900,
    description: "سماعة محمولة بصوت واضح وتصميم عملي.",
    emoji: "🔊"
  },
  {
    id: 8,
    name: "شاحن سريع USB-C",
    category: "accessories",
    categoryName: "إكسسوارات",
    price: 7500,
    description: "شاحن سريع للأجهزة الحديثة.",
    emoji: "🔌"
  },
  {
    id: 9,
    name: "كابل USB-C",
    category: "accessories",
    categoryName: "إكسسوارات",
    price: 2500,
    description: "كابل عملي للشحن ونقل البيانات.",
    emoji: "🔗"
  },
  {
    id: 10,
    name: "ساعة ذكية",
    category: "watches",
    categoryName: "ساعات",
    price: 45900,
    description: "ساعة ذكية لمتابعة الإشعارات والنشاط اليومي.",
    emoji: "⌚"
  }
];

let cart = JSON.parse(localStorage.getItem("alamElectronicCart")) || [];

let currentCategory = "all";

const productsContainer =
  document.getElementById("productsContainer");

const searchInput =
  document.getElementById("searchInput");

const noResults =
  document.getElementById("noResults");

const cartPanel =
  document.getElementById("cartPanel");

const overlay =
  document.getElementById("overlay");

const cartItems =
  document.getElementById("cartItems");

const cartCount =
  document.getElementById("cartCount");

const cartTotal =
  document.getElementById("cartTotal");

const emptyCart =
  document.getElementById("emptyCart");

const checkout =
  document.getElementById("checkout");


// ================================
// تنسيق السعر
// ================================

function formatPrice(price) {
  return new Intl.NumberFormat("ar-DZ").format(price) + " دج";
}


// ================================
// عرض المنتجات
// ================================

function renderProducts() {

  const searchValue =
    searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(product => {

    const matchesCategory =
      currentCategory === "all" ||
      product.category === currentCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue) ||
      product.categoryName.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  productsContainer.innerHTML = "";

  if (filteredProducts.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  filteredProducts.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";

    let productImage = "";

    if (product.image) {

      productImage = `
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      `;

    } else {

      productImage = `
        <span class="product-emoji">
          ${product.emoji}
        </span>
      `;
    }

    card.innerHTML = `
      <div class="product-art">
        ${productImage}
      </div>

      <div class="product-info">

        <small>${product.categoryName}</small>

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <div class="product-bottom">

          <span class="price">
            ${formatPrice(product.price)}
          </span>

          <button
            class="add-button"
            data-id="${product.id}"
          >
            أضف للسلة
          </button>

        </div>

      </div>
    `;

    productsContainer.appendChild(card);
  });

  document.querySelectorAll(".add-button").forEach(button => {

    button.addEventListener("click", () => {

      const id = Number(button.dataset.id);

      addToCart(id);

    });

  });
}


// ================================
// إضافة منتج للسلة
// ================================

function addToCart(productId) {

  const existingItem =
    cart.find(item => item.id === productId);

  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: productId,
      quantity: 1
    });
  }

  saveCart();

  renderCart();

  openCart();

}


// ================================
// حفظ السلة
// ================================

function saveCart() {

  localStorage.setItem(
    "alamElectronicCart",
    JSON.stringify(cart)
  );
}


// ================================
// عرض السلة
// ================================

function renderCart() {

  cartItems.innerHTML = "";

  let total = 0;

  let totalQuantity = 0;

  if (cart.length === 0) {

    emptyCart.style.display = "block";

    cartTotal.textContent = "0 دج";

    cartCount.textContent = "0";

    checkout.disabled = true;

    checkout.style.opacity = "0.5";

    return;
  }

  emptyCart.style.display = "none";

  checkout.disabled = false;

  checkout.style.opacity = "1";

  cart.forEach(item => {

    const product =
      products.find(product => product.id === item.id);

    if (!product) return;

    const itemTotal =
      product.price * item.quantity;

    total += itemTotal;

    totalQuantity += item.quantity;

    const div =
      document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `

      <div class="cart-item-info">

        <strong>
          ${product.name}
        </strong>

        <small>
          ${formatPrice(product.price)}
        </small>

        <div class="cart-quantity">

          <button
            class="quantity-button"
            data-action="increase"
            data-id="${product.id}"
          >
            +
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            class="quantity-button"
            data-action="decrease"
            data-id="${product.id}"
          >
            −
          </button>

        </div>

      </div>

      <button
        class="remove-button"
        data-action="remove"
        data-id="${product.id}"
      >
        حذف
      </button>

    `;

    cartItems.appendChild(div);
  });

  cartTotal.textContent =
    formatPrice(total);

  cartCount.textContent =
    totalQuantity;

  document
    .querySelectorAll(".quantity-button, .remove-button")
    .forEach(button => {

      button.addEventListener("click", () => {

        const id =
          Number(button.dataset.id);

        const action =
          button.dataset.action;

        updateCart(id, action);

      });

    });
}


// ================================
// تعديل السلة
// ================================

function updateCart(productId, action) {

  const item =
    cart.find(item => item.id === productId);

  if (!item) return;

  if (action === "increase") {
    item.quantity++;
  }

  if (action === "decrease") {

    item.quantity--;

    if (item.quantity <= 0) {

      cart =
        cart.filter(item => item.id !== productId);
    }
  }

  if (action === "remove") {

    cart =
      cart.filter(item => item.id !== productId);
  }

  saveCart();

  renderCart();
}


// ================================
// فتح السلة
// ================================

function openCart() {

  cartPanel.classList.add("open");

  overlay.classList.add("show");

  document.body.classList.add("cart-open");
}


// ================================
// إغلاق السلة
// ================================

function closeCart() {

  cartPanel.classList.remove("open");

  overlay.classList.remove("show");

  document.body.classList.remove("cart-open");
}


// ================================
// أحداث السلة
// ================================

document
  .getElementById("openCart")
  .addEventListener("click", openCart);

document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);

overlay.addEventListener(
  "click",
  closeCart
);


// ================================
// البحث
// ================================

searchInput.addEventListener(
  "input",
  renderProducts
);


// ================================
// الأقسام
// ================================

document
  .querySelectorAll(".category-card")
  .forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".category-card")
        .forEach(item => {
          item.classList.remove("active");
        });

      button.classList.add("active");

      currentCategory =
        button.dataset.category;

      renderProducts();

      document
        .getElementById("products")
        .scrollIntoView({
          behavior: "smooth"
        });
    });

  });


// ================================
// إتمام الطلب عبر واتساب
// ================================

checkout.addEventListener("click", () => {

  if (cart.length === 0) return;

  let message =
    "السلام عليكم، أريد طلب المنتجات التالية:%0A%0A";

  let total = 0;

  cart.forEach(item => {

    const product =
      products.find(
        product => product.id === item.id
      );

    if (!product) return;

    const itemTotal =
      product.price * item.quantity;

    total += itemTotal;

    message +=
      `• ${product.name} × ${item.quantity} = ${formatPrice(itemTotal)}%0A`;
  });

  message +=
    `%0Aالإجمالي: ${formatPrice(total)}`;

  // استبدل الرقم برقم واتساب المتجر
  const phone =
    "213663029056";

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );

});


// ================================
// السنة الحالية
// ================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// ================================
// تشغيل الموقع
// ================================

renderProducts();

renderCart();
