(function () {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const revealElements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => observer.observe(el));
})();
