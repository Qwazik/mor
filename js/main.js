$(function(){
	$('.video-mask').click(function(){
		$(this).fadeOut();

	});

	$('.fancybox').fancybox({
		afterClose: function(){
			$('.video-mask').fadeIn();
		}
	});
});