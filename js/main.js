/* ==========================================================================
   Saburi - Luxury Gifting Portfolio (Dynamic Category Filters, Hero Slideshow & WhatsApp Integration)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Product Catalog (mapped to actual assets/images files) ---
  const hampersCatalog = [
    {
      id: 'krishna-singhasan',
      title: 'Krishna Royal Blue Velvet Singhasan Thali',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'FESTIVE SPECIAL',
      badgeType: 'royal',
      img: 'assets/images/0C2B53C8-8F80-402F-94EC-240CA4F1DD3E.png',
      shortDesc: 'Exquisite pearl-encrusted royal blue velvet singhasan thali adorned with peacock feather accents and a Radha-Krishna backdrop — perfect for Janmashtami, poojas & festive gifting.',
      fullDesc: 'A divine presentation platter handcrafted for festive poojas, Janmashtami celebrations, and bridal divine gifts. The elevated singhasan features a rich royal blue velvet cushion bordered with rows of lustrous pearl beads and dangling crystal droplets. Twin peacock feather fans crown the backrest, while a vibrant Radha-Krishna artwork panel with ornate peacock motifs and floral garlands creates a stunning backdrop. Includes matching velvet bolster cushions with pearl ring holders.',
      materials: ['Royal Blue Velvet Cushion', 'Pearl Bead Fringe & Crystal Drops', 'Natural Peacock Feather Fans', 'Radha-Krishna Artwork Backdrop', 'Velvet Bolster Ring Holders']
    },
    {
      id: 'baby-house-hamper',
      title: 'Little Dreamer Baby Welcome House Hamper',
      category: 'baby',
      categoryLabel: 'Baby Welcome',
      badge: 'NEW ARRIVAL',
      badgeType: '',
      img: 'assets/images/3A3E11FB-8C6F-4D4B-ACB5-CC986DE9F6CF.png',
      shortDesc: 'Whimsical teal wooden house display packed with a baby clothing wardrobe, plush bunny & teddy toys, Aveeno skincare, elephant snuggle blanket & storybooks.',
      fullDesc: 'A show-stopping baby welcome gift designed as a custom-painted teal & yellow wooden house structure. The left shelves hold baby socks, tiny sneakers, Aveeno baby lotion, and nappies. A plush bunny and teddy bear sit on a miniature swing in the center alcove. The right wardrobe features a full collection of colorful infant outfits on tiny hangers. An elephant-shaped snuggle blanket, "Jungle Tails" storybook, and decorative swan figurines complete this enchanting nursery-themed hamper, surrounded by sunflower accents and a faux garden pond.',
      materials: ['Custom Painted Wooden House Frame', 'Plush Bunny & Teddy Bear on Swing', 'Aveeno Baby Skincare Suite', 'Infant Clothing Wardrobe on Hangers', 'Elephant Snuggle Blanket & Storybook']
    },
    {
      id: 'bridal-rasoi-trousseau',
      title: 'Pehli Rasoi Bridal Trousseau Box',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'BESTSELLER',
      badgeType: 'royal',
      img: 'assets/images/3C098326-5DDE-4F55-88BA-021E8F816607.png',
      shortDesc: 'Opulent red & gold embroidered bridal trousseau box with sequin potli, brocade containers, pearl bangles & a personalized photo backdrop for the Pehli Rasoi ceremony.',
      fullDesc: 'A magnificent bridal trousseau set crafted for the Pehli Rasoi (first kitchen) ceremony. The lavish rectangular tray is wrapped in deep maroon velvet with heavy gold zari embroidery and pearl-studded borders. Miniature embroidered red & gold curtains frame a personalized photo card of the couple. The set includes a golden sequin potli bag, a matching round brocade jewelry box with pearl trim, pearl & gold bangle sets, velvet rose accents, and marigold garland decorations — everything a new bride needs for her grand welcome.',
      materials: ['Deep Maroon Velvet & Gold Zari Embroidery', 'Sequin Potli Bag', 'Brocade Jewelry Box with Pearl Trim', 'Pearl & Gold Bangle Set', 'Personalized Photo Curtain Backdrop']
    },
    {
      id: 'velvet-favor-boxes',
      title: 'Premium Velvet Wedding Favor Gift Boxes',
      category: 'corporate',
      categoryLabel: 'Corporate & Milestone',
      badge: 'EXCLUSIVE',
      badgeType: 'royal',
      img: 'assets/images/5e34337b-5cc2-48dc-af67-86daa13c8627.jpeg',
      shortDesc: 'Elegant champagne velvet keepsake boxes with gold lace trim, crystal-studded accents & customizable inner lid branding — ideal for wedding favors & corporate gifting.',
      fullDesc: 'A collection of premium champagne-toned velvet gift boxes in multiple sizes, each featuring ornate gold lace border trim, a gold clasp closure, and delicate crystal-studded medallion accents on the lid. The hinged inner lid showcases a custom-printed branding panel with a gold ribbon bow — perfect for personalized wedding favors, engagement return gifts, or corporate milestone keepsakes. Available in various sizes to hold jewelry, sweets, dry fruits, or luxury mementos. Produced under the Saburi (सबुरी) brand.',
      materials: ['Champagne Velvet Exterior', 'Gold Lace Border Trim', 'Crystal-Studded Lid Medallions', 'Custom Inner Lid Branding Panel', 'Gold Clasp Closure']
    },
    {
      id: 'ganesha-mandap-singhasan',
      title: 'Grand Ganesha Mandap Singhasan with Floral Canopy',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'DIVINE LUXE',
      badgeType: 'royal',
      img: 'assets/images/06C33643-6BEB-443C-B5DB-F527A1C4149F.png',
      shortDesc: 'A majestic magenta satin-draped mandap singhasan with a Ganesha idol on a gold lotus platter, cascading pearl strings, lotus bud danglers & an opulent floral canopy.',
      fullDesc: 'An exquisitely handcrafted Ganesha singhasan mandap designed for Ganesh Chaturthi celebrations, home temple décor, and divine festive gifting. The ornate gold-embossed rectangular base is wrapped in deep red embroidered brocade with dangling pearl and crystal fringe. Majestic magenta satin curtains are gathered at gold pillars, while cascading pearl bead strings and pink lotus bud danglers create a heavenly canopy. A beautifully hand-painted Ganesha idol sits atop a golden lotus petal platter. The floral crown features burgundy roses, cream peonies, gold leaf accents, white berries, and warm fairy-light glow. Matching red velvet sindhoor boxes and embroidered bolster rolls complete the divine setup.',
      materials: ['Magenta Satin Drapes on Gold Pillars', 'Cascading Pearl String Canopy', 'Pink Lotus Bud Danglers', 'Hand-Painted Ganesha on Gold Lotus Platter', 'Burgundy & Cream Rose Floral Crown with Fairy Lights']
    },
    {
      id: 'saburi-signature-trunk-boxes',
      title: 'Saburi Signature Velvet Trunk Gift Boxes',
      category: 'corporate',
      categoryLabel: 'Corporate & Milestone',
      badge: 'BULK ORDER',
      badgeType: '',
      img: 'assets/images/118c3474-33c0-4797-aad1-075d5adcb332.jpeg',
      shortDesc: 'Elegant ivory velvet trunk-style gift boxes with gold sequin lace borders, crystal brooch accents & antique brass clasps — perfect for bulk wedding favors & corporate gifting.',
      fullDesc: 'The Saburi Signature Collection of ivory velvet trunk-style keepsake boxes, produced in bulk for large-scale wedding return gifts, corporate milestone events, and festive giveaways. Each box is wrapped in premium crushed ivory velvet and finished with delicate gold sequin lace edging along all seams. The lid is adorned with scattered crystal and pearl brooch motifs, while a sturdy antique brass clasp and side handles ensure a vintage trunk aesthetic. Available in multiple sizes to hold dry fruits, chocolates, jewelry, or personalized mementos. Proudly branded under the Saburi (सबुरी) mark — "A Gift Made With Love and Patience."',
      materials: ['Premium Crushed Ivory Velvet', 'Gold Sequin Lace Edging', 'Crystal & Pearl Brooch Lid Accents', 'Antique Brass Clasp & Handles', 'Multiple Size Options for Bulk Orders']
    },
    {
      id: 'bridal-trousseau-bedding-bundle',
      title: 'Bridal Trousseau Bedding Gift Bundle',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'TROUSSEAU',
      badgeType: 'royal',
      img: 'assets/images/68ee9618-c114-495d-8174-4e4e297a7ad0.jpeg',
      shortDesc: 'A luxurious bridal bedding gift set wrapped in golden net tulle with a fuchsia sequin bow, silk floral corsage, satin ribbons & a traditional red brocade potli.',
      fullDesc: 'A stunning bridal trousseau packing presentation for the bride\'s bedding and quilt set. The plush quilt is elegantly wrapped in sheer golden net tulle with delicate bead detailing, tied together with rich fuchsia satin ribbons. A statement fuchsia sequin bow crowns the top, adorned with a handcrafted silk floral corsage featuring pink roses, cream buds, and gold leaf sprigs. A traditional red and gold brocade potli (decorative doll/bag) with golden bead embellishments hangs from the center as a signature trousseau accessory. The gold brocade base panel adds a regal touch to this classic Indian wedding gift presentation.',
      materials: ['Golden Net Tulle Wrap with Bead Detailing', 'Fuchsia Sequin Bow & Satin Ribbons', 'Silk Floral Corsage with Gold Leaf Sprigs', 'Red & Gold Brocade Potli Accessory', 'Premium Quilt & Bedding Set Inside']
    },
    {
      id: 'choora-ceremony-platter',
      title: 'Choora Ceremony Presentation Platter',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'CEREMONY',
      badgeType: 'royal',
      img: 'assets/images/8A5315F4-35A2-4E5E-A0D3-802E496801AB.png',
      shortDesc: 'An ornate gold embossed Choora ceremony tray with a red velvet curtained backdrop, bridal choora bangles on a wooden roller, golden kaleere & floral garland décor.',
      fullDesc: 'A breathtaking Choora ceremony presentation platter designed for one of the most significant Punjabi pre-wedding rituals. The large round golden embossed tray features an intricate floral pattern base. At the center, a wooden roller displays a stunning collection of pink, magenta, and multicolored bridal choora bangles. Behind it, an ornate miniature stage with red and gold sequin-embroidered velvet curtains frames a personalized ceremony card reading the bride\'s name and "CHOORA Ceremony." Golden kaleere (traditional Punjabi wedding ornaments) with cascading gold leaves hang from either side. The platter is adorned with lush floral garlands of cream roses, burgundy blooms, peach carnations, and pearl strings. Gold temple bells crown the backdrop bar, completing this regal ceremonial display.',
      materials: ['Gold Embossed Round Ceremonial Tray', 'Red & Gold Sequin Velvet Curtain Backdrop', 'Bridal Choora Bangles on Wooden Roller', 'Golden Kaleere with Cascading Leaves', 'Floral Garlands with Pearl String Accents']
    },
    {
      id: 'dulhan-haldi-ceremony-tray',
      title: 'Dulhan Ki Taiyaari Haldi Ceremony Tray',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'HALDI SPECIAL',
      badgeType: 'royal',
      img: 'assets/images/570EF185-A2DE-452C-96D3-BADED2AB1D79.png',
      shortDesc: 'A vibrant golden brocade canopy tray with pearl drapes, marigold garlands, a traditional brass haldi bowl, miniature rajasthani dolls & dholak accessories for the Haldi ceremony.',
      fullDesc: 'An exquisitely crafted Haldi/Mehendi ceremony presentation tray designed for the bride\'s pre-wedding festivities. The tray features a golden brocade draped canopy with delicate gold zari lace trim and cascading pearl bead strings. A personalised "Dulhan Banne Ki Taiyaari" illustrated card sits at the centre, flanked by vibrant fresh-look floral clusters of red roses, orange dahlias, and white hibiscus. A polished brass haldi bowl with a multicoloured braided ladle rests on a fuchsia satin cushion base. Handcrafted miniature Rajasthani bride-groom dolls in sequin-embroidered golden attire, a decorative mini dholak, colourful leheriya bangles, and gold paper fan accents complete this festive presentation. Marigold garlands frame the background for an authentic celebratory ambiance.',
      materials: ['Golden Brocade Draped Canopy with Zari Lace', 'Cascading Pearl Bead Strings & Cowrie Shell Drops', 'Polished Brass Haldi Bowl & Braided Ladle', 'Handcrafted Rajasthani Bride-Groom Dolls', 'Miniature Dholak, Leheriya Bangles & Paper Fan Accents']
    },
    {
      id: 'fuchsia-trousseau-packing-set',
      title: 'Royal Fuchsia & Gold Trousseau Packing Set',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'TROUSSEAU SET',
      badgeType: 'royal',
      img: 'assets/images/687c41e0-1de6-4706-b971-d5ee1fdd1197.jpeg',
      shortDesc: 'A luxurious fuchsia & gold brocade trousseau packing collection featuring embellished square boxes, round containers with sequin-pearl borders, tulle-wrapped trays & hanging golden bell tassels.',
      fullDesc: 'A complete bridal trousseau packing set in a stunning fuchsia and gold colour palette, designed to present the bride\'s trousseau items with regal splendour. The collection includes stacked square brocade boxes with heavy gold gota-patti borders, crystal peacock brooches, and purple silk tassels. Round embroidered containers with intricate zardozi work and rainbow pearl bead edging hold smaller keepsakes. A tulle-wrapped presentation tray with pearl-drop crystal fringe showcases cosmetics and accessories. Folded gold Banarasi silk fabric and sequin potli bags fill the background, while hanging golden bell chains with fuchsia and yellow pompom tassels create a festive backdrop. Branded with the Saburi mark for premium trousseau styling.',
      materials: ['Fuchsia & Gold Brocade Square Boxes', 'Zardozi Embroidered Round Containers', 'Crystal Peacock Brooch & Silk Tassel Accents', 'Tulle-Wrapped Tray with Pearl-Drop Fringe', 'Hanging Golden Bell Chains with Pompom Tassels']
    },
    {
      id: 'janmashtami-return-gift-baskets',
      title: 'Baby Krishna Janmashtami Return Gift Baskets',
      category: 'divine',
      categoryLabel: 'Divine & Festive',
      badge: 'BULK ORDER',
      badgeType: '',
      img: 'assets/images/a83299f9-a1ea-4d50-838e-5e2a7e6a8601.jpeg',
      shortDesc: 'Bulk silver filigree return gift baskets adorned with adorable baby Krishna cutouts, pink & turquoise silk tassels, crystal prasad jars & delicate artificial flower sprays.',
      fullDesc: 'A large-scale Janmashtami return gift collection produced in bulk for temple events, community celebrations, and festive gatherings. Each individual basket features an ornate silver-plated filigree metal body with a curved handle, holding a crystal-clear glass prasad jar with a decorative lid. An adorable cartoon-style baby Krishna cutout in blue is attached to each basket, adding a playful divine charm. Colourful pink and turquoise silk tassels dangle from the handle, while miniature artificial flower sprays of anemones, roses, and baby\'s breath in pastel shades complete the décor. Each basket is arranged on a decorative cloth base. Available in bulk quantities of 50, 100, or 200+ units for event distribution.',
      materials: ['Silver-Plated Filigree Metal Baskets', 'Crystal Glass Prasad Jars with Lids', 'Baby Krishna Character Cutouts', 'Pink & Turquoise Silk Tassels', 'Pastel Artificial Flower Spray Accents']
    },
    {
      id: 'pehli-rasoi-green-platter',
      title: 'Pehli Rasoi Lime Green & Fuchsia Ceremony Platter',
      category: 'bridal',
      categoryLabel: 'Bridal & Trousseau',
      badge: 'CEREMONY',
      badgeType: 'royal',
      img: 'assets/images/b21d23f2-fa77-4819-b560-35f1b8723569.jpeg',
      shortDesc: 'A fresh lime green & fuchsia Pehli Rasoi ceremony platter with a textured potli bag, brocade round box, pearl tassel, Banarasi dupatta & floral-trimmed ruffled tray.',
      fullDesc: 'A refreshingly modern Pehli Rasoi (first kitchen) ceremony presentation set in a vibrant lime green and fuchsia palette. The centrepiece is a scalloped ruffled tray lined with a sheer cream dupatta featuring bold fuchsia Banarasi embroidery and gold gota border. A textured lime green potli drawstring bag is tagged with a branded pink "Pehli Rasoi - Regards Sachdeva\'s" circular label, adorned with a pearl-and-gold cluster charm and a soft pink silk tassel. A matching green net-textured round box with rainbow pearl bead trim and a gold gota scallop edge holds spices or sweets. A folded hot pink Banarasi brocade fabric with green piping sits alongside, complemented by fresh-look floral bunches of daisies, yellow roses, and green foliage. The entire set radiates a youthful, contemporary bridal aesthetic.',
      materials: ['Lime Green Textured Potli with Pearl Charm & Tassel', 'Green Net Round Box with Rainbow Pearl Trim', 'Hot Pink Banarasi Brocade Fabric Set', 'Ruffled Tray with Fuchsia Embroidered Dupatta', 'Fresh Floral Bunches & Branded Ceremony Tag']
    },
    {
      id: 'crescent-moon-ring-platter',
      title: 'Enchanted Crescent Moon Engagement Ring Platter',
      category: 'rings',
      categoryLabel: 'Engagement Platters',
      badge: 'BESTSELLER',
      badgeType: 'royal',
      img: 'assets/images/BDC061B9-4907-4B79-95FB-DA9796FA2EB3.png',
      shortDesc: 'A romantic crescent moon macramé ring platter on a rustic wood slice with a personalized gold nameplate, fairy-lit baby\'s breath cascade, jute ring holders & scattered seashells.',
      fullDesc: 'A dreamy, bohemian-inspired engagement ring presentation platter built on a natural round wood slice base. The stunning centrepiece is a large crescent moon arch crafted from white cotton macramé weave, adorned with a cluster of premium silk roses, peonies, and mauve blooms alongside golden filigree monstera leaf accents at the top. A personalized gold-cut couple\'s nameplate with a diamond ring charm hangs from the arch centre on pearl bead strings. The lower arc of the moon is filled with a cascading arrangement of pink-tinted dried baby\'s breath flowers illuminated by warm LED fairy lights nestled in a jute-wrapped base. Two matching ring display pedestals — wrapped in jute and white lace with pearl bead borders — sit in front, topped with golden shell-shaped holders for the engagement rings. Scattered natural seashells, pearl beads, and polished pebbles across the wood base complete this coastal-romantic aesthetic.',
      materials: ['White Cotton Macramé Crescent Moon Arch', 'Personalized Gold Nameplate with Diamond Charm', 'LED Fairy-Lit Baby\'s Breath Cascade', 'Jute & Lace Ring Display Pedestals', 'Natural Wood Slice Base with Seashells & Pearls']
    },
    {
      id: 'royal-peacock-ring-thali',
      title: 'Royal Peacock Engagement Ring Thali',
      category: 'rings',
      categoryLabel: 'Engagement Platters',
      badge: 'SIGNATURE',
      badgeType: 'royal',
      img: 'assets/images/F342E951-984B-425B-A100-ECC2744E6752.png',
      shortDesc: 'An opulent teal & gold peacock-themed engagement ring thali with a mirror-work peacock figurine, real peacock feather fan, pearl-edged brocade ring cushions & rose florals.',
      fullDesc: 'A show-stopping engagement ring ceremony thali inspired by the regal beauty of the peacock. The large round platter is covered in rich teal green silk with intricate gold zari leaf and vine embroidery, finished with an elaborate gold bullion fringe border. A magnificent hand-painted blue peacock figurine with a mirror-mosaic body and a delicate floral crown sits at the centre, flanked by a lush arrangement of coral peonies, hot pink roses, lavender blossoms, and cream buds with gold leaf sprigs. A dramatic fan of natural peacock feathers with pearl-tipped quills cascades from one side. Two royal blue Banarasi brocade ring cushions with gold floral jacquard patterns and pearl bead chain borders are positioned in front to hold the engagement rings. Warm fairy lights and marigold garlands glow in the background, alongside traditional brass diyas for an authentic festive ambiance.',
      materials: ['Teal Silk & Gold Zari Embroidered Round Thali', 'Mirror-Mosaic Peacock Figurine with Floral Crown', 'Natural Peacock Feather Fan with Pearl Tips', 'Royal Blue Banarasi Brocade Ring Cushions', 'Gold Bullion Fringe Border & Fairy Light Ambiance']
    }
  ];

  // --- Dynamic WhatsApp Generator Function ---
  window.inquireOnWhatsApp = function(productTitle, categoryLabel) {
    const cleanTitle = productTitle || 'Bespoke Hamper Design';
    const cleanCategory = categoryLabel || 'Custom Order';
    const message = encodeURIComponent(`Hi, I am interested in inquiring about ${cleanTitle} (Category: ${cleanCategory}). Could you please share more details?`);
    const whatsappUrl = `https://wa.me/919811594517?text=${message}`;
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
