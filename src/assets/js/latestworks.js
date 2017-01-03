(function() {
  var owl = $('.owl-latestworks');

  $(document).ready(function(){
    owl.owlCarousel({
      items: 4,
      autoplay: false,
      loop: true,
      dots: false,
      nav: true
    });

    $('.section_nav .owl-prev').click(function() {
      owl.trigger('next.owl.carousel');
    });

    $('.section_nav .owl-next').click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    });
  });
})();