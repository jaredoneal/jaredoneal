var main = function() {
	$('.tobiopage').click(function(){
		$('.biopage').animate({
				marginTop: "-100vh"
		}, 1200);
	})

	$('.nav').click(function(){
		$('body').animate({
			marginTop: "10vh"
		}, 200);
	})
};

$(document).ready(main);