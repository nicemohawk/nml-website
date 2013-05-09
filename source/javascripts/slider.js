
function swapTextBasedOnWidth() {
	// 	change text based on window width
	var myWidth = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
	}
	  
	if( myWidth < 768 ) {
		document.getElementById("lastcaption").innerHTML="Fun.";
	} else {
		document.getElementById("lastcaption").innerHTML="Lists You Like.";
	}
}

$(document).ready(function() {		
	swapTextBasedOnWidth();

	$('.iosSlider').iosSlider({
		desktopClickDrag: true,
		snapToChildren: true,
		navSlideSelector: '.sliderContainer .slideSelectors .item',
		onSlideComplete: slideComplete,
		onSliderLoaded: sliderLoaded,
		onSlideChange: slideChange,
		autoSlide: true,
		scrollbar: true,
		scrollbarContainer: '.sliderContainer .scrollbarContainer',
		scrollbarMargin: '0',
		scrollbarBorderRadius: '0'
	});

	function slideChange(args) {
			
		$('.sliderContainer .slideSelectors .item').removeClass('selected');
		$('.sliderContainer .slideSelectors .item:eq(' + args.currentSlideNumber + ')').addClass('selected');
			
	}
			
	function slideComplete(args) {
					
		$(args.sliderObject).find('.text1, .text2').attr('style', '');
				
		$(args.currentSlideObject).find('.text1').animate({
			right: '27px',
			opacity: '0.8'
		}, 400, 'easeOutQuint');
				
		$(args.currentSlideObject).find('.text2').delay(200).animate({
			right: '27px',
			opacity: '0.8'
		}, 400, 'easeOutQuint');
				
	}
			
	function sliderLoaded(args) {
					
		slideComplete(args);
						
		slideChange(args);
				
	}
		
});

window.onresize = function(event) {
	swapTextBasedOnWidth();
}