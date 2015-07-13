/* JQuery for timeline */
$(document).ready(function() {

	$('.cbp_tmlabel').each(function() {
		$(this).appear(function() {

			$(this).css({
				opacity : 0
			}).animate({
				opacity : 1.0
			}, 1600);
		});
	});

	/*
	 $('.cbp_tmicon').each(function() {
	 $(this).appear(function() {
	 $(this).effect("bounce", {
	 direction : 'down',
	 times : 1
	 }, 200);

	 });
	 });
	 */
});

/* jQuery for skill bars */
/*
 $(document).ready(function() {

 jQuery('.skillbar').each(function() {
 jQuery(this).appear(function() {
 jQuery(this).find('.skillbar-bar').animate({
 width : jQuery(this).attr('data-percent')
 }, 1600, "easeOutCirc");
 });
 });
 });
 */

$(document).ready(function() {

	$('.skill-chart').each(function() {
		$(this).appear(function() {
			$(this).easyPieChart({
				animate : 1600,
				lineWidth : 16,
				barColor : '#FF5722',
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
				barColor : '#FF9800',
				lineCap : 'square',
				scaleColor : false,
				trackColor : '#e6e8ed',
				size : 128

			});
		});
	});

});

$(document).ready(function() {
	//collapsible management
	$('.collapsible').collapsible({
		defaultOpen : 'colpanel-1'
	});

	var totalpanels = 3;
	//total number of collapsible panels

	//init
	function panelinit() {
		for (var i = 1; i <= totalpanels; i++) {

			var $currentObj = $('#colpanel-' + i);
			var isopened = $currentObj.hasClass('collapse-open');

			if (isopened)
				$currentObj.find('.fa').removeClass('fa-caret-down').addClass('fa-caret-up');

		}
	}

	panelinit();

	$('.collapsible').click(function() {
		//var obj = $(this).next();
		var objid = parseInt($(this).attr('ID').substr(9, 2));
		var $currentObj = $('#colpanel-' + objid);

		var isopened = $currentObj.hasClass('collapse-close');

		if (isopened) {
			$currentObj.find('.fa').removeClass('fa-caret-up').addClass('fa-caret-down');
		} else {
			$currentObj.find('.fa').removeClass('fa-caret-down').addClass('fa-caret-up');
		}
	});
});

/* JQuery Owl slider */
$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : true

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
	
	$("#cs-gallery").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : false,
		navigation : true,
		navigationText : ["<", ">"],

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});
	
	$("#vs-gallery").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : false,
		navigation : true,
		navigationText : ["<", ">"],

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

	$("#aisp-gallery").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : false,
		navigation : true,
		navigationText : ["<", ">"],

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

	$("#chip-gallery").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoPlay : false,
		navigation : true,
		navigationText : ["<", ">"],

		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

});

/* Google Map */
$(document).ready(function() {

	$('#gmap').gmap3({
		marker : {
			latLng : [25.014397, 121.530668],
			options : {
				icon : new google.maps.MarkerImage("img/location.png", new google.maps.Size(49, 65, "px", "px"))
			}
		},
		map : {
			options : {
				zoom : 13,
				scrollwheel : false
			}
		}
	});
});

/* FitVid */
$(document).ready(function() {
	// Target your .container, .wrapper, .post, etc.
	$(".modal-body").fitVids();
});

/* Handle page btn */
$(document).ready(function() {

	$('.portfolio-modal').on('show.bs.modal', function(e) {
		$('#page-btn').hide();
        $('#download-btn').hide();
	});

	$('.portfolio-modal').on('hidden.bs.modal', function(e) {
		$('#page-btn').show();
        $('#download-btn').show();
	});

});

/* Isotope */

$(document).ready(function() {
	$('.grid').isotope({
		// options...
		itemSelector : '.portfolio-item'
	});

});
