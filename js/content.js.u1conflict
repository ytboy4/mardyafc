$(document).ready(function(){
	$('ul.nav li').click(function(){
		if(! $(this).hasClass('active')){
			$('ul.nav ul.dropdown-menu li').removeClass('active');
			$(this).addClass('active');
		}

		var selectionId = $(this).attr('id');

		$('.content').fadeOut('slow', function(){
			$('.page').css('display', 'none');
			$('.page#'+ selectionId).css('display', 'block');
			$('.content').fadeIn('slow');
		});
	});

	$('.map-tog').click(function(){
		$(this).next().stop().animate({height: 'toggle'}, 250);
	});
});