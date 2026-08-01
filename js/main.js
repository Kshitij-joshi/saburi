/* ==========================================================================
   Saburi - Luxury Gifting Portfolio (Dynamic Category Filters, Hero Slideshow & WhatsApp Integration)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Complete 12-Item Work Portfolio Catalog ---
  const hampersCatalog = [
    {
      id: 'choora-bridal',
      title: "Jagriti's Choora Ceremony Hamper",
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'BESTSELLER',
      badgeType: '',
      img: 'assets/images/choora_bridal_hamper.jpg',
      shortDesc: 'Royal red velvet bridal hamper with embroidered drapes, gold brass kaleere & floral garlands.',
      fullDesc: 'An opulent royal trousseau centerpiece designed for Jagriti\'s Choora Ceremony. Hand-crafted with sequined red velvet drapes, golden pillars, dangling brass kaleere, silk flower garlands, and a velvet bangle bar.',
      materials: ['Red Velvet Curtains', 'Zardosi Sequin Work', 'Handcrafted Brass Kaleere', 'Floral Garlands', 'Bangle Bar']
    },
    {
      id: 'peacock-platter',
      title: 'Peacock Royale Engagement Ring Platter',
      category: 'rings',
      categoryLabel: 'Engagement Platters',
      badge: 'ROYAL EDITION',
      badgeType: 'royal',
      img: 'assets/images/peacock_ring_platter.jpg',
      shortDesc: 'Exquisite teal velvet ring thali decorated with real peacock feathers & royal blue cushions.',
      fullDesc: 'Designed for a grand engagement ceremony, this platter features authentic peacock feather fans, hand-embroidered royal blue brocade ring cushions with pearl accents, and golden lace work on rich teal velvet.',
      materials: ['Natural Peacock Feathers', 'Teal & Royal Blue Velvet', 'Golden Lace Work', 'Pearl Beads', 'Peony Crest']
    },
    {
      id: 'moon-ring-display',
      title: 'Celestial Floral Moon Ring Display',
      category: 'rings',
      categoryLabel: 'Engagement Platters',
      badge: 'TRENDING',
      badgeType: '',
      img: 'assets/images/moon_ring_display.jpg',
      shortDesc: 'Personalized ring holder with warm fairy-lit floral moon arch & custom gold acrylic stand.',
      fullDesc: 'A celestial engagement ring display crafted for Srishti & Kunal. Features an illuminated crescent moon arch, custom gold acrylic name stand, dried pink baby\'s breath, and natural burlap pedestals on a rustic wood slice.',
      materials: ['Warm Micro Fairy Lights', 'Custom Gold Acrylic Stand', 'Dried Baby\'s Breath', 'Seashell Accents', 'Polished Wood Base']
    },
    {
      id: 'saree-tray',
      title: 'Royal Wedding Silk Saree Tray',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'FEATURED',
      badgeType: 'royal',
      img: 'assets/images/saree_tray.png',
      shortDesc: 'Luxury wedding saree trousseau packing tray with gold lace border, silk fabric & fresh orchids.',
      fullDesc: 'A regal trousseau presentation tray designed for wedding sarees and bridal couture. Crafted with gold lace borders, rich pink silk lining, pearl strands, and fresh floral garland accents.',
      materials: ['Pink Silk Fabric', 'Gold Lace Border', 'Fresh Orchids', 'Pearl Strands', 'Organza Wrap']
    },
    {
      id: 'trousseau-trunk',
      title: 'Maharani Velvet Trousseau Trunk',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'HANDCRAFTED',
      badgeType: 'royal',
      img: 'assets/images/trousseau_trunk.png',
      shortDesc: 'Ornate bridal trousseau trunk wrapped in deep red velvet, gold zari embroidery & fresh roses.',
      fullDesc: 'A grand bridal gift chest crafted for royal trousseau presentations. Featuring rich crimson velvet lining, heavy gold embroidery, pearl tassel handles, and velvet compartments for bridal jewelry and couture.',
      materials: ['Crimson Velvet Trunk', 'Gold Zari Embroidery', 'Pearl Tassels', 'Silk Lining', 'Rose Decor']
    },
    {
      id: 'gold-ring-platter',
      title: 'Grand Gold & Pearl Ring Platter',
      category: 'rings',
      categoryLabel: 'Engagement Platters',
      badge: 'EXCLUSIVE',
      badgeType: 'royal',
      img: 'assets/images/gold_ring_platter.png',
      shortDesc: 'Grand gold & ivory wedding ring platter with velvet ring box, golden leaves & fairy lights.',
      fullDesc: 'A luxurious engagement ring platter featuring intricate golden leaf carving, velvet ring box, pearl trim, and warm ambient fairy lighting for a royal ring exchange.',
      materials: ['Gold Leaf Metalwork', 'Velvet Ring Box', 'Pearl Trim', 'Fairy Lights', 'Ivory Silk Base']
    },
    {
      id: 'krishna-singhasan',
      title: 'Krishna Royal Blue Velvet Singhasan',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'FESTIVE SPECIAL',
      badgeType: 'royal',
      img: 'assets/images/krishna_singhasan.jpg',
      shortDesc: 'Grand divine thali with pearl-encrusted royal blue velvet seating & peacock crown backdrop.',
      fullDesc: 'A divine presentation platter tailored for festive poojas, Janmashtami, or bridal divine gifts. Features a pearl-bordered royal blue velvet elevated singhasan, golden peacock backrests, and brass sweets placement.',
      materials: ['Pearl Bead Fringe', 'Royal Blue Velvet', 'Golden Peacock Motif', 'Diya Holders', 'Radha Krishna Artwork']
    },
    {
      id: 'festive-hamper',
      title: 'Imperial Festive & Diwali Thali',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'POPULAR',
      badgeType: '',
      img: 'assets/images/festive_hamper.png',
      shortDesc: 'Royal Indian festive hamper with brass thali, gold brocade dry fruit jars & glowing brass diyas.',
      fullDesc: 'Designed for high-profile festive celebrations, featuring handcrafted brass thalis, velvet-lined dry fruit containers, fresh marigold arrangements, and traditional brass oil lamps.',
      materials: ['Handcarved Brass Thali', 'Gold Brocade Boxes', 'Dry Fruit Jars', 'Brass Diyas', 'Marigold Accents']
    },
    {
      id: 'sweet-thali',
      title: 'Gourmet Silver & Gold Sweet Thali',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'ROYAL EDITION',
      badgeType: 'royal',
      img: 'assets/images/sweet_thali.png',
      shortDesc: 'Royal Indian festive sweets thali with gold foil sweets, silver leaf dry fruits & glowing lamp.',
      fullDesc: 'An opulent sweets and dry fruit platter presented in velvet jars with gold leaf embellishments, silver foil mithai placement, and antique brass candleholders.',
      materials: ['Brass Presentation Plate', 'Velvet Jars', 'Silver Foil Accents', 'Gold Leaves', 'Diya Stand']
    },
    {
      id: 'baby-house-hamper',
      title: 'Little Dreamer Baby House Hamper',
      category: 'baby',
      categoryLabel: 'Baby Welcome',
      badge: 'NEW ARRIVAL',
      badgeType: '',
      img: 'assets/images/baby_hamper.jpg',
      shortDesc: 'Custom teal wooden house display packed with baby clothing wardrobe, plush toys & Aveeno skincare.',
      fullDesc: 'A whimsical baby welcome house tray designed to showcase newborn essentials. Features a custom painted teal wooden house structure with a mini clothing hanger bar, plush teddy bear on a swing, elephant snuggle blanket, and Aveeno baby care products.',
      materials: ['Custom Wooden House Frame', 'Plush Teddy & Elephant Toys', 'Aveeno Skincare Suite', 'Infant Clothing Hangers', 'Sunflower Accents']
    },
    {
      id: 'baby-basket',
      title: 'Pastel Dreams Baby Shower Basket',
      category: 'baby',
      categoryLabel: 'Baby Welcome',
      badge: 'POPULAR',
      badgeType: '',
      img: 'assets/images/baby_basket.png',
      shortDesc: 'Adorable baby shower gift hamper basket with plush teddy bear, booties & white flowers.',
      fullDesc: 'A delicate pastel baby shower gift hamper containing hand-knitted baby booties, plush teddy bear, soft cotton swaddle wraps, and fresh floral accents in a wicker basket.',
      materials: ['Wicker Gift Basket', 'Plush Teddy Bear', 'Hand-knitted Booties', 'Cotton Swaddles', 'White Rose Decor']
    },
    {
      id: 'corporate-hamper',
      title: 'Royal Executive Corporate Suite',
      category: 'corporate',
      categoryLabel: 'Corporate & Milestone',
      badge: 'EXECUTIVE',
      badgeType: 'royal',
      img: 'assets/images/corporate_hamper.png',
      shortDesc: 'Luxury corporate gift box with gold ribbon, leather journal, artisanal treats & brass candle.',
      fullDesc: 'Designed for VIP corporate gifting, client appreciation, and executive milestones. Features a custom monogrammed matte black gift chest, gold foil branding, handcrafted candle, and gourmet chocolates.',
      materials: ['Custom Matte Gift Box', 'Leather Journal', 'Gold Foil Monogram', 'Hand-poured Brass Candle', 'Artisanal Chocolates']
    }
  ];

  // --- Dynamic WhatsApp Generator Function ---
  window.inquireOnWhatsApp = function(productTitle, categoryLabel) {
    const cleanTitle = productTitle || 'Bespoke Hamper Design';
    const cleanCategory = categoryLabel || 'Custom Order';
    const message = `Hello *Saburi Bespoke Studio*, I am interested in inquiring about your design: *${cleanTitle}* (${cleanCategory}).%0A%0APlease share customization details, availability, and event booking options for my upcoming celebration!`;
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // --- Render Portfolio Grid ---
  const galleryGrid = document.getElementById('portfolioGrid');
  let currentCategory = 'all';

  function renderGallery(filterCategory = 'all') {
    if (!galleryGrid) return;
    currentCategory = filterCategory;
    galleryGrid.innerHTML = '';

    const itemsToDisplay = filterCategory === 'all' 
      ? hampersCatalog 
      : hampersCatalog.filter(item => item.category === filterCategory);

    if (itemsToDisplay.length === 0) {
      galleryGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #78716C;">No items found in this category.</div>`;
      return;
    }

    itemsToDisplay.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-category', item.category);

      const safeTitle = item.title.replace(/'/g, "\\'");
      const safeCat = item.categoryLabel.replace(/'/g, "\\'");

      card.innerHTML = `
        <span class="product-badge-ribbon ${item.badgeType}">${item.badge}</span>
        
        <div class="product-img-wrap" onclick="openDrawer('${item.id}')">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <div class="quick-view-overlay-btn">
            <button class="btn btn-burgundy" style="width: 100%;">
              <i class="fa-solid fa-eye"></i> View Design Story
            </button>
          </div>
        </div>

        <div class="product-body">
          <span class="product-cat-title">${item.categoryLabel}</span>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.shortDesc}</p>
          
          <div class="product-card-footer">
            <button class="btn btn-whatsapp btn-enquire-card" onclick="inquireOnWhatsApp('${safeTitle}', '${safeCat}')">
              <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
            </button>
          </div>
        </div>
      `;

      galleryGrid.appendChild(card);
    });
  }

  // Initial render
  renderGallery('all');

  // --- CATEGORY FILTER BUTTONS ---
  function handleCategoryChange(category) {
    // Update active state on filter buttons only
    document.querySelectorAll('.filter-btn[data-category]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-category') === category);
    });

    renderGallery(category);

    // Always scroll to portfolio grid with a small offset so tabs stay visible
    const portfolioSection = document.getElementById('portfolioSection');
    if (portfolioSection) {
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetY = portfolioSection.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  }

  // Attach click listener to ALL category elements
  document.body.addEventListener('click', (e) => {
    const categoryTarget = e.target.closest('[data-category]');
    if (categoryTarget) {
      const category = categoryTarget.getAttribute('data-category');
      if (category) {
        handleCategoryChange(category);
      }
    }
  });

  // --- Search Input Filter ---
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!galleryGrid) return;
      
      const cards = galleryGrid.querySelectorAll('.product-card');
      cards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        const desc = card.querySelector('.product-desc').textContent.toLowerCase();
        const cat = card.querySelector('.product-cat-title').textContent.toLowerCase();

        if (title.includes(term) || desc.includes(term) || cat.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // --- DYNAMIC HERO RIGHT-SIDE ROLLING SLIDESHOW ---
  const rollingImgEl = document.getElementById('heroRollingImg');
  const rollingTitleEl = document.getElementById('heroRollingTitle');
  const rollingCardEl = document.getElementById('heroRollingCard');

  let rollingIndex = 0;

  function updateHeroRollingShowcase() {
    if (!rollingImgEl || !rollingTitleEl) return;

    // Cycle index through catalog items
    rollingIndex = (rollingIndex + 1) % hampersCatalog.length;
    const currentItem = hampersCatalog[rollingIndex];

    // Smooth transition fade out -> swap -> fade in
    rollingImgEl.style.opacity = '0';
    rollingTitleEl.style.opacity = '0';

    setTimeout(() => {
      rollingImgEl.src = currentItem.img;
      rollingImgEl.alt = currentItem.title;
      rollingTitleEl.textContent = currentItem.title;

      rollingImgEl.style.opacity = '1';
      rollingTitleEl.style.opacity = '1';
    }, 300);

    // Set click handler on rolling card to open that item's drawer
    if (rollingCardEl) {
      rollingCardEl.onclick = () => openDrawer(currentItem.id);
    }
  }

  // Auto-roll photos every 2.8 seconds
  setInterval(updateHeroRollingShowcase, 2800);

  // Initial click handler for floating hero card
  if (rollingCardEl) {
    rollingCardEl.onclick = () => openDrawer(hampersCatalog[0].id);
  }

  // --- Parallax Scroll & Sticky Nav Shadow ---
  const parallaxBg = document.querySelector('.parallax-bg-layer');
  const parallaxMain = document.querySelector('.parallax-layer-main');
  const parallaxFloating = document.querySelector('.parallax-layer-floating');
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    if (parallaxBg) parallaxBg.style.transform = `translateY(${scrolled * 0.12}px)`;
    if (parallaxMain) parallaxMain.style.transform = `translateY(${scrolled * 0.05}px)`;
    if (parallaxFloating) parallaxFloating.style.transform = `translateY(${-scrolled * 0.04}px)`;

    if (navbar) {
      if (window.scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }
  });

  // --- Quick View Slide Drawer Logic ---
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  window.openDrawer = function(id) {
    const item = hampersCatalog.find(h => h.id === id);
    if (!item || !drawerBackdrop) return;

    document.getElementById('drawerImg').src = item.img;
    document.getElementById('drawerImg').alt = item.title;
    document.getElementById('drawerCategory').textContent = item.categoryLabel;
    document.getElementById('drawerTitle').textContent = item.title;
    document.getElementById('drawerDesc').textContent = item.fullDesc;

    const materialsWrap = document.getElementById('drawerMaterials');
    materialsWrap.innerHTML = '';
    item.materials.forEach(m => {
      const li = document.createElement('li');
      li.style.fontSize = '0.9rem';
      li.style.marginBottom = '0.5rem';
      li.style.color = '#44403C';
      li.innerHTML = `<i class="fa-solid fa-circle-check text-burgundy"></i> ${m}`;
      materialsWrap.appendChild(li);
    });

    const drawerBtn = document.getElementById('drawerOrderBtn');
    drawerBtn.onclick = () => {
      inquireOnWhatsApp(item.title, item.categoryLabel);
    };

    drawerBackdrop.classList.add('active');
  };

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', () => {
      drawerBackdrop.classList.remove('active');
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) {
        drawerBackdrop.classList.remove('active');
      }
    });
  }
});
