/* jQuery for skill bars */
$(document).ready(function() {

	jQuery('.skillbar').each(function() {
		jQuery(this).appear(function() {
			jQuery(this).find('.skillbar-bar').animate({
				width : jQuery(this).attr('data-percent')
			}, 1600, "easeOutCirc");
		});
	});
});

$(document).ready(function() {

	/*
	 $(document).scroll(function() {

	 $('.skill-chart').easyPieChart({
	 easing : 'easeOutBounce',
	 onStep : function(from, to, percent) {
	 $(this.el).find('.percent').text(Math.round(percent));
	 }
	 });

	 });
	 */

	$('.skill-chart').each(function() {
		$(this).appear(function() {
			$(this).easyPieChart({
				animate : 1600,
				lineWidth : 16,
				barColor : '#FF9800',
				lineCap : 'square',
				scaleColor : false,
				trackColor : '#e6e8ed',
				size : 128				
			});
		});
	});

	$('.skill-chart2').each(function() {
		$(this).appear(function() {
			$(this).easyPieChart({
				animate : 1600,
				lineWidth : 16,
				barColor : '#e74c3c',
				lineCap : 'square',
				scaleColor : false,
				trackColor : '#e6e8ed',
				size : 128

			});
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

$(document).ready(function() {

	totalpanels = 2;
	var max_panelheight = -1;

	for (var i = 1; i <= totalpanels; i++) {
		var panelheight = parseInt($('#hp-' + i).find('.honor-panel-content').css('height'));
		if (panelheight > max_panelheight)
			max_panelheight = panelheight;
	}

	for (var i = 1; i <= totalpanels; i++) {
		$('#hp-' + i).find('.honor-panel-content').css('height', max_panelheight);
	}
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

