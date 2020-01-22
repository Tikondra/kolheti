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
