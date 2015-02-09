/* Collapisble function for Publication */
$(document).ready(function() {
	/*-------------------- EXPANDABLE PANELS ----------------------*/
	var panelspeed = 500;
	//panel animate speed in milliseconds
	var totalpanels = 2;
	//total number of collapsible panels
	var defaultopenpanel = 0;
	//leave 0 for no panel open
	var accordian = false;
	//set panels to behave like an accordian, with one panel only ever open at once

	var panelheight = new Array();
	var currentpanel = defaultopenpanel;

	var highlightopen = true;

	//Initialise collapsible panels
	function panelinit() {
		for (var i = 1; i <= totalpanels; i++) {
			panelheight[i] = parseInt($('#chp-' + i).find('.expandable-honor-panel-content').css('height'));
			$('#chp-' + i).find('.expandable-honor-panel-content').css('margin-top', -panelheight[i]);
			$('#chp-' + i + ' .expandable-honor-panel-heading').removeClass('expandable-honor-panel-heading-active');

			if (defaultopenpanel == i) {
				$('#chp-' + i).find('.expandable-honor-panel-content').css('margin-top', 0);
				$('#chp-' + i + ' .expandable-honor-panel-heading').addClass('expandable-honor-panel-heading-active');
			}
		}
	}


	$('.expandable-honor-panel-heading').click(function() {
		var obj = $(this).next();
		var objid = parseInt($(this).parent().attr('ID').substr(4, 2));
		currentpanel = objid;
		if (accordian == true) {
			resetpanels();
		}

		if (parseInt(obj.css('margin-top')) <= (panelheight[objid] * -1)) {
			obj.clearQueue();
			obj.stop();
			obj.animate({
				'margin-top' : 0
			}, panelspeed);
			if (highlightopen == true) {
				$('#chp-' + currentpanel + ' .expandable-honor-panel-heading').addClass('expandable-honor-panel-heading-active');
			}
		} else {
			obj.clearQueue();
			obj.stop();
			obj.animate({
				'margin-top' : (panelheight[objid] * -1)
			}, panelspeed);
			if (highlightopen == true) {
				$('#chp-' + currentpanel + ' .expandable-honor-panel-heading').removeClass('expandable-honor-panel-heading-active');
			}
		}
	});

	function resetpanels() {
		for (var i = 1; i <= totalpanels; i++) {
			if (currentpanel != i) {
				$('#chp-' + i).find('.expandable-honor-panel-content').animate({
					'margin-top' : -panelheight[i]
				}, panelspeed);
				if (highlightopen == true) {
					$('#chp-' + i + ' .expandable-honor-panel-heading').removeClass('expandable-honor-panel-heading-active');
				}
			}
		}
	}

	//Uncomment these lines if the expandable panels are not a fixed width and need to resize
	$(window).resize(function() {
		panelinit();
	});

	$(window).load(function() {
		panelinit();
	});
	//END LOAD
});
//END READY
