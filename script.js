
const products = [
  {
    id: 1,
    name: 'Samsung Galaxy S26 Ultra',
    price: 4499,
    old: 4799,
    category: 'phones',
    icon: '📱',
    image: 'images/galaxy-s26-ultra.jpg'
  },
  {
    id: 2,
    name: 'iPhone 17 Pro',
    price: 4699,
    old: 4999,
    category: 'phones',
    icon: '📱'
  },
  {
    id: 3,
    name: 'لابتوب HP 15 للدراسة والعمل',
    price: 2499,
    old: 2799,
    category: 'laptops',
    icon: '💻'
  },
  {
    id: 4,
    name: 'لابتوب Lenovo IdeaPad',
    price: 2299,
    category: 'laptops',
    icon: '🖥️'
  },
  {
    id: 5,
    name: 'سماعات بلوتوث لاسلكية',
    price: 199,
    old: 249,
    category: 'audio',
    icon: '🎧'
  },
  {
    id: 6,
    name: 'مكبر صوت بلوتوث محمول',
    price: 159,
    category: 'audio',
    icon: '🔊'
  },
  {
    id: 7,
    name: 'ساعة ذكية رياضية',
    price: 299,
    old: 349,
    category: 'phones',
    icon: '⌚'
  },
  {
    id: 8,
    name: 'لوحة مفاتيح وماوس لاسلكيان',
    price: 129,
    category: 'laptops',
    icon: '⌨️'
  }
];

let cart = JSON.parse(localStorage.getItem('alamCart') || '[]');
let currentCategory = 'all';

const grid = document.querySelector('#productsGrid');
const count = document.querySelector('#cartCount');
const items = document.querySelector('#cartItems');
const total = document.querySelector('#cartTotal');

function formatPrice(price) {
  return new Intl.NumberFormat('ar-SA').format(price) + ' ر.س';
}

function renderProducts() {
  const searchBox = document.querySelector('#searchInput');
  const query = searchBox ? searchBox.value.trim() : '';

  const visibleProducts = products.filter(function (product) {
    const categoryMatches =
      currentCategory === 'all' || product.category === currentCategory;

    const searchMatches = product.name.includes(query);

    return categoryMatches && searchMatches;
  });

  if (visibleProducts.length === 0) {
    grid.innerHTML = '<p>لا توجد منتجات مطابقة لبحثك.</p>';
    return;
  }

  grid.innerHTML = visibleProducts.map(function (product) {
    const oldPrice = product.old
      ? '<span class="old-price">' + formatPrice(product.old) + '</span>'
      : '';

    return `
      <article class="product">
        <div class="product-art">
          ${
            product.image
              ? `<img src="${product.image}" alt="${product.name}">`
              : product.icon
          }
        </div>
        <div class="product-info">
          <span class="badge">متوفر الآن</span>
          <h3>${product.name}</h3>
          <p class="price">
            ${formatPrice(product.price)}
            ${oldPrice}
          </p>
          <button class="add-btn" data-id="${product.id}">
            أضف إلى السلة
          </button>
        </div>
      </article>
    `;
  }).join('');

  document.querySelectorAll('.add-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      addToCart(Number(button.dataset.id));
    });
  });
}

function addToCart(id) {
  const product = products.find(function (item) {
    return item.id === id;
  });

  if (!product) return;

  cart.push(product);
  saveCart();
  showToast('تمت إضافة المنتج إلى السلة');
}

function saveCart() {
  localStorage.setItem('alamCart', JSON.stringify(cart));
  count.textContent = cart.length;
  renderCart();
}

function renderCart() {
  if (cart.length === 0) {
    items.innerHTML = '<p>السلة فارغة حاليًا.</p>';
    total.textContent = '0 ر.س';
    return;
  }

  items.innerHTML = cart.map(function (product, index) {
    return `
      <div class="cart-item">
        <span>
          ${product.icon} ${product.name}
          <br>
          <strong>${formatPrice(product.price)}</strong>
        </span>
        <button onclick="removeItem(${index})">حذف</button>
      </div>
    `;
  }).join('');

  const fullTotal = cart.reduce(function (sum, product) {
    return sum + product.price;
  }, 0);

  total.textContent = formatPrice(fullTotal);
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

window.removeItem = removeItem;

function showToast(message) {
  const toast = document.querySelector('#toast');

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(function () {
    toast.classList.remove('show');
  }, 2400);
}

document.querySelectorAll('.category-card').forEach(function (button) {
  button.addEventListener('click', function () {
    currentCategory = button.dataset.filter;

    document.querySelectorAll('.category-card').forEach(function (card) {
      card.classList.remove('active');
    });

    button.classList.add('active');
    renderProducts();

    document.querySelector('#products').scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelector('#searchInput').addEventListener('input', renderProducts);

const panel = document.querySelector('#cartPanel');
const overlay = document.querySelector('#overlay');

document.querySelector('#cartButton').addEventListener('click', function () {
  panel.classList.add('open');
  overlay.classList.add('show');
});

function closeCart() {
  panel.classList.remove('open');
  overlay.classList.remove('show');
}

document.querySelector('#closeCart').addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

document.querySelector('#menuToggle').addEventListener('click', function () {
  document.querySelector('#navLinks').classList.toggle('open');
});

document.querySelector('#subscribeForm').addEventListener('submit', function (event) {
  event.preventDefault();
  event.target.reset();
  showToast('تم الاشتراك بنجاح — شكرًا لك!');
});

document.querySelector('#checkout').addEventListener('click', function () {
  if (cart.length === 0) {
    showToast('أضف منتجًا إلى السلة أولًا.');
  } else {
    showToast('هذه نسخة تجريبية: أضف بوابة دفع لإتمام الطلبات.');
  }
});

.product-art img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: inherit;
}
renderProducts();
saveCart();
