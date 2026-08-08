const worksAll = document.querySelector('#works-all');

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

// 個別ページのworks
for(let i = 0; i < worksList.length; i++) {
  const {name, img} = worksList[i];
  const work = `<div><p><img src="img/${img}" class="lists-img"></p><p>${name}</p></div>`;
  worksAll.insertAdjacentHTML('beforeend', work);
}