$(function() {

	if ($(window).scrollTop() > 0) {
		$('header').addClass('fixed');
	}

	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	});

	$('.header__navbar').click(function() {
		$('header').toggleClass('active');
		$('.header__content-wrapper').slideToggle(300);
		return false;
	});

	$(document).mouseup(function (e){
		var div = $("header");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
			if ($(window).innerWidth() < 769) {
				$('header').removeClass('active');
				$('.header__content-wrapper').slideUp(300);
			}	
		}
	});

	$('.menu__item_has-child .menu__link').click(function() {
		$(this).next().slideToggle(300);
		return false;
	});

	$(document).mouseup(function (e){
		var div = $(".menu__item_has-child");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			$('.menu__submenu').slideUp(300);
		}
	});	

	$('.modal-link').click(function() {
		var modal = $(this).attr('href');
		$(modal).fadeIn(300);
		return false;
	});

	$('.modal__close, .modal__blackout').click(function() {
		$(this).parents('.modal-wrapper').fadeOut(300);
		return false;
	});
});