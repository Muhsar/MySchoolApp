
(function ($) {
    "use strict";
    
	/*==============================================[ scroll one page ]==*/
	$(document).ready(function() {

		$('.home-onepage-menu-bar a, .home-onepage-menu-bar-top a, .home-onepage-menu-overlay a').on('click', function(event){
			event.preventDefault();
			$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
		});
		
		var posMenuBar = $('.home-onepage-menu-bar').offset().top;

		var posIntroTop = $('#home-onepage-intro').offset().top;
		var posIntroBottom = $('#home-onepage-intro').offset().top + $('#home-onepage-intro').height() + 100;

		var posMenuTop = $('#home-onepage-our-menu').offset().top;
		var posMenuBottom = $('#home-onepage-our-menu').offset().top + $('#home-onepage-our-menu').height() + 100;

		var posEventTop = $('#home-onepage-event').offset().top;
		var posEventBottom = $('#home-onepage-event').offset().top + $('#home-onepage-event').height() + 100;

		var posReservationTop = $('#home-onepage-reservation').offset().top;
		var posReservationBottom = $('#home-onepage-reservation').offset().top + $('#home-onepage-reservation').height() + 100;

		var posContactTop = $('#home-onepage-contact').offset().top;
		var posContactBottom = $('#home-onepage-contact').offset().top + $('#home-onepage-contact').height();

		var posPageBottom = $('#home-onepage-contact').offset().top - ($(window).height() - $('#home-onepage-contact').height());

		$(window).on('scroll',function(){
			showActiveMenu();
			if($(this).scrollTop() > posMenuBar && $(this).width() > 992) { 
				$('.home-onepage-wrap-menu-bar').css('display', 'none');
				$('.home-onepage-wrap-menu-bar-top').css('display', 'block');
			}
			else {
				$('.home-onepage-wrap-menu-bar').css('display', 'block');
				$('.home-onepage-wrap-menu-bar-top').css('display', 'none');
			}
		});


		function  showActiveMenu() {

			if($(window).scrollTop() > posIntroTop-67 && $(window).scrollTop() < posIntroBottom) {
				$('.home-onepage-intro').addClass('active-menu-bar');
			}
			else {
				$('.home-onepage-intro').removeClass('active-menu-bar');
			}

			if($(window).scrollTop() > posMenuTop-67 && $(window).scrollTop() < posMenuBottom) {
				$('.home-onepage-our-menu').addClass('active-menu-bar');
			}
			else {
				$('.home-onepage-our-menu').removeClass('active-menu-bar');
			}

			if($(window).scrollTop() > posEventTop-67 && $(window).scrollTop() < posEventBottom) {
				$('.home-onepage-event-2').addClass('active-menu-bar');
			}
			else {
				$('.home-onepage-event-2').removeClass('active-menu-bar');
			}

			if($(window).scrollTop() > posReservationTop-67 && $(window).scrollTop() < posReservationBottom) {
				$('.home-onepage-reservation').addClass('active-menu-bar');
			}
			else {
				$('.home-onepage-reservation').removeClass('active-menu-bar');
			}

			if(($(window).scrollTop() > posContactTop-67 && $(window).scrollTop() < posContactBottom) || $(window).scrollTop() >= posPageBottom) {
				$('.home-onepage-contact').addClass('active-menu-bar');
				$('.home-onepage-reservation').removeClass('active-menu-bar');
			}
			else {
				$('.home-onepage-contact').removeClass('active-menu-bar');
			}

		}
	});

})
(jQuery);