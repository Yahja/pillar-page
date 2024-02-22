'use-stric';

function scrollProgressBard(){
  const scrollProgress = document.getElementById('scroll-progress');
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  });
}

function toggleNavMobile() {
  var getNav = document.querySelector('.main-nav');
  var getButton = document.querySelector('.header-menu-mobile-toggle');
  if (getNav.style.display === 'block') {
    getNav.style.display = 'none';
  } else {
    getNav.style.display = 'block';
  }
  getButton.classList.toggle('open');
}

scrollProgressBard();