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