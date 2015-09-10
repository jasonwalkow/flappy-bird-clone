$(document).ready( function() {
	$(".learn-more").on( "click", function(){
		$("html, body").animate({scrollTop: $(".features").offset().top}, 1000);
	});
});