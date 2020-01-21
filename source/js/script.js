function menu() {
  var btn = document.querySelector('.navigation__btn');

  btn.addEventListener('click', function() {
    btn.classList.toggle('navigation__btn--active');
  });
}

menu()
