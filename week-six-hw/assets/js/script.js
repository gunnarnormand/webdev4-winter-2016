console.log('script.js');

$(document).ready(function(){

	// scrollTo 

	$('.hours').on('click', function() {
		$.scrollTo( $('#hours'), 600);
	});

	$('.plan').on('click', function() {
		$.scrollTo( $('#plan'), 600);
	});

	$('.campgrounds').on('click', function() {
		$.scrollTo( $('#campgrounds'), 600);
	});

	$('.location').on('click', function() {
		$.scrollTo( $('#location'), 600);
	});

	$('.features').on('click', function() {
		$.scrollTo( $('#features'), 600);
	});


	// materialize 

	$(".button-collapse").sideNav();

	$('.materialboxed').materialbox();
	
    $('.slider').slider({full_width: true});

    $('.modal-trigger').leanModal();

});