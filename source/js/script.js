function menu() {
  var btn = document.querySelector('.navigation__btn');
  var menu = document.querySelector('.navigation__list');

  btn.addEventListener('click', function() {

    if (btn.classList.contains('navigation__btn--active')) {
      btn.classList.remove('navigation__btn--active');
      menu.classList.add('PushRight');
      menu.classList.remove('PullRight');

    } else {

      btn.classList.add('navigation__btn--active');
      menu.classList.add('PullRight');
      menu.classList.add('navigation__list--active');
    }
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

$("a.scroll-to").on("click", function(e){
  e.preventDefault();
  var anchor = $(this).attr('href');
  $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - 370
  }, 800);
  var elements = document.querySelectorAll('.menu__link');
  console.log();
  if (elements) {
    for ( var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('menu__link--active');
    }
  }
  $(this).addClass('menu__link--active');
});
