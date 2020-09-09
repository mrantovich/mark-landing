$(document).ready(function(){

	$('.header__burger').on('click', function(){
		$(this).toggleClass('_active');
		$('.header__menu').toggleClass('_active');
		$('.header__socials').toggleClass('_active');
		$('body, html').toggleClass('_active');
	});

});
