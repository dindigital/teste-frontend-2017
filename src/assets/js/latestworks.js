(function() {
  var owl = $('.owl-latestworks');

  $(document).ready(function(){
    owl.owlCarousel({
      autoplay: false,
      loop: true,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },

        440: {
          items: 2,
          nav: false
        },

        700: {
          items: 3,
          nav: false
        },

        1024: {
          items: 4,
          nav: false
        }
      }
    });

    $('.section_nav .owl-prev').click(function() {
      owl.trigger('next.owl.carousel');
    });

    $('.section_nav .owl-next').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    });
  });
})();