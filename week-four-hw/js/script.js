console.log('script.js');

$(document).ready(function(){
	
	$('.burg').on('click', function() {
		$('.bar').toggleClass('clicked');
	});

	$('.burg').on('click', function (){

		$('nav').toggleClass('overlay');
	});

	$('.btn-big').click(function() {

		$(this).html('V');

		$('.expands').addClass("open");
	});

	$('.btn-small').click(function() {

		$('.expands').removeClass("open");
	});
});	