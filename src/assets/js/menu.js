(function() {
  'use strict';
  var submenuItem = document.getElementsByClassName('submenu');

  for(var i = 0; i < submenuItem.length; i++) {
    submenuItem[i].addEventListener('mouseover', function() {
      this.classList.add('currentItem');
    }, false);

    submenuItem[i].addEventListener('mouseout', function() {
      this.classList.remove('currentItem');
    }, false);
  }
})();