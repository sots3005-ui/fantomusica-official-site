// loading
const loadingArea = document.querySelector('#loading');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  loadingArea.animate(
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration:1200,
      delay: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
  loadingText.animate(
    [
      {
        opacity: 1,
        offset: .8
      },
      {
        opacity: 0,
        offset: 1
      },
    ],
    {
      duration: 1200,
      easing: 'ease',
      fill: 'forwards',
    }
  );
});

// smoothSlide
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelector('a[href^="#catch-copy"]');

  anchorLinks.addEventListener('click', e => {
    e.preventDefault();
    const targetElement = document.querySelector('#catch-copy');
    const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
    window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth"
    });
  });
});

// catchCopy
const fantomu = document.querySelector('#fantomu');
const phantom = document.querySelector('#phantom');
const muzika = document.querySelector('#muzika');
const musica = document.querySelector('#musica');
const fadeMotion = {
  duration: 600,
  easing: 'ease',
  fill: 'forwards',
}

fantomu.addEventListener('mouseover', () => {
  fantomu.animate({opacity: [1, 0]}, fadeMotion);
  phantom.animate({opacity: [0, 1]}, fadeMotion);
});
fantomu.addEventListener('mouseout', () => {
  phantom.animate({opacity: [1, 0]}, fadeMotion);
  fantomu.animate({opacity: [0, 1]}, fadeMotion);
});

muzika.addEventListener('mouseover', () => {
  muzika.animate({opacity: [1, 0]}, fadeMotion);
  musica.animate({opacity: [0, 1]}, fadeMotion);
});
muzika.addEventListener('mouseout', () => {
  musica.animate({opacity: [1, 0]}, fadeMotion);
  muzika.animate({opacity: [0, 1]}, fadeMotion);
});


// artists/works
const artists = document.querySelector('#artists-list');
const works = document.querySelector('#works-list');
const worksAll = document.querySelector('#works-all');

const artistsList = [
  {
    name: 'I-Text',
    img: 'artists1.jpg',
  },
  {
    name: 'lightpop',
    img: 'artists2.jpg',
  },
  {
    name: 'reverpop',
    img: 'artists3.jpg',
  },
];
const worksList = [
  {
    name: '傷像',
    img: 'works1.jpg',
  },
  {
    name: 'PoPlanet',
    img: 'works2.jpg',
  },
  {
    name: 'Dark Matter',
    img: 'works3.jpg',
  },
  {
    name: '更待',
    img: 'works4.jpg',
  },
  {
    name: '墨ら',
    img: 'works5.jpg',
  },
  {
    name: 'LooPlanet',
    img: 'works6.jpg',
  },
];


// トップページのartists
for(let i = 0; i < artistsList.length; i++) {
  const {name, img} = artistsList[i];
  const content = `<div><p><img src="img/${img}" class="lists-img"></p><p>${name}</p></div>`;
  artists.insertAdjacentHTML('beforeend', content);
}

// トップページのworks
for(let i = -1; i > -4; i--) {
  const {name, img} = worksList.at(i);
  const content = `<div><p><img src="img/${img}" class="lists-img"></p><p>${name}</p></div>`;
  works.insertAdjacentHTML('beforeend', content);
}


// フェードインの設定
const animateFade = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'],
          translate: ['0 3rem', 0],
        },
        {
          duration: 1000,
          easing: 'ease',
          fill: 'forwards',
        }
      );
      obs.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(animateFade);
const fadeElemenets = document.querySelectorAll('.fadein');
fadeElemenets.forEach((fadeElemenet) => {
  fadeObserver.observe(fadeElemenet);
});