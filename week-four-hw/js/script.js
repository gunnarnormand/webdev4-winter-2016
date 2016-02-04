console.log('script.js');

$(document).ready(function(){
	
	$('.burg').on('click', function() {
		$('.bar').toggleClass('clicked');
	});

	$('.burg').on("click", function (){

		$('nav').toggleClass('overlay');
	});
});
