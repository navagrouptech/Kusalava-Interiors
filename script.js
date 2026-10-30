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

  // 8. Cinematic Welcome Intro Video Experience
  const welcomeIntro = document.getElementById('welcomeIntro');
  const introVideo = document.getElementById('introVideo');
  const introAudioBtn = document.getElementById('introAudioBtn');
  const audioLabel = document.getElementById('audioLabel');
  const introPlayPauseBtn = document.getElementById('introPlayPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const playPauseLabel = document.getElementById('playPauseLabel');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const quickEnterLink = document.getElementById('quickEnterLink');
  const introProgressFill = document.getElementById('introProgressFill');
  const introProgressTrack = document.getElementById('introProgressTrack');
  const introCurrentTime = document.getElementById('introCurrentTime');
  const introDuration = document.getElementById('introDuration');
  const heroReplayVideoBtn = document.getElementById('heroReplayVideoBtn');
  const heroPlayTourBadge = document.getElementById('heroPlayTourBadge');

  if (welcomeIntro && introVideo) {
    let isIntroActive = true;

    // Helper: format seconds to MM:SS
    const formatTime = (secs) => {
      if (isNaN(secs) || secs < 0) return '00:00';
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Transition smoothly into main website
    function openWebsite() {
      if (!isIntroActive) return;
      isIntroActive = false;

      welcomeIntro.classList.add('closing');
      document.body.classList.remove('intro-active');
      document.body.classList.add('intro-revealed');

      setTimeout(() => {
        try {
          introVideo.pause();
        } catch (err) {
          console.warn('Video pause error:', err);
        }
        welcomeIntro.classList.add('intro-hidden');
      }, 850);
    }

    // Replay intro video anytime from website
    function openIntro(withSound = true) {
      isIntroActive = true;
      welcomeIntro.classList.remove('intro-hidden', 'closing');
      document.body.classList.remove('intro-revealed');
      document.body.classList.add('intro-active');

      introVideo.currentTime = 0;
      if (withSound) {
        introVideo.muted = false;
        updateAudioUI(false);
      }
      
      const playPromise = introVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          introVideo.muted = true;
          updateAudioUI(true);
          introVideo.play();
        });
      }
      updatePlayPauseUI(false);
    }

    // Update audio UI state
    function updateAudioUI(isMuted) {
      if (!introAudioBtn) return;
      const iconMuted = introAudioBtn.querySelector('.icon-muted');
      const iconUnmuted = introAudioBtn.querySelector('.icon-unmuted');

      if (isMuted) {
        if (iconMuted) iconMuted.style.display = 'block';
        if (iconUnmuted) iconUnmuted.style.display = 'none';
        if (audioLabel) audioLabel.textContent = 'Sound: Off';
        introAudioBtn.classList.remove('is-unmuted');
        introAudioBtn.classList.add('pulse-glow');
        introAudioBtn.setAttribute('title', 'Click to Unmute');
      } else {
        if (iconMuted) iconMuted.style.display = 'none';
        if (iconUnmuted) iconUnmuted.style.display = 'block';
        if (audioLabel) audioLabel.textContent = 'Sound: On';
        introAudioBtn.classList.add('is-unmuted');
        introAudioBtn.classList.remove('pulse-glow');
        introAudioBtn.setAttribute('title', 'Click to Mute');
      }
    }

    // Update play/pause UI state
    function updatePlayPauseUI(isPaused) {
      if (!introPlayPauseBtn) return;
      if (isPaused) {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (playPauseLabel) playPauseLabel.textContent = 'Play';
      } else {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (playPauseLabel) playPauseLabel.textContent = 'Pause';
      }
    }

    // Initialize initial state on load
    document.body.classList.add('intro-active');
    introVideo.muted = true; // Required for reliable browser autoplay
    updateAudioUI(true);

    const initialPlay = introVideo.play();
    if (initialPlay !== undefined) {
      initialPlay.then(() => {
        updatePlayPauseUI(false);
      }).catch((err) => {
        console.log('Autoplay deferred until user interaction:', err);
        updatePlayPauseUI(true);
      });
    }

    // When the video finishes playing -> auto open website!
    introVideo.addEventListener('ended', () => {
      openWebsite();
    });

    // Track video time & progress
    introVideo.addEventListener('timeupdate', () => {
      if (!introVideo.duration) return;
      const progressPercent = (introVideo.currentTime / introVideo.duration) * 100;
      if (introProgressFill) {
        introProgressFill.style.width = `${progressPercent}%`;
      }
      if (introCurrentTime) {
        introCurrentTime.textContent = formatTime(introVideo.currentTime);
      }
      if (introDuration) {
        introDuration.textContent = formatTime(introVideo.duration);
      }
    });

    introVideo.addEventListener('loadedmetadata', () => {
      if (introDuration) {
        introDuration.textContent = formatTime(introVideo.duration);
      }
    });

    // Click on progress track to seek
    if (introProgressTrack) {
      introProgressTrack.addEventListener('click', (e) => {
        const rect = introProgressTrack.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        if (introVideo.duration) {
          introVideo.currentTime = pos * introVideo.duration;
        }
      });
    }

    // Sound toggle button click
    if (introAudioBtn) {
      introAudioBtn.addEventListener('click', () => {
        introVideo.muted = !introVideo.muted;
        updateAudioUI(introVideo.muted);
      });
    }

    // Play/Pause button click
    if (introPlayPauseBtn) {
      introPlayPauseBtn.addEventListener('click', () => {
        if (introVideo.paused) {
          introVideo.play();
          updatePlayPauseUI(false);
        } else {
          introVideo.pause();
          updatePlayPauseUI(true);
        }
      });
    }

    // Skip / Enter buttons
    if (skipIntroBtn) {
      skipIntroBtn.addEventListener('click', openWebsite);
    }
    if (quickEnterLink) {
      quickEnterLink.addEventListener('click', openWebsite);
    }

    // Keyboard shortcuts: ESC or Space to skip, M to mute/unmute
    document.addEventListener('keydown', (e) => {
      if (!isIntroActive) return;
      if (e.key === 'Escape' || e.code === 'Space') {
        e.preventDefault();
        openWebsite();
      } else if (e.key === 'm' || e.key === 'M') {
        introVideo.muted = !introVideo.muted;
        updateAudioUI(introVideo.muted);
      }
    });

    // Replay buttons on main website
    if (heroReplayVideoBtn) {
      heroReplayVideoBtn.addEventListener('click', () => openIntro(true));
    }
    if (heroPlayTourBadge) {
      heroPlayTourBadge.addEventListener('click', () => openIntro(true));
    }
  }
});
