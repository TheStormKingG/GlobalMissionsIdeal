(function () {
  'use strict';

  // ----- Modal -----
  const modal = document.getElementById('modal-form');
  if (modal) {
    const openButtons = document.querySelectorAll('[data-modal="form"]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');
    const backdrop = modal.querySelector('.modal__backdrop');

    function openModal() {
      modal.removeAttribute('hidden');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.setAttribute('hidden', '');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    openButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });
    if (backdrop) backdrop.addEventListener('click', closeModal);

    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  // ----- Care section tabs -----
  const careTabs = document.querySelectorAll('.care__tab');
  const careSlides = document.querySelectorAll('.care__slide');

  careTabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      careTabs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-pressed', 'false');
      });
      careSlides.forEach(function (s) {
        s.classList.remove('is-active');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-pressed', 'true');
      if (careSlides[index]) careSlides[index].classList.add('is-active');
    });
  });

  // ----- Parallax / Bestsellers: sync blocks, images, cards -----
  const parallaxLeftBlocks = document.querySelectorAll('.parallax__col--left .parallax__block');
  const parallaxPlaceholders = document.querySelectorAll('.parallax__col--center .parallax__image-placeholder');
  const parallaxCards = document.querySelectorAll('.parallax__col--right .parallax__card');
  const parallaxTitleStrong = document.querySelector('.parallax__title-strong');
  const parallaxLabels = ['whole', 'whole', 'whole'];

  function setParallaxIndex(index) {
    const i = Math.max(0, Math.min(index, 2));
    parallaxLeftBlocks.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
    });
    parallaxPlaceholders.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
    });
    parallaxCards.forEach(function (el, k) {
      el.classList.toggle('is-active', k === i);
    });
    if (parallaxTitleStrong) parallaxTitleStrong.textContent = parallaxLabels[i] || 'body';
  }

  parallaxLeftBlocks.forEach(function (block, index) {
    block.addEventListener('click', function () {
      setParallaxIndex(index);
    });
  });

  // Scroll-based parallax step
  const sectionParallax = document.querySelector('.section--parallax');
  if (sectionParallax) {
    let ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        const rect = sectionParallax.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const sectionHeight = sectionParallax.offsetHeight;
        const scrollRange = sectionHeight - viewHeight;
        if (scrollRange <= 0) {
          ticking = false;
          return;
        }
        const scrollProgress = -rect.top / scrollRange;
        const step = scrollProgress < 0.35 ? 0 : scrollProgress < 0.7 ? 1 : 2;
        setParallaxIndex(step);
        ticking = false;
      });
    });
  }

  // ----- Product Swiper -----
  if (typeof Swiper !== 'undefined') {
    const productSwiper = new Swiper('.product-swiper', {
      slidesPerView: 1.2,
      spaceBetween: 20,
      loop: true,
      speed: 500,
      breakpoints: {
        640: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: '.shop__nav-btn--next',
        prevEl: '.shop__nav-btn--prev',
      },
    });

  }

  // ----- Hero form & footer form (optional: show success)
  document.querySelectorAll('.hero__form, .footer__form, .modal__form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = form.querySelector('input[type="email"]');
      if (emailInput && !emailInput.value.trim()) return;
      // Placeholder: could send to backend or show thank you
      if (form.closest('.modal')) {
        document.getElementById('modal-form').setAttribute('hidden', '');
        document.getElementById('modal-form').setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  });
})();
