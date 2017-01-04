$(function () {
	// MENU
	$('li.has-children').hover(function(){
		$(this).toggleClass('active');
		$('ul', this).stop().slideToggle(300);
	});

	// BANNER
	var banner = new Swiper('.swiper-banner', {
		pagination: '.swiper-pagination',
	    paginationClickable: true,
		autoplay: 3000,
	    preventClicks: false,
		autoplayDisableOnInteraction: true,
		slidesPerView: '1',
		spaceBetween: 0
	});

	var work = new Swiper('.swiper-works', {
		nextButton: '.work-controls .next',
        prevButton: '.work-controls .prev',
		autoplay: 5000,
	    preventClicks: false,
		autoplayDisableOnInteraction: true,
		slidesPerView: '4',
		spaceBetween: 40
	});
});