window.result = [];

$(document).ready(function(){
	$('ul.nav li').click(function(){
		if(! $(this).hasClass('active')){
			$('ul.nav li').removeClass('active');
			$(this).addClass('active');
		}

		var $this = $(this);
		var selection = $this.attr('id');

		/* Following code adds the li attribute to an array to allow storing the child whcih would
		   get overwritten by the parent when DOM bubbling occurs. */
		if(selection != undefined){
			result.push(selection);
			selectionId = result.pop();
		}

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