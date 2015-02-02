/* jQuery for skill bars */
$(document).ready(function() {
	
	jQuery('.skillbar').each(function() {
		jQuery(this).appear(function() {
			jQuery(this).find('.skillbar-bar').animate({
				width : jQuery(this).attr('data-percent')
			}, 1700, "easeOutCirc");
		});
	});
});

/* JQuery Owl slider */
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});

