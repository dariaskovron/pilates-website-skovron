const burgerBtn = document.querySelector('.burger__menu-adaptation');
const headerNavList = document.querySelector('.header__navigation-list');

function openMenu() {
  const div = document.createElement('div');
  div.className = 'burger-menu';
  document.body.prepend(div);

  div.appendChild(headerNavList);
  headerNavList.addEventListener('click', closeMenu);
}

function closeMenu() {
  const div = document.querySelector('.burger-menu');
  if (div) {
    div.remove();
  }
}

burgerBtn.addEventListener('click', () => {
  const menuDiv = document.querySelector('.burger-menu');
  if (!menuDiv) {
    openMenu();
  } else {
    closeMenu();
  }
});
