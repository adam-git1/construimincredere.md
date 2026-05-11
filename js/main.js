$(function () {

  /* ── Sticky header ─────────────────────────────────────── */
  $(window).on('scroll.header', function () {
    $('#site-header').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

  /* ── Mobile nav ────────────────────────────────────────── */
  $('#burgerBtn').on('click', function () {
    $('#mobileNav').addClass('open');
    $(this).attr('aria-expanded', 'true');
    $('body').css('overflow', 'hidden');
  });

  function closeMobileNav() {
    $('#mobileNav').removeClass('open');
    $('#burgerBtn').attr('aria-expanded', 'false');
    $('body').css('overflow', '');
  }

  $('#mobileClose').on('click', closeMobileNav);
  $('#mobileNav a').on('click', closeMobileNav);

  /* ── Smooth scroll (offset for fixed header) ───────────── */
  $(document).on('click', 'a[href^="#"]', function (e) {
    var href = this.getAttribute('href');
    if (href === '#') return;
    var $target = $(href);
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').animate({ scrollTop: $target.offset().top - 78 }, 580, 'swing');
  });

  /* ── Language switcher ─────────────────────────────────── */
  $(document).on('click', '.lang-btn', function () {
    var lang = $(this).data('lang');
    $('.lang-btn[data-lang="' + lang + '"]').addClass('active')
      .siblings('.lang-btn').removeClass('active');
  });
  $(document).on('click', '.m-lang button', function () {
    var lang = $(this).data('lang');
    $(this).addClass('active').siblings().removeClass('active');
    $('.lang-btn').removeClass('active');
    $('.lang-btn[data-lang="' + lang + '"]').addClass('active');
  });

  /* ── Slider (Owl Carousel 2) ────────────────────────────── */
  $('.owl-slider').owlCarousel({
    items:              1,
    loop:               true,
    autoplay:           true,
    autoplayTimeout:    5000,
    autoplayHoverPause: true,
    smartSpeed:         600,
    nav:                true,
    navText:            ['&#8249;', '&#8250;'],
    dots:               true,
    touchDrag:          true,
    mouseDrag:          false,
    pullDrag:           false,
    lazyLoad:           false,
    rewind:             false,
  });

  /* ── Scroll-reveal animations ──────────────────────────── */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    $('.fade-up, .stagger-children').each(function () { io.observe(this); });
  } else {
    $('.fade-up, .stagger-children').addClass('visible');
  }

});
