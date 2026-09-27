const products=[
 {id:1,name:'هاتف ذكي Pro Max',price:3499,old:3799,category:'phones',icon:'📱'},
 {id:2,name:'لابتوب أداء احترافي 15 بوصة',price:4999,category:'laptops',icon:'💻'},
 {id:3,name:'سماعات لاسلكية بعزل الضوضاء',price:399,old:499,category:'audio',icon:'🎧'},
 {id:4,name:'هاتف اقتصادي ببطارية قوية',price:899,category:'phones',icon:'📲'},
 {id:5,name:'لابتوب خفيف للدراسة والعمل',price:2799,category:'laptops',icon:'🖥️'},
 {id:6,name:'مكبر صوت محمول',price:249,category:'audio',icon:'🔊'},
 {id:7,name:'ساعة ذكية لمتابعة الصحة',price:649,category:'phones',icon:'⌚'},
 {id:8,name:'لوحة مفاتيح لاسلكية',price:189,category:'laptops',icon:'⌨️'}
];
let cart=JSON.parse(localStorage.getItem('alamCart')||'[]');let current='all';
const grid=document.querySelector('#productsGrid'),count=document.querySelector('#cartCount'),items=document.querySelector('#cartItems'),total=document.querySelector('#cartTotal');
const money=n=>new Intl.NumberFormat('ar-SA').format(n)+' ر.س';
function renderProducts(){const q=document.querySelector('#searchInput').value.trim();const list=products.filter(p=>(current==='all'||p.category===current)&&p.name.includes(q));grid.innerHTML=list.map(p=>`<article class="product"><div class="product-art">${p.icon}</div><div class="product-info"><span class="badge">متوفر الآن</span><h3>${p.name}</h3><p class="price">${money(p.price)} ${p.old?`<span class="old-price">${money(p.old)}</span>`:''}</p><button class="add-btn" data-id="${p.id}">أضف إلى السلة</button></div></article>`).join('')||'<p>لا توجد منتجات مطابقة لبحثك.</p>';document.querySelectorAll('.add-btn').forEach(b=>b.onclick=()=>add(+b.dataset.id))}
function add(id){cart.push(products.find(p=>p.id===id));save();toast('تمت إضافة المنتج إلى السلة')}
function save(){localStorage.setItem('alamCart',JSON.stringify(cart));count.textContent=cart.length;renderCart()}
function renderCart(){if(!cart.length){items.innerHTML='<p>السلة فارغة حاليًا.</p>';total.textContent='0 ر.س';return}items.innerHTML=cart.map((p,i)=>`<div class="cart-item"><span>${p.icon} ${p.name}<br><strong>${money(p.price)}</strong></span><button onclick="removeItem(${i})">حذف</button></div>`).join('');total.textContent=money(cart.reduce((s,p)=>s+p.price,0))}
function removeItem(i){cart.splice(i,1);save()};window.removeItem=removeItem;
function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2400)}
document.querySelectorAll('.category-card').forEach(b=>b.onclick=()=>{current=b.dataset.filter;document.querySelectorAll('.category-card').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts();document.querySelector('#products').scrollIntoView({behavior:'smooth'})});
document.querySelector('#searchInput').oninput=renderProducts;
const panel=document.querySelector('#cartPanel'),overlay=document.querySelector('#overlay');document.querySelector('#cartButton').onclick=()=>{panel.classList.add('open');overlay.classList.add('show')};function close(){panel.classList.remove('open');overlay.classList.remove('show')}document.querySelector('#closeCart').onclick=close;overlay.onclick=close;document.querySelector('#menuToggle').onclick=()=>document.querySelector('#navLinks').classList.toggle('open');document.querySelector('#subscribeForm').onsubmit=e=>{e.preventDefault();e.target.reset();toast('تم الاشتراك بنجاح — شكرًا لك!')};document.querySelector('#checkout').onclick=()=>toast(cart.length?'هذه نسخة تجريبية: أضف بوابة دفع لإتمام الطلبات.':'أضف منتجًا إلى السلة أولًا.');renderProducts();save();
