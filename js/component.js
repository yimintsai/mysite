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

/* JQuery for honor/skill logo*/
$(document).ready(function() {

	totalloges = 2;

	$('.honor-panel-heading').appear(function() {
		$('.honor-panel-logo').fadeIn(2000);

		/*
		 for (var x = 1; x <= totalloges; x++) {
		 $('#hpl-' + x + ' i').fadeIn('slow');
		 //$it.addClass(honor_logo[x-1]);
		 //$it.fadeIn("slow");
		 //$it.fadeOut('slow');
		 }
		 */

	});

	$('.skill-panel-heading').appear(function() {
		$('.skill-panel-logo').fadeIn(2000);
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

