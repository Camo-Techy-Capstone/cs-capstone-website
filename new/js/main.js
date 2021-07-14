jQuery(function($) {
	"use strict";

	// Window Load
	$(window).load(function() {

		// Typing Intro Init
		$(".typed").typewriter({
			speed: 60
		});


	});
	// Window Scroll
	function onScroll() {
	}

	window.addEventListener('scroll', onScroll, false);

	// Window Resize
	$(window).resize(function() {
	});
	
});
