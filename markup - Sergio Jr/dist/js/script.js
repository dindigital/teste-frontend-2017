$(document).ready(function(){

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		if($(".nav-content").hasClass('showMenu')) {
			$(".nav-content").removeClass('showMenu').slideUp('slow');
		} else {
			$(".nav-content").addClass('showMenu').slideDown('slow');	
		}
	});

	// Slider Principal
	var countSlider = $('.slider-item').length;
	for(var i = 1; i <= countSlider; i++) {
		$('.slider-control').append('<a href="#" class="a-control" id="'+[i]+'"></a>');
	};

	var sliderTime = setInterval(function() {
		var id = $('.slider-item.active').attr('id');
		$('.slider-item').each(function() {
			$(this).removeClass('active');
			if(id == countSlider) {
				if($(this).attr('id') == 1) {
					$(this).addClass('active');
				};
			} else {
				if($(this).attr('id') == (parseInt(id) + parseInt(1))) {
					$(this).addClass('active').fadeIn();
				};
			}
		});
	}, 5000);

	$('.a-control').click(function(e) {
		var jumpSlider = $(this).attr('id');
		$('.slider-item').removeClass('active');
		$('.slider').find($('#'+jumpSlider)).addClass('active');
		clearInterval(sliderTime);
		e.preventDefault();
	});


	$(".owl-carousel").owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			768:{
				items:4
			}
		}
	});



});