$(document).ready(function(){
		// scroll body to 0px on click
		$('.click').click(function () {
			var el = $($(this).attr("href"));
			
			$('body,html').animate({

				scrollTop: el.offset().top
				

			}, 800);
			return false;
		});
});
