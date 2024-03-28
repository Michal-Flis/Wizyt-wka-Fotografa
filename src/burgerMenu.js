const menuBurger = document.querySelector('.menu');
const btnBurger = document.querySelector('.burger');
const linksMenuBurger = [...document.querySelectorAll('.menu-link')];

const openBurger = () => {
  menuBurger.classList.toggle('active-burger');
  btnBurger.classList.toggle('active-burger');
};

const clicklink = () => {
  menuBurger.classList.remove('active-burger');
  btnBurger.classList.remove('active-burger');
};

for (const link of linksMenuBurger) {
  link.addEventListener('click', clicklink);
}

btnBurger.addEventListener('click', openBurger);
