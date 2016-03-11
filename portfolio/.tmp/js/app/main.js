$(window).load(function(){
    
    setTimeout(function(){
  		$('#cover').fadeOut(500);		
	}, 2000);
});
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
      
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
$(document).ready(function(){
	// scrollTo 

	$('.scroll-button').on('click', function() {
		$.scrollTo( $('#section-1'), 600);
	});


	// scrollTo side-navigation

	$('.side-navigation--1').on('click', function() {
		$.scrollTo( $('#section-0'), 600);
	});

	$('.side-navigation--2').on('click', function() {
		$.scrollTo( $('#section-1'), 600);
	});

	$('.side-navigation--3').on('click', function() {
		$.scrollTo( $('#section-2'), 600);
	});

	$('.side-navigation--4').on('click', function() {
		$.scrollTo( $('#section-3'), 600);
	});

	$('.side-navigation--5').on('click', function() {
		$.scrollTo( $('#section-4'), 600);
	});

});