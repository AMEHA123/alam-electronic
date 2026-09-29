<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="عالم إلكترونيك - متجر عربي تجريبي للأجهزة والإكسسوارات" />
    <title>عالم إلكترونيك | متجر التقنية</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="announcement">🚚 شحن مجاني للطلبات فوق 500 ر.س — هذا متجر تجريبي</div>

    <header class="header">
      <div class="container nav">
        <a class="brand" href="#home">عالم <span>إلكترونيك</span></a>

        <button class="menu-toggle" id="menuToggle" aria-label="فتح القائمة">☰</button>

        <nav id="navLinks">
          <a href="#home">الرئيسية</a>
          <a href="#categories">الأقسام</a>
          <a href="#products">المنتجات</a>
          <a href="#articles">المقالات</a>
          <a href="#contact">تواصل</a>
        </nav>

        <div class="header-actions">
          <div class="lang-switch" aria-label="Language switcher">
            <button class="lang-btn active" data-lang="ar">AR</button>
            <button class="lang-btn" data-lang="en">EN</button>
          </div>
          <button class="cart-button" id="cartButton" aria-label="فتح السلة">
            🛒 <span id="cartCount">0</span>
          </button>
        </div>
      </div>
    </header>

    <main id="home">
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <p class="eyebrow">تقنية أفضل، اختيار أذكى</p>
            <h1>كل ما تحتاجه من عالم الإلكترونيات</h1>
            <p class="hero-text">
              اكتشف أحدث الهواتف واللابتوبات والصوتيات والإكسسوارات في واجهة عربية سريعة وسهلة الاستخدام.
            </p>
            <div class="hero-actions">
              <a class="primary-btn" href="#products">تسوّق الآن</a>
              <a class="secondary-btn" href="#articles">اقرأ المراجعات</a>
            </div>
            <div class="hero-stats">
              <div><strong>+25K</strong><span>عميل</span></div>
              <div><strong>4.9/5</strong><span>تقييم</span></div>
              <div><strong>24/7</strong><span>دعم</span></div>
            </div>
          </div>

          <div class="hero-visual" aria-hidden="true">
            <span>📱</span>
            <span>💻</span>
            <span>🎧</span>
            <span>⌚</span>
          </div>
        </div>
      </section>

      <section class="section" id="categories">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">تصفّح بسهولة</p>
              <h2>تسوّق حسب القسم</h2>
            </div>
          </div>

          <div class="categories">
            <button class="category-card active" data-filter="all">✨<strong>كل المنتجات</strong><small>جميع العروض</small></button>
            <button class="category-card" data-filter="phones">📱<strong>الهواتف</strong><small>أجهزة ذكية</small></button>
            <button class="category-card" data-filter="laptops">💻<strong>اللابتوبات</strong><small>عمل ودراسة</small></button>
            <button class="category-card" data-filter="audio">🎧<strong>الصوتيات</strong><small>سماعات ومكبرات</small></button>
          </div>
        </div>
      </section>

      <section class="section products-section" id="products">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">منتجات مختارة</p>
              <h2>الأكثر طلبًا</h2>
            </div>

            <label class="search">
              <span>⌕</span>
              <input id="searchInput" type="search" placeholder="ابحث عن منتج..." />
            </label>
          </div>

          <div class="products" id="productsGrid"></div>
        </div>
      </section>

      <section class="trust">
        <div class="container trust-grid">
          <div>🔒<strong>دفع آمن</strong><span>بوابات دفع موثوقة</span></div>
          <div>🚚<strong>توصيل سريع</strong><span>خدمة خلال 48 ساعة</span></div>
          <div>💬<strong>دعم متواصل</strong><span>فريق جاهز للإجابة</span></div>
          <div>↩️<strong>استرجاع سهل</strong><span>سياسة واضحة ومريحة</span></div>
        </div>
      </section>

      <section class="section" id="articles">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">محتوى تقني</p>
              <h2>أحدث المقالات</h2>
            </div>
          </div>

          <div class="articles">
            <article>
              <div class="article-art">📸</div>
              <div>
                <small>دليل شراء</small>
                <h3>كيف تختار هاتفًا بكاميرا ممتازة؟</h3>
                <p>تعرف على العوامل المهمة قبل شراء هاتف ذكي جديد، خاصة إن كنت تركز على جودة التصوير.</p>
              </div>
            </article>

            <article>
              <div class="article-art">💡</div>
              <div>
                <small>تجربة مستخدم</small>
                <h3>أفضل لابتوب للعمل من المنزل</h3>
                <p>مقارنة بين الأداء والراحة والبطارية والجودة عند اختيار جهاز مناسب لبيئة العمل.</p>
              </div>
            </article>

            <article>
              <div class="article-art">🎧</div>
              <div>
                <small>مراجعات</small>
                <h3>ماذا تختار: سماعات لاسلكية أم سلكية؟</h3>
                <p>نقارن بين الراحة، جودة الصوت، البطارية، وسهولة الاستخدام لتختار الأنسب لك.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section" id="contact">
        <div class="container newsletter">
          <div>
            <p class="eyebrow">ابقَ على اطلاع</p>
            <h2>اشترك في نشرتنا التقنية</h2>
            <p>احصل على أحدث العروض، مراجعات المنتجات، وفيديوهات الاختبارات أولًا.</p>
          </div>

          <form id="subscribeForm">
            <input type="email" placeholder="البريد الإلكتروني" aria-label="البريد الإلكتروني" required />
            <button type="submit" class="primary-btn">اشتراك</button>
          </form>
        </div>
      </section>
    </main>

    <aside class="cart-panel" id="cartPanel" aria-label="سلة التسوق">
      <div class="cart-head">
        <h2>سلة التسوق</h2>
        <button id="closeCart" aria-label="إغلاق السلة">×</button>
      </div>

      <div id="cartItems"></div>

      <div class="cart-footer">
        <div>
          <span>الإجمالي</span>
          <strong id="cartTotal">0 ر.س</strong>
        </div>
        <button id="checkout" class="primary-btn">إتمام الطلب</button>
      </div>
    </aside>

    <div id="overlay" aria-hidden="true"></div>
    <div class="toast" id="toast"></div>

    <footer>
      <div class="container footer-grid">
        <div>
          <a class="brand" href="#home">عالم <span>إلكترونيك</span></a>
          <p>مشروع متجر إلكتروني عربي تجريبي، جاهز للتطوير والتسويق.</p>
        </div>

        <div>
          <h3>روابط سريعة</h3>
          <ul>
            <li><a href="#products">المنتجات</a></li>
            <li><a href="#categories">الأقسام</a></li>
            <li><a href="#contact">التواصل</a></li>
          </ul>
        </div>

        <div>
          <h3>تواصل معنا</h3>
          <ul>
            <li>support@alamelectronic.com</li>
            <li>+966 11 000 0000</li>
            <li>الرياض — السعودية</li>
          </ul>
        </div>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
