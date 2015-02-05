/* Collapisble function for Publication */
$(document).ready(function() {
	/*-------------------- EXPANDABLE PANELS ----------------------*/
	var panelspeed = 500;
	//panel animate speed in milliseconds
	var totalpanels = 3;
	//total number of collapsible panels
	var defaultopenpanel = 1;
	//leave 0 for no panel open
	var accordian = false;
	//set panels to behave like an accordian, with one panel only ever open at once

	var panelheight = new Array();
	var currentpanel = defaultopenpanel;
	
	var highlightopen = true;

	//Initialise collapsible panels
	function panelinit() {
		for (var i = 1; i <= totalpanels; i++) {
			panelheight[i] = parseInt($('#cp-' + i).find('.expandable-panel-content').css('height'));
			$('#cp-' + i).find('.expandable-panel-content').css('margin-top', -panelheight[i]);
			$('#cp-' + i).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');
			//Change icon image
			if (defaultopenpanel == i) {
				
				$('#cp-' + i).find('.expandable-panel-content').css('margin-top', 0);
				$('#cp-' + i + ' .expandable-panel-heading').addClass('expandable-panel-heading-active');
				$('#cp-' + i).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
				//Change icon image
			}
		}
	}


	$('.expandable-panel-heading').click(function() {
		var obj = $(this).next();
		var objid = parseInt($(this).parent().attr('ID').substr(3, 2));
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
				$('#cp-' + currentpanel + ' .expandable-panel-heading').addClass('expandable-panel-heading-active');
				$('#cp-' + currentpanel).find('.fa').toggleClass('fa-chevron-down fa-chevron-up');
			}
		} else {
			obj.clearQueue();
			obj.stop();			
			obj.animate({
				'margin-top' : (panelheight[objid] * -1)
			}, panelspeed);
			if (highlightopen == true) {
				$('#cp-' + currentpanel + ' .expandable-panel-heading').removeClass('expandable-panel-heading-active');
				$('#cp-' + currentpanel).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');
			}
		}
	});

	function resetpanels() {
		for (var i = 1; i <= totalpanels; i++) {
			if (currentpanel != i) {				
				$('#cp-' + i).find('.expandable-panel-content').animate({
					'margin-top' : -panelheight[i]
				}, panelspeed);
				if (highlightopen == true) {
					$('#cp-' + i + ' .expandable-panel-heading').removeClass('expandable-panel-heading-active');
					$('#cp-' + i).find('.fa').toggleClass('fa-chevron-up fa-chevron-down');
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
