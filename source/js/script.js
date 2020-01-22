function menu() {
  var btn = document.querySelector('.navigation__btn');

  btn.addEventListener('click', function() {
    btn.classList.toggle('navigation__btn--active');
  });
}

menu()

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    dots: false,
    nav: true
  });
});

if (document.querySelector('.recommend__list')) {
  var list = document.querySelector('.recommend__list');
  if (window.matchMedia("(min-width: 768px)").matches) {
    list.classList.remove('owl-carousel');
  }
}
