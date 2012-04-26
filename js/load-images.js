/**
 * Load Images WYNI
 *
 * @version 	0.9
 * @author 		Keegan Berry
 * @since		04/26/12
 *
 * @source		https://github.com/keeeeeegan/Image-Loading-When-You-Need-It
 *
 */

$(document).ready(function() {

	$(".img-placeholder").each( function() {
		var src = $(this).attr("data-src");
		var width = $(this).attr("data-width");
		var height = $(this).attr("data-height");

		$(this).css({'width': width + 'px', 'height': height + 'px'});

		//console.log(src + " initially set");
	});

	checkPlaceholderImage();

	$(window).scroll(function() {
		checkPlaceholderImage();
	});

	function checkPlaceholderImage() {
		var window_offset = $(window).scrollTop();
		var window_height = $(window).height();
		var window_bottom = window_offset + window_height;

		$(".img-placeholder").each( function() {
			var src = $(this).attr("data-src");
			var width = $(this).attr("data-width");
			var height = $(this).attr("data-height");
			var alt = $(this).html();
			var offset = $(this).offset();

			//console.log(src + " offset " + offset.top + " " + window_offset + " + " + window_height + " = " + window_bottom);

			if (offset.top <= (window_bottom - 100)) {
				//console.log(src + " converted to img");
				$(this).after($('<img src="' + src + '" width="' + width + '" height="' + height + '" alt="' + alt + '" />'));
				$(this).remove();
			}
		});
	}

});