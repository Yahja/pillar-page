'use-stric';

// Function scroll progress bar
function scrollProgressBard(){
  const scrollProgress = document.getElementById('scroll-progress');
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
  });
}

function toogleActiveAside(){
  const asideLinks = document.getElementsByClassName('aside-link')

  for (let i = 0; i < asideLinks.length; i++){
    asideLinks[i].addEventListener('click', function(){
      const current = document.getElementsByClassName('active');
      if (current.length > 0){
        current[0].className = current[0].className.replace(' active', '');
      }
      this.className += " active";
    });
  }
}

// Function show and hide menu in mobile version
function toggleNavMobile() {
  const getNav = document.querySelector('.main-nav');
  const getButton = document.querySelector('.header-menu-mobile-toggle');
  
  getNav.classList.toggle('hide');
  getButton.classList.toggle('open');
}

// Function show and hide Aside content links in mobile
function toggleAside(){
  const getAside = document.getElementsByTagName('aside')[0];
  const getBody = document.body;
  const getAsideNav = document.getElementById('asideNav');
  
  getAsideNav.setAttribute('onclick', 'toggleAside()');
  getBody.classList.toggle('disable-scroll');
  getAside.classList.toggle('hide');
  getAsideNav.scrollTop = 0;
}

// Function check the browser viewport and hide elements (like navbar, and sidebar) to the mobile version
function checkViewPort(){
  const getNav = document.querySelector('.main-nav');
  const getAside = document.getElementsByTagName('aside')[0];
  const getIndiceLink = document.querySelector('.guarda-indice-contenuto');
  const getMain = document.getElementsByTagName('main')[0];

  if (window.matchMedia('(max-width: 640px)').matches){
    getNav.classList.add('hide');
  } else if (window.matchMedia('(max-width: 1023px)').matches){
    getIndiceLink.append(getAside);
    getAside.classList.add('hide');
  } else {
    getNav.classList.remove('hide');
    getMain.insertBefore(getAside, getMain.children[0]);
    toogleActiveAside();
  }
}

window.addEventListener('resize', checkViewPort);
checkViewPort();
scrollProgressBard();