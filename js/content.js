$(document).ready(function(){
	$('ul.nav li').click(function(){
		if(! $(this).hasClass('active')){
			$('ul.nav li').removeClass('active');
			$(this).addClass('active');
		}

		var $this = $(this);
		if($this.children().length > 1){
			var selectionId = $this.find('li').attr('id');
			console.log('in the if ' + selectionId);
		} else {
			var selectionId = $this.attr('id');
		}
		
		console.log(selectionId);

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