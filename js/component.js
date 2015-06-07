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

/*
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
 */

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

});

/*
 function initialize() {
 var mapOptions = {
 center: new google.maps.LatLng(28.1823294, -82.352912),
 zoom: 9,
 mapTypeId: google.maps.MapTypeId.HYBRID,
 scrollwheel: false,
 draggable: false,
 panControl: true,
 zoomControl: true,
 mapTypeControl: true,
 scaleControl: true,
 streetViewControl: true,
 overviewMapControl: true,
 rotateControl: true,
 };
 var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
 }
 google.maps.event.addDomListener(window, 'load', initialize);

 */

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
				scrollwheel : true
			}
		}
	});
}); 