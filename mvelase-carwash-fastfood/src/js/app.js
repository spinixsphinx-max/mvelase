import { siteConfig } from '../config/siteConfig.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHero();
  initCarWashServices();
  initFoodMenu();
  initBenefits();
  initGallery();
  initLocation();
  initContact();
  initFooter();
  initStickyMobileBar();
  initScrollSpy();
});

// Helper for WhatsApp links
function createWhatsAppUrl(customMessage) {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// 1. Header & Mobile Menu
function initHeader() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
      });
    });
  }

  // Header Call & WhatsApp button links
  const headerCallBtn = document.getElementById('headerCallBtn');
  if (headerCallBtn) {
    headerCallBtn.href = `tel:${siteConfig.phoneRaw}`;
  }

  const headerWaBtn = document.getElementById('headerWaBtn');
  if (headerWaBtn) {
    headerWaBtn.href = createWhatsAppUrl();
  }
}

// 2. Hero Section
function initHero() {
  const heroCallBtn = document.getElementById('heroCallBtn');
  const heroWaBtn = document.getElementById('heroWaBtn');
  const heroDirBtn = document.getElementById('heroDirBtn');

  if (heroCallBtn) {
    heroCallBtn.href = `tel:${siteConfig.phoneRaw}`;
  }

  if (heroWaBtn) {
    heroWaBtn.href = createWhatsAppUrl("Hi Mvelase's, I am looking for your location and car wash / fast food services.");
  }

  if (heroDirBtn) {
    heroDirBtn.href = siteConfig.location.googleMapsDirectionsUrl;
    heroDirBtn.target = "_blank";
    heroDirBtn.rel = "noopener noreferrer";
  }
}

// 3. Car Wash Services Section
function initCarWashServices() {
  const container = document.getElementById('servicesGrid');
  if (!container) return;

  const fallbackImages = {
    'wash-1': 'src/assets/images/wash_basic.jpg',
    'wash-2': 'src/assets/images/wash_valet.jpg',
    'wash-3': 'src/assets/images/wash_valet.jpg',
    'wash-4': 'src/assets/images/hero.jpg'
  };

  container.innerHTML = siteConfig.carWashServices.map(service => {
    const waMessage = `Hi Mvelase's, I'd like to enquire about the "${service.name}" service pricing and wait times.`;
    const waUrl = createWhatsAppUrl(waMessage);
    const imgSrc = service.image || fallbackImages[service.id] || 'src/assets/images/hero.jpg';

    return `
      <div class="service-card">
        <div class="service-img-wrapper">
          <img src="${imgSrc}" alt="${service.name}" class="service-img" loading="lazy" onerror="this.onerror=null; this.src='src/assets/images/hero.jpg';">
          <span class="service-badge">${service.badge}</span>
        </div>
        <div class="service-content">
          <h3 class="service-title">${service.name}</h3>
          <p class="service-description">${service.description}</p>
          <div class="service-meta">
            <span class="service-price">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${service.price}
            </span>
            <span class="service-duration">${service.duration}</span>
          </div>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.51 1.036 3.531l-.679 2.48 2.544-.667A5.736 5.736 0 0 0 12.031 17.7c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.762-5.768-5.762zm3.386 8.211c-.144.405-.838.775-1.157.825-.318.05-.724.088-2.345-.584-1.956-.811-3.21-2.825-3.308-2.956-.098-.131-.796-1.059-.796-2.02 0-.96.502-1.433.681-1.63.178-.198.39-.247.52-.247.13 0 .26.002.373.007.119.006.279-.045.437.334.158.379.54.131.587 1.428.047.098.077.213.012.342-.065.131-.098.213-.196.327-.098.114-.207.255-.296.342-.1.098-.204.204-.088.404.116.199.516.852 1.108 1.379.76.677 1.401.887 1.6.986.199.098.315.082.43-.05.115-.131.494-.575.626-.772.131-.198.263-.164.44-.098.178.066 1.13.533 1.326.631.196.098.327.147.375.23.048.082.048.477-.096.882z"/></svg>
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// 4. Fast Food Menu Section
function initFoodMenu() {
  const categoriesContainer = document.getElementById('foodCategories');
  const menuGrid = document.getElementById('foodMenuGrid');
  const foodBannerWaBtn = document.getElementById('foodBannerWaBtn');

  if (foodBannerWaBtn) {
    foodBannerWaBtn.href = createWhatsAppUrl("Hi Mvelase's, I'd like to place a fast food takeaway order.");
  }

  if (!categoriesContainer || !menuGrid) return;

  // Render categories
  categoriesContainer.innerHTML = siteConfig.foodCategories.map((cat, index) => `
    <button class="category-tab ${index === 0 ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join('');

  // Initial render all food items
  renderFoodItems('all');

  // Add click handlers for category tabs
  categoriesContainer.addEventListener('click', (e) => {
    const tab = e.target.closest('.category-tab');
    if (!tab) return;

    document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const selectedCategory = tab.dataset.category;
    renderFoodItems(selectedCategory);
  });
}

function renderFoodItems(category) {
  const menuGrid = document.getElementById('foodMenuGrid');
  if (!menuGrid) return;

  const items = category === 'all' 
    ? siteConfig.foodMenu 
    : siteConfig.foodMenu.filter(item => item.category === category);

  const fallbackFoodImg = {
    'burgers': 'src/assets/images/food_burgers.jpg',
    'meals': 'src/assets/images/food_meals.jpg',
    'sides': 'src/assets/images/food_burgers.jpg',
    'drinks': 'src/assets/images/food_meals.jpg'
  };

  menuGrid.innerHTML = items.map(item => {
    const waMessage = item.waMessage || `Hi Mvelase's, I'd like to order / enquire about "${item.name}".`;
    const waUrl = createWhatsAppUrl(waMessage);
    const imgSrc = item.image || fallbackFoodImg[item.category] || 'src/assets/images/food_meals.jpg';

    return `
      <div class="food-card">
        <div class="food-img-wrapper">
          <img src="${imgSrc}" alt="${item.name}" class="food-img" loading="lazy" onerror="this.onerror=null; this.src='src/assets/images/food_meals.jpg';">
          <span class="food-tag">${item.tag}</span>
        </div>
        <div class="food-content">
          <h3 class="food-title">${item.name}</h3>
          <p class="food-description">${item.description}</p>
          <div class="food-footer">
            <span class="food-price-badge">${item.price}</span>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.55rem 0.9rem; font-size: 0.85rem;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.51 1.036 3.531l-.679 2.48 2.544-.667A5.736 5.736 0 0 0 12.031 17.7c3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.762-5.768-5.762zm3.386 8.211c-.144.405-.838.775-1.157.825-.318.05-.724.088-2.345-.584-1.956-.811-3.21-2.825-3.308-2.956-.098-.131-.796-1.059-.796-2.02 0-.96.502-1.433.681-1.63.178-.198.39-.247.52-.247.13 0 .26.002.373.007.119.006.279-.045.437.334.158.379.54.131.587 1.428.047.098.077.213.012.342-.065.131-.098.213-.196.327-.098.114-.207.255-.296.342-.1.098-.204.204-.088.404.116.199.516.852 1.108 1.379.76.677 1.401.887 1.6.986.199.098.315.082.43-.05.115-.131.494-.575.626-.772.131-.198.263-.164.44-.098.178.066 1.13.533 1.326.631.196.098.327.147.375.23.048.082.048.477-.096.882z"/></svg>
              Order directly via WhatsApp
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. Why Choose Us / Benefits Section
function initBenefits() {
  const container = document.getElementById('benefitsGrid');
  if (!container) return;

  const iconSvg = {
    'map-pin': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'layers': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'message-square': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    'check-circle': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'
  };

  container.innerHTML = siteConfig.benefits.map(item => `
    <div class="benefit-card">
      <div class="benefit-icon">
        ${iconSvg[item.icon] || iconSvg['map-pin']}
      </div>
      <h4>${item.title}</h4>
      <p>${item.description}</p>
    </div>
  `).join('');
}

// 6. Gallery Section (Professional Photo Showcase Placeholders)
function initGallery() {
  const container = document.getElementById('galleryGrid');
  if (!container) return;

  const icons = {
    'droplet': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
    'sparkles': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>',
    'shield': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    'utensils': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
    'flame': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    'map-pin': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  container.innerHTML = siteConfig.galleryItems.map(item => `
    <div class="gallery-showcase-card">
      <div class="gallery-card-top">
        <div class="gallery-icon-badge">
          ${icons[item.icon] || icons['droplet']}
        </div>
        <span class="gallery-cat-tag">${item.category}</span>
      </div>
      <div class="gallery-card-body">
        <h3 class="gallery-card-title">${item.title}</h3>
        <p class="gallery-card-desc">${item.desc}</p>
      </div>
      <div class="gallery-card-footer">
        <span class="gallery-status-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          Photos coming soon
        </span>
      </div>
    </div>
  `).join('');
}

// 7. Location Section
function initLocation() {
  const addressFull = document.getElementById('locFullAddress');
  const hoursList = document.getElementById('locHoursList');
  const dirBtn = document.getElementById('locDirectionsBtn');
  const mapIframe = document.getElementById('mapIframe');

  if (addressFull) {
    addressFull.textContent = siteConfig.location.fullAddress;
  }

  if (hoursList) {
    hoursList.innerHTML = `
      <div class="hours-placeholder-box">
        <span class="hours-primary-text">${siteConfig.openingHoursDisplay}</span>
        <p class="hours-sub-text">${siteConfig.openingHoursNote}</p>
        <div class="hours-actions">
          <a href="tel:${siteConfig.phoneRaw}" class="btn btn-outline" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Call 063 019 1046</a>
          <a href="${createWhatsAppUrl("Hi Mvelase's, what are your operating hours today?")}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="padding: 0.4rem 0.85rem; font-size: 0.8rem;">Ask via WhatsApp</a>
        </div>
      </div>
    `;
  }

  if (dirBtn) {
    dirBtn.href = siteConfig.location.googleMapsDirectionsUrl;
    dirBtn.target = "_blank";
    dirBtn.rel = "noopener noreferrer";
  }

  if (mapIframe && siteConfig.location.mapEmbedUrl) {
    mapIframe.src = siteConfig.location.mapEmbedUrl;
  }
}

// 8. Contact Section
function initContact() {
  const phoneDisplay = document.getElementById('contactPhoneDisplay');
  const callBtn = document.getElementById('contactCallBtn');
  const waBtn = document.getElementById('contactWaBtn');
  const dirBtn = document.getElementById('contactDirBtn');

  if (phoneDisplay) {
    phoneDisplay.textContent = siteConfig.phoneDisplay;
  }

  if (callBtn) {
    callBtn.href = `tel:${siteConfig.phoneRaw}`;
  }

  if (waBtn) {
    waBtn.href = createWhatsAppUrl();
  }

  if (dirBtn) {
    dirBtn.href = siteConfig.location.googleMapsDirectionsUrl;
    dirBtn.target = "_blank";
    dirBtn.rel = "noopener noreferrer";
  }
}

// 9. Footer
function initFooter() {
  const footerPhone = document.getElementById('footerPhone');
  const footerWa = document.getElementById('footerWa');
  const footerAddress = document.getElementById('footerAddress');

  if (footerPhone) {
    footerPhone.href = `tel:${siteConfig.phoneRaw}`;
    footerPhone.textContent = siteConfig.phoneDisplay;
  }

  if (footerWa) {
    footerWa.href = createWhatsAppUrl();
    footerWa.textContent = siteConfig.phoneDisplay;
  }

  if (footerAddress) {
    footerAddress.textContent = `${siteConfig.location.street}, ${siteConfig.location.suburb}`;
  }
}

// 10. Sticky Mobile Bottom Action Bar
function initStickyMobileBar() {
  const stickyCall = document.getElementById('stickyCallBtn');
  const stickyWa = document.getElementById('stickyWaBtn');
  const stickyDir = document.getElementById('stickyDirBtn');

  if (stickyCall) stickyCall.href = `tel:${siteConfig.phoneRaw}`;
  if (stickyWa) stickyWa.href = createWhatsAppUrl();
  if (stickyDir) {
    stickyDir.href = siteConfig.location.googleMapsDirectionsUrl;
    stickyDir.target = "_blank";
    stickyDir.rel = "noopener noreferrer";
  }
}

// 11. ScrollSpy Active Navigation Highlighting
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}
