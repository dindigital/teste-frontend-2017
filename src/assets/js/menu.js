(function() {
  var submenuItem = document.getElementsByClassName('submenu');

  function toggleClass(element) {
    element.classList.toggle('currentItem');
  }

  for(var i = 0; i < submenuItem.length; i++) {
    submenuItem[i].addEventListener('mouseover', function() {
      this.classList.toggle('currentItem');
    }, false);
  }
})();