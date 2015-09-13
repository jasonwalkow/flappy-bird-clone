$(document).ready( function() {
	$(".learn-more").on( "click", function(){
		$("html, body").animate({scrollTop: $(".features").offset().top}, 1000);
	});

	$('.flappy-icon').velocity('transition.swoopIn', {
    	opacity: [1, 0],
    	duration: 1000
	})
	.velocity({
        translateX: -1000
      }, 1000)
	.velocity({
        translateX: 1000
      }, 1000)
	.velocity({
        translateX: 0
      }, 1000)
	.velocity('callout.bounce', {
    	opacity: [1, 0],
    	duration: 1000
	});

    $('.flappy-icon').mouseenter(function(){
    $(this)
        .velocity({ translateY: "-30px", rotateZ: "10deg" }, 100, "easeOut")
        .velocity({ rotateZ: "-8deg" }, 150)
        .velocity({ translateY: "0", rotateZ: "0" }, {duration: 600, easing: [ 500, 14 ]});
    });

	$('.play-now-big').mouseenter(function(){
    $(this)
        .velocity({ scale: "1.2"}, 150, "easeInOut")
        .velocity("reverse");
    });

    $('.small-flappy-icon').mouseenter(function(){
    $(this)
        .velocity({ scale: "1.1"}, 300, "easeInOut")
        .velocity("reverse");
    });

    $('.flappy-logo').mouseenter(function(){
    $(this)
        .velocity({ scale: "1.2"}, 600, "easeInOut")
        .velocity("reverse");
    });

    $('.fa').mouseenter(function(){
    $(this)
        .velocity({ scale: "1.2"}, 200, "easeInOut")
        .velocity("reverse");
    });
});







