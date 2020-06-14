/* =================================
------------------------------------
	Civic - CV Resume
	Version: 1.0
 ------------------------------------
 ====================================*/
 
'use strict';

/*------------------
	Load
--------------------*/
$(window).on('load', function() {

	$(".loader").fadeOut();
	$("#preloader").delay(400).fadeOut("slow");
});

(function($) {

/*------------------
	Progress Bars
--------------------*/
$('.progress-bar-style').each(function() {
	var progress = $(this).data("progress");
	var prog_width = progress + '%';
	if (progress <= 100) {
		$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
	}
	else {
		$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
	}
});

$('.lan-prog').each(function() {
	var progress = $(this).data("lanprogesss");
	var ele      = '<span></span>';
	var ele_fade = '<span class="fade-ele"></span>';

	for (var i = 1; i <= 5; i++) {
		if(i <= progress){
			$(this).append(ele);
		} else {
			$(this).append(ele_fade);
		}
	}
});

})(jQuery);
