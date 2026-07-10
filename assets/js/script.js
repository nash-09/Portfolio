AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

  // Navbar shrink + active link on scroll
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link-custom');
  const sections = document.querySelectorAll('section[id], section > .container');
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    backToTop.classList.toggle('show', window.scrollY > 400);

    let current = '';
    document.querySelectorAll('section[id], div[id]').forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < 140) current = sec.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link-custom').forEach(l => l.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if (menu.classList.contains('show')) new bootstrap.Collapse(menu).hide();
  }));

  // Certificate Hover Effect
  const certLinks = document.querySelectorAll('.cert-hover-link');
  const certImgPreview = document.getElementById('cert-img-preview');
  const certPdfPreview = document.getElementById('cert-pdf-preview');

  certLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const src = this.getAttribute('data-src');
      if (src.toLowerCase().endsWith('.pdf')) {
        certImgPreview.style.display = 'none';
        certPdfPreview.style.display = 'block';
        certPdfPreview.src = src + "#toolbar=0&navpanes=0&scrollbar=0";
      } else {
        certPdfPreview.style.display = 'none';
        certImgPreview.style.display = 'block';
        certImgPreview.src = src;
      }
    });
  });