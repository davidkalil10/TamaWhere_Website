// ============================================================
// TamaWhere Website — Core Interactivity Module
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  if (window.i18n) {
    window.i18n.applyTranslations();
  }

  // Setup Language Switcher
  setupLanguageSwitcher();

  // Setup Mobile Nav
  setupMobileNav();

  // Setup Navbar Scroll State
  setupNavbarScroll();

  // Setup Hero Background Particles
  setupPixelParticles();

  // Setup Screenshots Gallery
  setupScreenshotsGallery();

  // Setup TamaDex Showcase
  setupTamaDex();

  // Setup Real Pets Showcase
  setupCustomPetsShowcase();

  // Setup TamaPack Copy URL & Download
  setupPackInteractions();

  // Setup Scroll Reveal Animations
  setupScrollAnimations();
});

// ------------------------------------------------------------
// 1. Language Switcher
// ------------------------------------------------------------
function setupLanguageSwitcher() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    window.i18n.toggleLanguage();
    // Re-render dynamic elements that need language
    renderTamaDex();
    renderCustomPets();
  });

  window.addEventListener('languageChanged', () => {
    renderTamaDex();
    renderCustomPets();
  });
}

// ------------------------------------------------------------
// 2. Mobile Navigation
// ------------------------------------------------------------
function setupMobileNav() {
  const burger = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.classList.remove('open');
    });
  });
}

// ------------------------------------------------------------
// 3. Navbar Scroll Blur & Glow
// ------------------------------------------------------------
function setupNavbarScroll() {
  const nav = document.querySelector('.site-header');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ------------------------------------------------------------
// 4. Floating Pixel Hearts & Sparkles Particles Canvas
// ------------------------------------------------------------
function setupPixelParticles() {
  const canvas = document.getElementById('pixelCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const colors = ['#e63946', '#2ecc71', '#3498db', '#f1c40f', '#9b59b6'];
  const particles = [];
  const count = Math.min(35, Math.floor(window.innerWidth / 35));

  class Particle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.floor(Math.random() * 3 + 2) * 2; // pixel grid aligned
      this.speedY = -(Math.random() * 0.6 + 0.3);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.2;
      this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < -30) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      if (this.type === 'heart') {
        const s = this.size;
        // Draw pixel mini heart
        ctx.fillRect(this.x, this.y, s, s);
        ctx.fillRect(this.x - s, this.y - s, s, s);
        ctx.fillRect(this.x + s, this.y - s, s, s);
        ctx.fillRect(this.x - s * 1.5, this.y - s * 2, s, s);
        ctx.fillRect(this.x + s * 1.5, this.y - s * 2, s, s);
        ctx.fillRect(this.x, this.y - s * 1.5, s, s);
      } else {
        const s = this.size;
        ctx.fillRect(this.x - s, this.y, s * 2, s);
        ctx.fillRect(this.x, this.y - s, s, s * 2);
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationFrameId = requestAnimationFrame(animate);
  }

  // Only animate when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cancelAnimationFrame(animationFrameId);
        animate();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });
  });
  observer.observe(canvas);
}

// ------------------------------------------------------------
// 5. Screenshots Gallery (Mobile & Wear OS)
// ------------------------------------------------------------
const screenshotsData = {
  mobile: [
    { src: 'img/screenshots/mobile_home.png', titleKey: 'sc_mobile_home' },
    { src: 'img/screenshots/mobile_Tamadex.png', titleKey: 'sc_mobile_tamadex' },
    { src: 'img/screenshots/mobile_selecao.png', titleKey: 'sc_mobile_selecao' },
    { src: 'img/screenshots/mobile_Statcard.png', titleKey: 'sc_mobile_statcard' },
    { src: 'img/screenshots/mobile_pupilo.png', titleKey: 'sc_mobile_pupilo' },
    { src: 'img/screenshots/mobile_details.png', titleKey: 'sc_mobile_details' }
  ],
  wear: [
    { src: 'img/screenshots/wear_home.png', titleKey: 'sc_wear_home' },
    { src: 'img/screenshots/wear_pupilo.png', titleKey: 'sc_wear_pupilo' },
    { src: 'img/screenshots/wear_tamadex.png', titleKey: 'sc_wear_tamadex' },
    { src: 'img/screenshots/wear_selecao.png', titleKey: 'sc_wear_selecao' },
    { src: 'img/screenshots/wear_Statcard.png', titleKey: 'sc_wear_statcard' },
    { src: 'img/screenshots/wear_details.png', titleKey: 'sc_wear_details' }
  ]
};

let currentTab = 'mobile';
let currentScreenIndex = 0;

function setupScreenshotsGallery() {
  const tabs = document.querySelectorAll('.sc-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-tab');
      currentScreenIndex = 0;
      updateScreenshotsView();
    });
  });

  const prevBtn = document.getElementById('scPrevBtn');
  const nextBtn = document.getElementById('scNextBtn');
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const list = screenshotsData[currentTab];
      currentScreenIndex = (currentScreenIndex - 1 + list.length) % list.length;
      updateScreenshotsView();
    });
    nextBtn.addEventListener('click', () => {
      const list = screenshotsData[currentTab];
      currentScreenIndex = (currentScreenIndex + 1) % list.length;
      updateScreenshotsView();
    });
  }

  updateScreenshotsView();
}

function updateScreenshotsView() {
  const list = screenshotsData[currentTab];
  const item = list[currentScreenIndex];
  const frameContainer = document.getElementById('mockupDevice');
  const screenImg = document.getElementById('mockupScreenImg');
  const screenCaption = document.getElementById('mockupCaption');
  const thumbsContainer = document.getElementById('mockupThumbs');

  if (!frameContainer || !screenImg) return;

  // Change device frame style
  if (currentTab === 'wear') {
    frameContainer.className = 'device-frame frame-wear';
  } else {
    frameContainer.className = 'device-frame frame-mobile';
  }

  screenImg.src = item.src;
  screenImg.alt = window.i18n ? window.i18n.t(item.titleKey) : 'Screenshot';
  if (screenCaption) {
    screenCaption.textContent = window.i18n ? window.i18n.t(item.titleKey) : '';
  }

  // Render Thumbnails
  if (thumbsContainer) {
    thumbsContainer.innerHTML = '';
    list.forEach((sc, idx) => {
      const thumb = document.createElement('button');
      thumb.className = `sc-thumb ${idx === currentScreenIndex ? 'active' : ''}`;
      thumb.setAttribute('aria-label', `Screenshot ${idx + 1}`);
      thumb.innerHTML = `<img src="${sc.src}" alt="Thumb ${idx + 1}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        currentScreenIndex = idx;
        updateScreenshotsView();
      });
      thumbsContainer.appendChild(thumb);
    });
  }
}

// ------------------------------------------------------------
// 6. TamaDex Showcase (33 Curated Creatures)
// ------------------------------------------------------------
const curatedCreatures = [
  { id: 3, name: "Sansão", type: "normal", rarity: "rare" },
  { id: 6, name: "Roypuff", type: "normal", rarity: "rare" },
  { id: 9, name: "Yorkhan", type: "normal", rarity: "rare" },
  { id: 12, name: "Pugster", type: "normal", rarity: "rare" },
  { id: 15, name: "Ironbull", type: "normal", rarity: "rare" },
  { id: 18, name: "Borderix", type: "normal", rarity: "rare" },
  { id: 21, name: "Caramelo", type: "normal", rarity: "rare" },
  { id: 24, name: "Barry Allen", type: "normal", rarity: "rare" },
  { id: 27, name: "Mingau", type: "normal", rarity: "rare" },
  { id: 30, name: "Zara", type: "normal", rarity: "rare" },
  { id: 33, name: "Zelda", type: "normal", rarity: "rare" },
  { id: 36, name: "Didi", type: "normal", rarity: "rare" },
  { id: 39, name: "Simba", type: "normal", rarity: "rare" },
  { id: 42, name: "Banana", type: "normal", rarity: "rare" },
  { id: 45, name: "Siarion", type: "normal", rarity: "rare" },
  { id: 48, name: "Moonhare", type: "grass", rarity: "rare" },
  { id: 51, name: "Cheeko", type: "normal", rarity: "common" },
  { id: 54, name: "Furreon", type: "normal", rarity: "rare" },
  { id: 57, name: "Guinox", type: "normal", rarity: "rare" },
  { id: 60, name: "Arawking", type: "normal", rarity: "rare" },
  { id: 63, name: "Kiita", type: "normal", rarity: "common" },
  { id: 66, name: "Moonowl", type: "psychic", rarity: "rare" },
  { id: 69, name: "Pinguino", type: "ice", rarity: "rare" },
  { id: 72, name: "Quacking", type: "water", rarity: "rare" },
  { id: 75, name: "Vulphox", type: "fire", rarity: "rare" },
  { id: 78, name: "Bambear", type: "grass", rarity: "rare" },
  { id: 80, name: "Terrapin", type: "water", rarity: "rare" },
  { id: 82, name: "Chromix", type: "grass", rarity: "rare" },
  { id: 84, name: "Eldrake", type: "dragon", rarity: "legendary" },
  { id: 86, name: "Lumicorn", type: "psychic", rarity: "legendary" },
  { id: 88, name: "Phoenixa", type: "fire", rarity: "legendary" },
  { id: 89, name: "Kitsune", type: "fire", rarity: "legendary" },
  { id: 90, name: "Pegasus", type: "electric", rarity: "legendary" }
];

let activeFilter = 'all';

function setupTamaDex() {
  const filterBtns = document.querySelectorAll('.dex-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderTamaDex();
    });
  });

  renderTamaDex();
}

function renderTamaDex() {
  const grid = document.getElementById('tamadexGrid');
  if (!grid) return;

  const filtered = curatedCreatures.filter(c => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'legendary') return c.rarity === 'legendary';
    return c.type.toLowerCase() === activeFilter.toLowerCase();
  });

  grid.innerHTML = '';
  filtered.forEach(creature => {
    const padId = String(creature.id).padStart(3, '0');
    const spriteUrl = `img/sprites/${padId}_idle.gif`;
    
    const card = document.createElement('div');
    card.className = `dex-card type-${creature.type} rarity-${creature.rarity}`;
    
    let rarityStars = creature.rarity === 'legendary' ? '✨✨✨' : (creature.rarity === 'rare' ? '⭐⭐' : '⭐');
    let rarityText = window.i18n ? window.i18n.t(`rarity_${creature.rarity}`) : creature.rarity;
    let typeText = window.i18n ? window.i18n.t(`filter_${creature.type}`) : creature.type;

    card.innerHTML = `
      <div class="dex-card-header">
        <span class="dex-num">#${padId}</span>
        <span class="dex-rarity-badge" title="${rarityText}">${rarityStars}</span>
      </div>
      <div class="dex-sprite-wrapper">
        <div class="sprite-glow"></div>
        <img src="${spriteUrl}" alt="${creature.name}" class="dex-sprite" loading="lazy" />
      </div>
      <div class="dex-card-body">
        <h3 class="dex-name">${creature.name}</h3>
        <span class="type-pill type-pill-${creature.type}">${typeText}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ------------------------------------------------------------
// 7. Custom Pets Showcase (7 Real Pet Evolutionary Lines)
// ------------------------------------------------------------
const realPetsData = [
  {
    name: "Barry Allen",
    type: "Cão / Dog",
    photo: "img/custom-pets/barry_allen.jpg",
    stages: [
      { id: 22, name: "Baby", stageKey: "custom_stage_baby" },
      { id: 23, name: "Barry", stageKey: "custom_stage_mid" },
      { id: 24, name: "Barry Allen", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Mingau",
    type: "Gato / Cat",
    photo: "img/custom-pets/mingau.jpeg",
    stages: [
      { id: 25, name: "Snowi", stageKey: "custom_stage_baby" },
      { id: 26, name: "Snowel", stageKey: "custom_stage_mid" },
      { id: 27, name: "Mingau", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Zara",
    type: "Gata / Cat",
    photo: "img/custom-pets/zara.jpeg",
    stages: [
      { id: 28, name: "Zaza", stageKey: "custom_stage_baby" },
      { id: 29, name: "Zara", stageKey: "custom_stage_mid" },
      { id: 30, name: "Zara", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Zelda",
    type: "Gata / Cat",
    photo: "img/custom-pets/zelda.jpeg",
    stages: [
      { id: 31, name: "Zeze", stageKey: "custom_stage_baby" },
      { id: 32, name: "Zelda", stageKey: "custom_stage_mid" },
      { id: 33, name: "Zelda", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Didi",
    type: "Cão / Dog",
    photo: "img/custom-pets/didi.jpeg",
    stages: [
      { id: 34, name: "Lady", stageKey: "custom_stage_baby" },
      { id: 35, name: "Diana", stageKey: "custom_stage_mid" },
      { id: 36, name: "Didi", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Simba",
    type: "Gato / Cat",
    photo: "img/custom-pets/simba.jpeg",
    stages: [
      { id: 37, name: "Amber", stageKey: "custom_stage_baby" },
      { id: 38, name: "Cindor", stageKey: "custom_stage_mid" },
      { id: 39, name: "Simba", stageKey: "custom_stage_final" }
    ]
  },
  {
    name: "Banana",
    type: "Cão / Dog",
    photo: "img/custom-pets/banana.jpeg",
    stages: [
      { id: 40, name: "Nana", stageKey: "custom_stage_baby" },
      { id: 41, name: "Banana", stageKey: "custom_stage_mid" },
      { id: 42, name: "Banana", stageKey: "custom_stage_final" }
    ]
  }
];

let selectedPetIdx = 0;

function setupCustomPetsShowcase() {
  renderCustomPets();
}

function renderCustomPets() {
  const navContainer = document.getElementById('customPetTabs');
  const detailContainer = document.getElementById('customPetDetail');
  if (!navContainer || !detailContainer) return;

  // Render Tabs / Avatars
  navContainer.innerHTML = '';
  realPetsData.forEach((pet, idx) => {
    const tab = document.createElement('button');
    tab.className = `custom-pet-tab ${idx === selectedPetIdx ? 'active' : ''}`;
    tab.innerHTML = `
      <img src="${pet.photo}" alt="${pet.name}" class="tab-photo" loading="lazy" />
      <span class="tab-name">${pet.name}</span>
    `;
    tab.addEventListener('click', () => {
      selectedPetIdx = idx;
      renderCustomPets();
    });
    navContainer.appendChild(tab);
  });

  // Render Selected Pet Showcase
  const currentPet = realPetsData[selectedPetIdx];
  const stageBabyTitle = window.i18n ? window.i18n.t('custom_stage_baby') : '1st Stage (Baby)';
  const stageMidTitle = window.i18n ? window.i18n.t('custom_stage_mid') : '2nd Stage (Teen)';
  const stageFinalTitle = window.i18n ? window.i18n.t('custom_stage_final') : 'Final Form (Real)';
  const realPhotoTitle = window.i18n ? window.i18n.t('custom_real_photo') : 'Real Photo';
  const pixelArtTitle = window.i18n ? window.i18n.t('custom_pixel_art') : 'Pixel Art';

  detailContainer.innerHTML = `
    <div class="custom-showcase-card">
      <div class="showcase-header">
        <h3 class="showcase-pet-name">${currentPet.name}</h3>
        <span class="showcase-pet-tag">⭐ ${currentPet.type}</span>
      </div>

      <div class="showcase-grid">
        <!-- Real Pet Photo Box -->
        <div class="real-photo-card">
          <div class="photo-badge">${realPhotoTitle}</div>
          <div class="photo-frame">
            <img src="${currentPet.photo}" alt="${currentPet.name}" class="real-img" />
          </div>
          <p class="photo-caption">${currentPet.name} na vida real</p>
        </div>

        <!-- Evolutionary Line Box -->
        <div class="evolution-line-card">
          <div class="evo-badge">${pixelArtTitle} — Linha Evolutiva</div>
          
          <div class="evo-stages-flow">
            <!-- Stage 1 -->
            <div class="evo-stage">
              <span class="stage-label">${stageBabyTitle}</span>
              <div class="evo-sprite-box">
                <img src="img/sprites/${String(currentPet.stages[0].id).padStart(3, '0')}_idle.gif" 
                     alt="${currentPet.stages[0].name}" 
                     class="evo-sprite" />
              </div>
              <strong class="stage-name">${currentPet.stages[0].name}</strong>
              <small class="stage-id">#${String(currentPet.stages[0].id).padStart(3, '0')}</small>
            </div>

            <div class="evo-arrow">➔</div>

            <!-- Stage 2 -->
            <div class="evo-stage">
              <span class="stage-label">${stageMidTitle}</span>
              <div class="evo-sprite-box">
                <img src="img/sprites/${String(currentPet.stages[1].id).padStart(3, '0')}_idle.gif" 
                     alt="${currentPet.stages[1].name}" 
                     class="evo-sprite" />
              </div>
              <strong class="stage-name">${currentPet.stages[1].name}</strong>
              <small class="stage-id">#${String(currentPet.stages[1].id).padStart(3, '0')}</small>
            </div>

            <div class="evo-arrow">➔</div>

            <!-- Stage 3 (Final Form) -->
            <div class="evo-stage final-stage">
              <span class="stage-label highlight-label">${stageFinalTitle}</span>
              <div class="evo-sprite-box pulse-glow">
                <img src="img/sprites/${String(currentPet.stages[2].id).padStart(3, '0')}_idle.gif" 
                     alt="${currentPet.stages[2].name}" 
                     class="evo-sprite" />
              </div>
              <strong class="stage-name glow-name">${currentPet.stages[2].name}</strong>
              <small class="stage-id">#${String(currentPet.stages[2].id).padStart(3, '0')}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ------------------------------------------------------------
// 8. TamaPack Copy URL & Toast
// ------------------------------------------------------------
function setupPackInteractions() {
  const copyBtn = document.getElementById('copyPackUrlBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    // Generate absolute direct download URL
    const packUrl = new URL('downloads/gen1.tamapack', window.location.href).href;
    
    try {
      await navigator.clipboard.writeText(packUrl);
      showToast(window.i18n ? window.i18n.t('toast_url_copied') : 'URL copied to clipboard!');
    } catch (e) {
      // Fallback
      const input = document.createElement('input');
      input.value = packUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast(window.i18n ? window.i18n.t('toast_url_copied') : 'URL copied to clipboard!');
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast.hideTimeout);
  toast.hideTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ------------------------------------------------------------
// 9. Scroll Reveal Animations (Intersection Observer)
// ------------------------------------------------------------
function setupScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}
