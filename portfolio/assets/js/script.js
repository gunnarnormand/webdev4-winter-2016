console.log('script.js');

$(document).ready(function(){
	
	$('.burg').on('click', function() {
		$('.bar').toggleClass('clicked');
	});

	$('.burg').on('click', function (){

		$('nav').toggleClass('overlay');
	});

	$('.splash-button').on('click', function() {
		$(this).toggleClass('splash-button--red');
		$('.video-2').toggleClass('show-video');
		$('.video-1').toggleClass('show-video');
		$('main').addClass('flash');
		setTimeout(function(){
  			$('main').removeClass('flash');
		}, 1000);
	});


	$('ul li a').on('click', function(){
		$(this).closest('ul').find('a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});





});	