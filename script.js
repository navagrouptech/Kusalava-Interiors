/* ==========================================================================
   KUSALAVA INTERIORS - INTERACTIVE LOGIC & MODERN ENHANCEMENTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      
      // Animate hamburger lines
      const spans = menuToggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile nav when clicking any link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 2. Active Section Spy on Scroll
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));

  // 3. Dynamic Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 4. Services Filter Tabs
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-lux-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      serviceCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Service Card "Enquire Service" Click -> Auto-select in form
  const serviceDropdown = document.getElementById('formService');
  document.querySelectorAll('[data-service-select]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedService = btn.getAttribute('data-service-select');
      if (serviceDropdown && selectedService) {
        for (let i = 0; i < serviceDropdown.options.length; i++) {
          if (serviceDropdown.options[i].text.includes(selectedService) || serviceDropdown.options[i].value.includes(selectedService)) {
            serviceDropdown.selectedIndex = i;
            break;
          }
        }
      }
    });
  });

  // 6. Interactive Cost Estimator
  const radioPills = document.querySelectorAll('.radio-pill');
  const checkPills = document.querySelectorAll('.check-pill input');
  const priceDisplay = document.getElementById('calcPriceDisplay');
  const selectedLabel = document.getElementById('calcSelectedLabel');
  const sendEstimateBtn = document.getElementById('sendEstimateBtn');

  let currentBaseRate = 350000;
  let currentPropertyLabel = '2 BHK Apartment';

  function updateEstimate() {
    let addOnsTotal = 0;
    let selectedServicesList = [];

    checkPills.forEach(chk => {
      const parentLabel = chk.closest('.check-pill');
      if (chk.checked) {
        parentLabel.classList.add('active');
        addOnsTotal += parseInt(chk.getAttribute('data-addon') || '0', 10);
        selectedServicesList.push(chk.value);
      } else {
        parentLabel.classList.remove('active');
      }
    });

    const totalMin = currentBaseRate + addOnsTotal;
    const totalMax = Math.round(totalMin * 1.25);

    const formatLakhs = (amt) => {
      const inLakhs = amt / 100000;
      return `₹ ${inLakhs.toFixed(2)} Lakhs`;
    };

    if (priceDisplay) {
      priceDisplay.innerHTML = `${formatLakhs(totalMin)} &ndash; ${formatLakhs(totalMax)}*`;
    }

    if (selectedLabel) {
      selectedLabel.textContent = `Selected: ${currentPropertyLabel} with ${selectedServicesList.length} services`;
    }

    return {
      property: currentPropertyLabel,
      services: selectedServicesList,
      estimateRange: `${formatLakhs(totalMin)} - ${formatLakhs(totalMax)}`
    };
  }

  radioPills.forEach(pill => {
    pill.addEventListener('click', () => {
      radioPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentBaseRate = parseInt(pill.getAttribute('data-rate') || '350000', 10);
      currentPropertyLabel = pill.getAttribute('data-label') || pill.textContent.trim();
      updateEstimate();
    });
  });

  checkPills.forEach(chk => {
    chk.addEventListener('change', updateEstimate);
  });

  // Initialize calculation on load
  updateEstimate();

  // Send Estimate to WhatsApp
  if (sendEstimateBtn) {
    sendEstimateBtn.addEventListener('click', () => {
      const data = updateEstimate();
      const message = `Hello Kusalava Interiors,\n\nI calculated a project estimate on your website:\n\n• Property Type: ${data.property}\n• Services Selected: ${data.services.join(', ')}\n• Estimated Range: ${data.estimateRange}\n\nPlease let me know when we can arrange a site visit or detailed discussion.`;
      const phone = '919949287105';
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    });
  }

  // 7. Contact Form WhatsApp Handler
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = fd.get('name') || '';
      const phoneNum = fd.get('phone') || '';
      const service = fd.get('service') || 'General Enquiry';
      const location = fd.get('location') || 'Not specified';
      const userMessage = fd.get('message') || 'I would like to discuss an interior project.';

      const waText = `Hello Kusalava Interiors,\n\nI would like to schedule a consultation:\n\n• Name: ${name}\n• Phone: ${phoneNum}\n• Primary Service: ${service}\n• Location: ${location}\n• Project Details: ${userMessage}`;
      
      const pavanPhone = '919949287105';
      window.open(`https://wa.me/${pavanPhone}?text=${encodeURIComponent(waText)}`, '_blank');

      if (formNote) {
        formNote.textContent = 'Opening WhatsApp with your project enquiry details...';
        formNote.style.color = '#dec38a';
      }

      contactForm.reset();
      setTimeout(() => {
        if (formNote) formNote.textContent = '';
      }, 7000);
    });
  }

  // 8. Fullscreen Welcome Intro Video (Pure video playback with song & auto-reveal)
  const welcomeIntro = document.getElementById('welcomeIntro');
  const introVideo = document.getElementById('introVideo');

  if (welcomeIntro && introVideo) {
    let isIntroActive = true;

    function openWebsite() {
      if (!isIntroActive) return;
      isIntroActive = false;

      welcomeIntro.classList.add('closing');
      document.body.classList.remove('intro-active');
      document.body.classList.add('intro-revealed');

      setTimeout(() => {
        try {
          introVideo.pause();
        } catch (err) {}
        welcomeIntro.classList.add('intro-hidden');
      }, 750);
    }

    // Set initial audio volume
    introVideo.volume = 1.0;
    introVideo.muted = false;

    // Start video playback with sound (song)
    const playVideo = () => {
      introVideo.muted = false;
      const playPromise = introVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // If browser policy blocks unmuted autoplay on initial load without user interaction,
          // play with mute and unmute immediately on the user's first touch/click anywhere
          console.log('Autoplay unmuted deferred by browser policy. Playing and unmuting on first user touch:', err);
          introVideo.muted = true;
          introVideo.play().catch(() => {});

          const unmuteOnGesture = () => {
            introVideo.muted = false;
            introVideo.volume = 1.0;
            window.removeEventListener('click', unmuteOnGesture);
            window.removeEventListener('touchstart', unmuteOnGesture);
            window.removeEventListener('keydown', unmuteOnGesture);
          };
          window.addEventListener('click', unmuteOnGesture, { once: true });
          window.addEventListener('touchstart', unmuteOnGesture, { once: true });
          window.addEventListener('keydown', unmuteOnGesture, { once: true });
        });
      }
    };

    // When the video finishes playing -> automatically open the website!
    introVideo.addEventListener('ended', () => {
      openWebsite();
    });

    // Start playback immediately on page load
    playVideo();
  }
});
