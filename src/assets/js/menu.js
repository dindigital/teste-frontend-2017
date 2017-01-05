(function() {
  var toggleBtn = document.querySelector('.menu__toggle');
  var menuList = document.querySelector('.menu__list');
  var menuFade = document.querySelector('.menu__fade');
  var submenuItem = document.getElementsByClassName('submenu');

  for(var i = 0; i < submenuItem.length; i++) {
    submenuItem[i].addEventListener('mouseover', function() {
      this.classList.add('currentItem');
    }, false);

    submenuItem[i].addEventListener('mouseout', function() {
      this.classList.remove('currentItem');
    }, false);
  }

  toggleBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuList.classList.toggle('active');
    menuFade.classList.toggle('active');
  }, false);
})();