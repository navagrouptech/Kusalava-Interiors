/* ==========================================================================
   KUSALAVA INTERIORS - LUXURY EDITORIAL CONTROLLER & LOGIC
   Brand: KUSALAVA INTERIORS | DESIGN • BUILD • DECOR
   Contacts: Pavan Kumar (7287891945) | Surya (9182784945)
   Stack: Vanilla HTML5, CSS3, ES6 JavaScript (Firebase Ready)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // DATA MODEL: SERVICES (Prepared for Future Database / Admin Dashboard)
  // ==========================================================================
  const SERVICES_DATA = {
    cupboards: {
      id: 'cupboards',
      title: 'Cupboard Works & Bespoke Wardrobes',
      category: 'cabinetry',
      categoryLabel: 'Modular Joinery & Wardrobes',
      image: 'assets/service-wardrobe.jpg',
      shortDesc: 'Bespoke modular wardrobes, walk-in closets, dresser units, and TV consoles engineered with BWR marine ply, fluted laminates, and soft-close German hardware.',
      longDesc: 'Our custom wardrobe and cabinetry commissions combine timeless exterior finishes with hyper-organized interior ergonomics. Each unit is precision-manufactured with calibrated marine plywood, moisture-resistant edge-banding, concealed LED profile lighting with infrared sensors, and German Blum/Hettich soft-close drawer runners.',
      specs: [
        { label: 'Carcass Material', value: 'BWR / BWP Grade 710 Marine Ply' },
        { label: 'Hardware & Hinges', value: 'Blum / Hettich Soft-Close' },
        { label: 'Exterior Finishes', value: 'Veneer, Matte Acrylic & Fluted Panels' },
        { label: 'Turnaround Time', value: '14 - 21 Working Days' }
      ]
    },
    ceiling: {
      id: 'ceiling',
      title: 'Architectural False Ceiling Works',
      category: 'cabinetry',
      categoryLabel: 'Suspended Ceilings & Lighting Troughs',
      image: 'assets/service-ceiling.jpg',
      shortDesc: 'Architectural gypsum and POP suspended ceilings, indirect warm cove lighting troughs, recessed magnetic track lights, and laser-straight perimeter shadow gaps.',
      longDesc: 'Ceilings define the emotional volume and ambient intimacy of a luxury space. Kusalava Interiors specializes in multi-tiered gypsum false ceilings, perimeter negative shadow grooves, concealed ambient warm cove channels (3000K), magnetic recessed track light integration, and structural reinforcements for heavy crystal chandeliers.',
      specs: [
        { label: 'Board Specifications', value: 'Saint-Gobain Gyproc 12.5mm' },
        { label: 'Channel Framework', value: 'Ultra-Steel Heavy Galvanized' },
        { label: 'Lighting Provisions', value: 'Cove, Magnetic Tracks & Spotlights' },
        { label: 'Perimeter Detail', value: '15mm Architectural Shadow Reveal' }
      ]
    },
    painting: {
      id: 'painting',
      title: 'Luxury Painting & Artisanal Textures',
      category: 'surfaces',
      categoryLabel: 'Fine Surface Finishes',
      image: 'assets/service-painting.jpg',
      shortDesc: 'Artisanal Italian Venetian plaster, velvet matte luxury emulsions, textured concrete feature accents, and micro-sanded flawless wall preparation.',
      longDesc: 'From hand-troweled Venetian marble plaster to velvet matte emulsions, our master painters prepare surfaces to an uncompromising standard. We utilize multi-coat skim coats, fiber-mesh crack arrestors, and premium non-toxic low-VOC paints from Asian Paints Royale Luxury and Oikos Italy to achieve seamless light reflection.',
      specs: [
        { label: 'Base Preparation', value: '3-Coat Waterproof Acrylic Putty' },
        { label: 'Topcoat Finishes', value: 'Royale Aspira & Venetian Plaster' },
        { label: 'Specialty Finishes', value: 'Travertine, Stucco & Concrete Wash' },
        { label: 'Durability', value: 'Anti-Bacterial, Stain Resistant' }
      ]
    },
    aluminium: {
      id: 'aluminium',
      title: 'Architectural Aluminium Works & Facades',
      category: 'surfaces',
      categoryLabel: 'Structural Aluminium & Profiles',
      image: 'assets/service-aluminium.jpg',
      shortDesc: 'Architectural matte black anodized framing, slim glass facade systems, decorative exterior louvers, pergolas, and heavy-duty sliding track doors.',
      longDesc: 'Modern luxury residences require crisp metal lines and weather-sealed transitions. We fabricate custom matte black powder-coated aluminium louvers, terrace pergolas, slim-profile room dividers, and heavy-gauge architectural extrusions that resist warping, corrosion, and tropical heat.',
      specs: [
        { label: 'Alloy Grade', value: '6063-T6 Architectural Grade' },
        { label: 'Surface Coating', value: 'AkzoNobel 60-Micron Powder Coating' },
        { label: 'Hardware Inclusions', value: 'Stainless Steel Heavy-Duty Rollers' },
        { label: 'Wind Resistance', value: 'Engineered for High-Rise Elevations' }
      ]
    },
    glass: {
      id: 'glass',
      title: 'Fluted & Acoustic Glass Partitions',
      category: 'surfaces',
      categoryLabel: 'Decorative & Acoustic Glazing',
      image: 'assets/service-glass.jpg',
      shortDesc: 'Fluted, reeded, tinted, and clear acoustic toughened glass dividers with slimline metal grids for luxury walk-ins, ensuites, and modern study rooms.',
      longDesc: 'Create dramatic spatial zoning without blocking natural light. Our custom glass partition systems feature 10mm to 12mm Saint-Gobain toughened glass, fluted/reeded textured privacy glass, tinted bronze/grey finishes, and ultra-slim concealed ceiling tracks with hydraulic dampeners.',
      specs: [
        { label: 'Glass Specification', value: 'Saint-Gobain 10mm/12mm Toughened' },
        { label: 'Texture Varieties', value: 'Fluted Reeded, Frosted & Tinted' },
        { label: 'Frame Profile', value: 'Slim 25mm Anodized Black Grid' },
        { label: 'Acoustic Rating', value: 'Up to 36dB Sound Attenuation' }
      ]
    },
    electrical: {
      id: 'electrical',
      title: 'Architectural Electrical & Automation',
      category: 'mep',
      categoryLabel: 'Concealed MEP & Smart Lighting',
      image: 'assets/service-electrical.jpg',
      shortDesc: 'Architectural lighting automation, concealed fire-retardant conduits, designer brass toggle switches, phase load balancing, and magnetic track channels.',
      longDesc: 'Flawless interior design relies entirely on invisible electrical engineering. Our licensed electrical specialists handle complete concealed wiring using fire-retardant copper conductors, designer modular brass/glass switchplates, scene automation controllers, and 3-phase load optimization.',
      specs: [
        { label: 'Conduit & Cabling', value: 'Finolex / Polycab FRLS Copper' },
        { label: 'Switch Plates', value: 'Legrand Arteor & Norisys Luxury' },
        { label: 'Protection', value: 'Schneider Electric RCBO & SPD' },
        { label: 'Smart Integration', value: 'Alexa/HomeKit Smart Lighting Dimmers' }
      ]
    },
    plumbing: {
      id: 'plumbing',
      title: 'Home Automation & Smart Works',
      category: 'mep',
      categoryLabel: 'Smart Living & Automation',
      image: 'assets/service-plumbing.jpg',
      shortDesc: 'Intelligent scene lighting, automated motorized curtains, smart security access, sensor-driven climate integration, and seamless IoT control for modern luxury residences.',
      longDesc: 'Elevate your residence with integrated smart living architecture. From mood-adaptive smart lighting scenes and motorized acoustic curtain tracks to biometric entry systems, touch-glass switch panels, and voice-controlled smart home automation hubs tailored for villas, penthouses, and luxury residences.',
      specs: [
        { label: 'Protocols Supported', value: 'Zigbee 3.0, Matter, Wi-Fi 6, KNX' },
        { label: 'Lighting Control', value: '0-10V Dimmable & CCT Tunable LED Drivers' },
        { label: 'Motorized Fenestration', value: 'Whisper-Quiet Somfy / Tuya Track Systems' },
        { label: 'Security & Access', value: 'Biometric Smart Mortise Locks & IP Video Intercoms' }
      ]
    },
    upvc: {
      id: 'upvc',
      title: 'Acoustic UPVC Windows & Panoramic Doors',
      category: 'mep',
      categoryLabel: 'Acoustic & Weather-Proof Fenestration',
      image: 'assets/service-upvc.jpg',
      shortDesc: 'High-performance multi-chamber UPVC windows and panoramic sliding doors featuring double-glazed acoustic glass, thermal insulation, and multi-point locks.',
      longDesc: 'Shield your interiors from urban noise, monsoon downpours, and harsh summer heat. Our precision-welded multi-chamber UPVC window systems include double-glazed hermetically sealed DGU glass, EPDM weather gaskets, galvanized steel inner reinforcement, and multi-point perimeter security locks.',
      specs: [
        { label: 'Profile System', value: 'German Multi-Chamber UPVC Profile' },
        { label: 'Glass Configuration', value: 'Double Glazed (5mm + 12A + 5mm DGU)' },
        { label: 'Gasket Sealing', value: 'Dual-Layer UV Resistant EPDM' },
        { label: 'Noise Reduction', value: 'Blocks Up to 40dB City Sound' }
      ]
    }
  };

  // ==========================================================================
  // DATA MODEL: PROJECTS (Prepared for Future Database / Admin Dashboard)
  // ==========================================================================
  const PROJECTS_DATA = [
    {
      id: 'proj-1',
      title: 'The Ivory Contemporary Suite',
      category: 'living',
      categoryLabel: 'Living Rooms',
      image: 'assets/hero-living.jpg',
      craftTags: ['Fluted Oak Paneling', 'Warm Cove Troughs', 'Marble TV Unit'],
      location: 'Financial District, Hyderabad',
      scope: 'Complete Living Room Turnkey Architecture',
      duration: '45 Days',
      materials: 'Natural Oak Wood, Statuario Marble, 3000K LED Cove',
      desc: 'A serene contemporary living environment characterized by vertical fluted oak paneling, integrated warm amber cove lighting, custom floating credenza, and minimal architectural furniture tailored for quiet family luxury.'
    },
    {
      id: 'proj-2',
      title: 'The Grand Penthouse Sanctuary',
      category: 'living',
      categoryLabel: 'Living Rooms',
      image: 'assets/project-living-grand.jpg',
      craftTags: ['Double-Height Wall', 'Bookmatched Marble', 'Brass Accents'],
      location: 'Jubilee Hills, Hyderabad',
      scope: 'Penthouse Main Salon & Media Lounge',
      duration: '60 Days',
      materials: 'Italian Calacatta Marble, Champagne Brass, Linen Velvet',
      desc: 'An opulent double-height penthouse salon featuring seamless full-slab bookmatched marble fireplace wall, acoustic ceiling baffle details, custom brass chandeliers, and floor-to-ceiling panoramic sliding doors.'
    },
    {
      id: 'proj-3',
      title: 'Contemporary Master Retreat',
      category: 'bedrooms',
      categoryLabel: 'Bedrooms',
      image: 'assets/project-bedroom.jpg',
      craftTags: ['Cushioned Headboard', 'Hidden LEDs', 'Acoustic Wood Slats'],
      location: 'Gachibowli, Hyderabad',
      scope: 'Master Bedroom & Private Dressing Space',
      duration: '35 Days',
      materials: 'Italian Suede, Walnut Slats, Dimmable Warm Lighting',
      desc: 'An intimate master bedroom sanctuary prioritizing soothing tactile materiality, acoustic sound absorption, bespoke bedside cantilever shelves, and customized floating bed base with concealed perimeter night glow.'
    },
    {
      id: 'proj-4',
      title: 'The Olive & Marble Chef’s Kitchen',
      category: 'kitchens',
      categoryLabel: 'Modular Kitchens',
      image: 'assets/project-kitchen.jpg',
      craftTags: ['Matte Olive Acrylic', 'Quartz Waterfall', 'Blum Servo-Drive'],
      location: 'Kokapet, Hyderabad',
      scope: 'Open-Concept Modular Kitchen & Island',
      duration: '30 Days',
      materials: 'Marine Ply 710, Calacatta Quartz, Blum Hardware',
      desc: 'A bespoke chef-grade culinary space pairing matte olive anti-fingerprint acrylic cabinetry with a dramatic white quartz waterfall island, concealed pantry pull-outs, and under-cabinet illumination.'
    },
    {
      id: 'proj-5',
      title: 'Bespoke Walk-In Dressing Suite',
      category: 'cupboards',
      categoryLabel: 'Cupboards',
      image: 'assets/service-wardrobe.jpg',
      craftTags: ['Tinted Glass Shutters', 'Fluted Drawers', 'Profile Lighting'],
      location: 'Banjara Hills, Hyderabad',
      scope: 'Walk-In Wardrobe & Vanity Unit',
      duration: '25 Days',
      materials: 'BWP Marine Ply, Smoked Bronze Glass, Champagne Trim',
      desc: 'A boutique luxury wardrobe suite engineered with illuminated aluminum-framed tinted glass shutters, customized watch and jewelry velvet organizers, and automated sensor-driven LED wardrobe rail.'
    },
    {
      id: 'proj-6',
      title: 'Layered Cove Architectural Residence',
      category: 'ceilings',
      categoryLabel: 'False Ceilings',
      image: 'assets/service-ceiling.jpg',
      craftTags: ['Saint-Gobain Gyproc', 'Magnetic Tracks', 'Zero Snag Flush'],
      location: 'Madhapur, Hyderabad',
      scope: 'Whole-Home Architectural False Ceilings',
      duration: '20 Days',
      materials: 'Gyproc Boards, Magnetic Track Rails, Concealed AC Vents',
      desc: 'A comprehensive false ceiling commission featuring perimeter negative reveals, laser-calibrated flush magnetic lighting channels, and seamless integration of concealed VRV air conditioning supply diffusers.'
    },
    {
      id: 'proj-7',
      title: 'Astor Executive Corporate Suites',
      category: 'commercial',
      categoryLabel: 'Commercial Interiors',
      image: 'assets/project-commercial.jpg',
      craftTags: ['Acoustic Slats', 'Marble Reception', 'Glazed Executive Rooms'],
      location: 'Hitec City, Hyderabad',
      scope: 'Executive Corporate Headquarters Interior',
      duration: '50 Days',
      materials: 'Fluted American Walnut, Italian Marble Desk, Acoustic Glass',
      desc: 'A prestigious boutique commercial corporate interior incorporating fluted American walnut wall cladding, acoustic slatted ceilings, a sculptural bookmatched marble reception desk, and sound-insulated executive boardrooms.'
    },
    {
      id: 'proj-8',
      title: 'Fluted Glass Atelier Partition',
      category: 'commercial',
      categoryLabel: 'Commercial Interiors / Partitions',
      image: 'assets/service-glass.jpg',
      craftTags: ['12mm Reeded Glass', 'Matte Black Aluminum', 'Pivot Door'],
      location: 'Vijayawada, Andhra Pradesh',
      scope: 'Conference & Executive Spatial Divider',
      duration: '15 Days',
      materials: 'Saint-Gobain Reeded Glass, Anodized Structural Aluminum',
      desc: 'Architectural fluted glass partition wall that diffuses light beautifully while maintaining absolute visual privacy and acoustic damping for a high-end private client office.'
    }
  ];

  // ==========================================================================
  // 1. CINEMATIC WELCOME INTRO VIDEO EXPERIENCE (Responsive Desktop & Mobile)
  // Assets: Desktop (welcome-video-desktop.mp4), Mobile (welcome-video-mobile.mp4)
  // ==========================================================================
  const welcomeIntro = document.getElementById('welcomeIntro');
  const introVideo = document.getElementById('introVideo');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const introAudioToggle = document.getElementById('introAudioToggle');
  const introProgressFill = document.getElementById('introProgressFill');
  const footerReplayBtn = document.getElementById('footerReplayBtn');

  let isIntroActive = true;
  let introFallbackTimer = null;
  let introMaxDurationTimer = null;

  // Determine optimal video asset based on device viewport and orientation
  // Prevents downloading both desktop and mobile assets simultaneously
  function getAppropriateVideoSrc() {
    const isMobilePortrait = window.matchMedia('(max-width: 768px), (orientation: portrait) and (max-width: 820px)').matches;
    return isMobilePortrait
      ? 'assets/welcome-video-mobile.mp4'
      : 'assets/welcome-video-desktop.mp4';
  }

  function closeWelcomeIntro(immediate = false) {
    if (!isIntroActive && !immediate) return;
    isIntroActive = false;

    if (introFallbackTimer) clearTimeout(introFallbackTimer);
    if (introMaxDurationTimer) clearTimeout(introMaxDurationTimer);

    if (!welcomeIntro) return;

    if (immediate) {
      welcomeIntro.classList.add('intro-hidden');
      try {
        if (introVideo) introVideo.pause();
      } catch (e) {}
    } else {
      welcomeIntro.classList.add('closing');
      setTimeout(() => {
        try {
          if (introVideo) introVideo.pause();
        } catch (e) {}
        welcomeIntro.classList.add('intro-hidden');
      }, 1100);
    }

    try {
      sessionStorage.setItem('kusalava_intro_watched', 'true');
    } catch (e) {}
  }

  function updateAudioButtonUI(isUnmuted) {
    if (!introAudioToggle) return;
    if (isUnmuted) {
      introAudioToggle.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      introAudioToggle.setAttribute('title', 'Mute Sound');
      introAudioToggle.setAttribute('aria-label', 'Mute Sound');
    } else {
      introAudioToggle.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      introAudioToggle.setAttribute('title', 'Unmute Sound');
      introAudioToggle.setAttribute('aria-label', 'Unmute Sound');
    }
  }

  function startWelcomeExperience() {
    if (!welcomeIntro || !introVideo) return;

    // 1. Accessibility: Check if visitor prefers reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      closeWelcomeIntro(true);
      return;
    }

    // 2. Session check: Do not replay repeatedly once visitor enters homepage
    const hasSeenIntro = sessionStorage.getItem('kusalava_intro_watched');
    if (hasSeenIntro === 'true') {
      welcomeIntro.classList.add('intro-hidden');
      isIntroActive = false;
      return;
    }

    isIntroActive = true;
    welcomeIntro.classList.remove('intro-hidden', 'closing');

    // 3. Selective Single-Asset Loading (Loads ONLY mobile OR desktop video)
    const targetSrc = getAppropriateVideoSrc();
    const currentSrc = introVideo.getAttribute('src') || '';
    if (!currentSrc.includes(targetSrc)) {
      introVideo.src = targetSrc;
      introVideo.load();
    }

    introVideo.currentTime = 0;
    introVideo.muted = true;
    introVideo.playsInline = true;
    updateAudioButtonUI(false);

    if (introProgressFill) {
      introProgressFill.style.width = '0%';
    }

    // 4. Autoplay with Graceful Promise Handling
    const playPromise = introVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Autoplay prevented or deferred by browser policy:', err);
        // Retry muted playback immediately
        introVideo.muted = true;
        introVideo.play().catch(() => {
          // If strictly blocked, fallback gently to homepage
          closeWelcomeIntro();
        });
      });
    }

    // 5. Video Progress Bar Update
    introVideo.ontimeupdate = () => {
      if (introVideo.duration && introProgressFill) {
        const pct = (introVideo.currentTime / introVideo.duration) * 100;
        introProgressFill.style.width = `${pct}%`;
      }
    };

    // 6. Video Completion Transition: Play full 10 seconds, then hold completed logo on screen for 1 second before revealing website
    introVideo.onended = () => {
      if (introProgressFill) introProgressFill.style.width = '100%';
      setTimeout(() => {
        closeWelcomeIntro(false);
      }, 1000);
    };

    // 7. Watchdog Timer 1: Fallback only if video is completely blocked or stalled for 8 seconds without starting
    introFallbackTimer = setTimeout(() => {
      if (isIntroActive && (introVideo.paused || introVideo.currentTime === 0)) {
        console.warn('Video stalled or failed to start playback. Smoothly revealing website...');
        closeWelcomeIntro(false);
      }
    }, 8000);

    // 8. Watchdog Timer 2: Absolute safety cap (20 seconds) scheduled ONLY AFTER playback actually begins
    introVideo.onplaying = () => {
      if (introFallbackTimer) clearTimeout(introFallbackTimer);
      if (introMaxDurationTimer) clearTimeout(introMaxDurationTimer);
      introMaxDurationTimer = setTimeout(() => {
        if (isIntroActive) {
          closeWelcomeIntro(false);
        }
      }, 20000);
    };
  }

  // Audio Toggle Button
  if (introAudioToggle && introVideo) {
    introAudioToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      introVideo.muted = !introVideo.muted;
      updateAudioButtonUI(!introVideo.muted);
    });
  }

  // Skip Intro Button (Click & Keyboard Enter/Space)
  if (skipIntroBtn) {
    skipIntroBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeWelcomeIntro(false);
    });
    skipIntroBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeWelcomeIntro(false);
      }
    });
  }

  // Handle Dynamic Device Orientation or Window Resize (Preserves Video State)
  let resizeDebounce = null;
  window.addEventListener('resize', () => {
    if (!isIntroActive || !introVideo) return;
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(() => {
      const correctSrc = getAppropriateVideoSrc();
      const currentSrc = introVideo.getAttribute('src') || '';
      if (!currentSrc.includes(correctSrc)) {
        const currentTime = introVideo.currentTime;
        introVideo.src = correctSrc;
        introVideo.load();
        introVideo.currentTime = currentTime;
        introVideo.play().catch(() => {});
      }
    }, 250);
  });

  // Footer Replay Intro Button
  if (footerReplayBtn) {
    footerReplayBtn.addEventListener('click', () => {
      sessionStorage.removeItem('kusalava_intro_watched');
      startWelcomeExperience();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Trigger Welcome Experience on Page Load
  startWelcomeExperience();

  // ==========================================================================
  // 2. STICKY NAVBAR SCROLL BLUR & ACTIVE SECTION SCROLL SPY
  // ==========================================================================
  const siteHeader = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('main section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-25% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(sec => scrollSpyObserver.observe(sec));

  // ==========================================================================
  // 3. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function openDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer || !drawerBackdrop) return;
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ==========================================================================
  // 4. SERVICES CATEGORY FILTER TABS
  // ==========================================================================
  const serviceFilterButtons = document.querySelectorAll('[data-service-filter]');
  const serviceCards = document.querySelectorAll('.service-card');

  serviceFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-service-filter');

      serviceCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 5. PROJECTS PORTFOLIO RENDERING & CATEGORY FILTERING
  // ==========================================================================
  const projectsGridContainer = document.getElementById('projectsGridContainer');
  const projectFilterButtons = document.querySelectorAll('[data-project-filter]');

  function renderProjects(categoryFilter = 'all') {
    if (!projectsGridContainer) return;
    projectsGridContainer.innerHTML = '';

    const filtered = categoryFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === categoryFilter);

    filtered.forEach(proj => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.setAttribute('data-project-id', proj.id);
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="project-card-image-wrap">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
          <div class="project-card-overlay">
            <span class="project-overlay-pill">View Project Details</span>
          </div>
        </div>
        <div class="project-card-details">
          <span class="project-category-tag">${proj.categoryLabel}</span>
          <h3 class="project-card-title">${proj.title}</h3>
          <div class="project-craft-tags">
            ${proj.craftTags.map(tag => `<span class="craft-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(proj.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProjectModal(proj.id);
        }
      });

      projectsGridContainer.appendChild(card);
    });
  }

  // Initial projects render
  renderProjects('all');

  projectFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-project-filter');
      renderProjects(cat);
    });
  });

  // ==========================================================================
  // 6. SERVICE DETAIL MODAL HANDLER
  // ==========================================================================
  const serviceModalOverlay = document.getElementById('serviceModalOverlay');
  const serviceModalCloseBtn = document.getElementById('serviceModalCloseBtn');
  const modalServiceImg = document.getElementById('modalServiceImg');
  const modalServiceCategory = document.getElementById('modalServiceCategory');
  const modalServiceTitle = document.getElementById('modalServiceTitle');
  const modalServiceDesc = document.getElementById('modalServiceDesc');
  const modalServiceSpecs = document.getElementById('modalServiceSpecs');
  const modalServiceWaBtn = document.getElementById('modalServiceWaBtn');
  const modalServiceInquireBtn = document.getElementById('modalServiceInquireBtn');

  function openServiceModal(serviceKey) {
    const data = SERVICES_DATA[serviceKey];
    if (!data || !serviceModalOverlay) return;

    modalServiceImg.src = data.image;
    modalServiceImg.alt = data.title;
    modalServiceCategory.textContent = data.categoryLabel;
    modalServiceTitle.textContent = data.title;
    modalServiceDesc.textContent = data.longDesc;

    modalServiceSpecs.innerHTML = data.specs.map(s => `
      <div class="spec-item">
        <h6>${s.label}</h6>
        <p>${s.value}</p>
      </div>
    `).join('');

    const waMsg = encodeURIComponent(`Hello Kusalava Interiors, I would like to inquire about your ${data.title} service.`);
    modalServiceWaBtn.href = `https://wa.me/917287891945?text=${waMsg}`;

    modalServiceInquireBtn.onclick = () => {
      closeServiceModal();
      const formServiceSelect = document.getElementById('formService');
      if (formServiceSelect) {
        for (let i = 0; i < formServiceSelect.options.length; i++) {
          if (formServiceSelect.options[i].text.toLowerCase().includes(data.title.toLowerCase()) ||
              formServiceSelect.options[i].value.toLowerCase().includes(data.title.toLowerCase())) {
            formServiceSelect.selectedIndex = i;
            break;
          }
        }
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    serviceModalOverlay.classList.add('active');
    serviceModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeServiceModal() {
    if (!serviceModalOverlay) return;
    serviceModalOverlay.classList.remove('active');
    serviceModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal-service]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.getAttribute('data-modal-service');
      openServiceModal(key);
    });
  });

  if (serviceModalCloseBtn) {
    serviceModalCloseBtn.addEventListener('click', closeServiceModal);
  }

  if (serviceModalOverlay) {
    serviceModalOverlay.addEventListener('click', (e) => {
      if (e.target === serviceModalOverlay) closeServiceModal();
    });
  }

  // ==========================================================================
  // 7. PROJECT LIGHTBOX MODAL HANDLER
  // ==========================================================================
  const projectModalOverlay = document.getElementById('projectModalOverlay');
  const projectModalCloseBtn = document.getElementById('projectModalCloseBtn');
  const modalProjectImg = document.getElementById('modalProjectImg');
  const modalProjectCategory = document.getElementById('modalProjectCategory');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalProjectSpecs = document.getElementById('modalProjectSpecs');
  const modalProjectWaBtn = document.getElementById('modalProjectWaBtn');
  const modalProjectInquireBtn = document.getElementById('modalProjectInquireBtn');

  function openProjectModal(projectId) {
    const proj = PROJECTS_DATA.find(p => p.id === projectId);
    if (!proj || !projectModalOverlay) return;

    modalProjectImg.src = proj.image;
    modalProjectImg.alt = proj.title;
    modalProjectCategory.textContent = proj.categoryLabel;
    modalProjectTitle.textContent = proj.title;
    modalProjectDesc.textContent = proj.desc;

    modalProjectSpecs.innerHTML = `
      <div class="spec-item">
        <h6>Location</h6>
        <p>${proj.location}</p>
      </div>
      <div class="spec-item">
        <h6>Execution Scope</h6>
        <p>${proj.scope}</p>
      </div>
      <div class="spec-item">
        <h6>Turnaround Time</h6>
        <p>${proj.duration}</p>
      </div>
      <div class="spec-item">
        <h6>Primary Materials</h6>
        <p>${proj.materials}</p>
      </div>
    `;

    const waMsg = encodeURIComponent(`Hello Kusalava Interiors, I was viewing "${proj.title}" on your website and would like to build a similar interior.`);
    modalProjectWaBtn.href = `https://wa.me/917287891945?text=${waMsg}`;

    modalProjectInquireBtn.onclick = () => {
      closeProjectModal();
      const msgField = document.getElementById('formMessage');
      if (msgField) {
        msgField.value = `I am interested in an interior aesthetic similar to your "${proj.title}" (${proj.categoryLabel}).`;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    projectModalOverlay.classList.add('active');
    projectModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModalOverlay) return;
    projectModalOverlay.classList.remove('active');
    projectModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (projectModalCloseBtn) {
    projectModalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModalOverlay) {
    projectModalOverlay.addEventListener('click', (e) => {
      if (e.target === projectModalOverlay) closeProjectModal();
    });
  }

  // Global Escape key to close any active modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeServiceModal();
      closeProjectModal();
      closeDrawer();
    }
  });

  // ==========================================================================
  // 8. INTERACTIVE COST ESTIMATOR LOGIC
  // ==========================================================================
  const propPills = document.querySelectorAll('.prop-pill');
  const serviceCheckboxes = document.querySelectorAll('.services-toggle-grid input[type="checkbox"]');
  const estPriceDisplay = document.getElementById('estPriceDisplay');
  const estSelectionSummary = document.getElementById('estSelectionSummary');
  const sendEstimateBtn = document.getElementById('sendEstimateBtn');

  let currentBaseRate = 350000;
  let currentPropertyLabel = '2 BHK Apartment';

  function calculateEstimate() {
    let addOnsTotal = 0;
    const selectedCrafts = [];

    serviceCheckboxes.forEach(chk => {
      const parentLabel = chk.closest('.toggle-pill-label');
      if (chk.checked) {
        if (parentLabel) parentLabel.classList.add('active');
        addOnsTotal += parseInt(chk.getAttribute('data-addon') || '0', 10);
        selectedCrafts.push(chk.value);
      } else {
        if (parentLabel) parentLabel.classList.remove('active');
      }
    });

    const totalMin = currentBaseRate + addOnsTotal;
    const totalMax = Math.round(totalMin * 1.25);

    const toLakhs = (amt) => (amt / 100000).toFixed(2);

    if (estPriceDisplay) {
      estPriceDisplay.textContent = `₹ ${toLakhs(totalMin)} - ${toLakhs(totalMax)} Lakhs*`;
    }

    if (estSelectionSummary) {
      estSelectionSummary.textContent = `${currentPropertyLabel} • ${selectedCrafts.length} Crafts Selected`;
    }

    return {
      property: currentPropertyLabel,
      crafts: selectedCrafts,
      estimateRange: `₹ ${toLakhs(totalMin)} - ${toLakhs(totalMax)} Lakhs`
    };
  }

  if (propPills && propPills.length > 0) {
    propPills.forEach(pill => {
      pill.addEventListener('click', () => {
        propPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentBaseRate = parseInt(pill.getAttribute('data-rate') || '350000', 10);
        currentPropertyLabel = pill.getAttribute('data-label') || '2 BHK Apartment';
        calculateEstimate();
      });
    });

    serviceCheckboxes.forEach(chk => {
      chk.addEventListener('change', calculateEstimate);
    });

    calculateEstimate();
  }

  if (sendEstimateBtn) {
    sendEstimateBtn.addEventListener('click', () => {
      const est = calculateEstimate();
      const message = `Hello Kusalava Interiors,\n\nI calculated a project investment estimate on your website:\n\n• Configuration: ${est.property}\n• Crafts Selected: ${est.crafts.join(', ')}\n• Estimated Range: ${est.estimateRange}\n\nPlease let me know when Pavan Kumar or Surya can schedule an on-site evaluation.`;
      const pavanPhone = '917287891945';
      window.open(`https://wa.me/${pavanPhone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  // ==========================================================================
  // 9. CONTACT FORM DISPATCH (EmailJS + WhatsApp Lead Integration)
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formStatusMsg = document.getElementById('formStatusMsg');

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_yfhu67s';
  const EMAILJS_TEMPLATE_ID = 'template_8ap4yhi';
  const EMAILJS_PUBLIC_KEY = 'fc1711pKAFGrtgxTc';

  async function sendConsultationEmail(templateParams) {
    // 1. Try via official browser SDK if loaded
    if (window.emailjs && typeof window.emailjs.send === 'function') {
      return window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
    }
    // 2. Direct HTTPS REST API fallback (guarantees delivery even if CDN is blocked)
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: templateParams
      })
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText || 'Email delivery failed');
    }
    return res;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const firstName = (document.getElementById('formFirstName')?.value || '').trim();
      const lastName = (document.getElementById('formLastName')?.value || '').trim();
      const phone = (document.getElementById('formPhone')?.value || '').trim();
      const email = (document.getElementById('formEmail')?.value || '').trim();
      const service = document.getElementById('formService')?.value || 'Complete Turnkey Interior';
      const location = (document.getElementById('formLocation')?.value || '').trim();
      const message = (document.getElementById('formMessage')?.value || '').trim();

      if (!firstName || !phone) {
        if (formStatusMsg) {
          formStatusMsg.textContent = 'Please provide at least your Name and Phone Number.';
          formStatusMsg.style.color = '#e74c3c';
        }
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        const btnSpan = submitBtn.querySelector('span');
        if (btnSpan) btnSpan.textContent = 'Sending Message...';
      }

      if (formStatusMsg) {
        formStatusMsg.textContent = 'Sending your consultation details to our studio...';
        formStatusMsg.style.color = '#c5a059';
      }

      // Map exactly to EmailJS template variables
      const templateParams = {
        first_name: firstName,
        last_name: lastName || '',
        phone_number: phone,
        email_address: email || 'Not provided',
        primary_craft: service,
        project_location: location || 'Hyderabad / Andhra Pradesh',
        project_requirements: message || 'Turnkey interior design inquiry',
        // Helpful alias keys for template resilience
        client_name: `${firstName} ${lastName}`.trim(),
        phone: phone,
        email: email || 'Not provided',
        reply_to: email || 'Kusalavainteriors@gmail.com',
        service: service,
        location: location || 'Hyderabad / Andhra Pradesh',
        message: message || 'Turnkey interior design inquiry'
      };

      try {
        await sendConsultationEmail(templateParams);

        if (formStatusMsg) {
          formStatusMsg.textContent = '✓ Message sent successfully! Redirecting...';
          formStatusMsg.style.color = '#c5a059';
        }

        contactForm.reset();

        // Redirect to dedicated Thank You confirmation page
        setTimeout(() => {
          window.location.href = '/thank-you/';
        }, 800);

      } catch (err) {
        console.error('EmailJS delivery error:', err);

        if (formStatusMsg) {
          formStatusMsg.textContent = 'Message could not be sent. Please call our team directly at +91 72878 91945 or +91 91827 84945.';
          formStatusMsg.style.color = '#e74c3c';
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHTML;
        }
      }
    });
  }

  // ==========================================================================
  // 10. CURRENT YEAR IN FOOTER
  // ==========================================================================
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});


  // ==========================================================================
  // HERO SECTION BACKGROUND VIDEO (Desktop & Mobile Responsive Loop)
  // ==========================================================================
  const heroBgVideo = document.getElementById('heroBgVideo');
  if (heroBgVideo) {
    function setupHeroBgVideo() {
      const isMobile = window.matchMedia('(max-width: 768px), (orientation: portrait) and (max-width: 820px)').matches;
      const targetSrc = isMobile ? 'assets/Home-video-mobile.mp4' : 'assets/Home-video-desktop.mp4';
      const currentSrc = heroBgVideo.getAttribute('src') || '';
      if (!currentSrc.includes(targetSrc)) {
        heroBgVideo.src = targetSrc;
        heroBgVideo.load();
      }
      heroBgVideo.muted = true;
      heroBgVideo.playsInline = true;
      heroBgVideo.loop = true;
      heroBgVideo.play().catch(() => {});
    }
    setupHeroBgVideo();

    let heroResizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(heroResizeTimer);
      heroResizeTimer = setTimeout(setupHeroBgVideo, 300);
    });
  }
