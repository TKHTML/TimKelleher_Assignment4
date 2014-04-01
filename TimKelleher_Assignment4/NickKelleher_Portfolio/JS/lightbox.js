$.fn.lightbox = function() {

	$(this).click(function(e) {

		e.preventDefault();

		var image_href = $(this).attr('href');
		var text = $(this).attr('data-title');

		var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img src="' + image_href + '" class="active"/>' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

			$(lightbox).hide().appendTo('body').fadeIn(250);

			var lightbg = $('#lightbox');

			lightbg.click(function() {
				$(this).fadeOut(250, function() {
					$(this).remove();
				});
			});

			$(document).keyup(function(e){
				if (e.keyCode == 27) {
					lightbg.fadeOut(250, function() {
						$(this).remove();
					});
				}
			});
	});
}