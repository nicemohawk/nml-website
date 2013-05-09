function scrollToDiv(element, navheight){
	var offset = element.offset();
	var offsetTop = offset.top;
	var totalScroll = offsetTop-navheight;

	$('body,html').animate({
			scrollTop: totalScroll
	}, 500);
}

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

function setupItaPage() {
//	swapTextBasedOnWidth();

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

	$('nav ul li a').click(
		function(e){
		
			var el = $(this).attr('href');
			var elWrapped = $(el);
			scrollToDiv(elWrapped,57);
			return false;
			e.preventDefault()
			
	});
}

$(document).ready(function() {		
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

	$('nav ul li a').click(
		function(e){
		
			var el = $(this).attr('href');
			var elWrapped = $(el);
			scrollToDiv(elWrapped,57);
			return false;
			e.preventDefault()
			
	});    
	
	function updateContent(toLoad) {
    	if( toLoad == null )
    		return;
    	else if( toLoad == "" )
    		toLoad = "/";
    		
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#content-wrapper').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		
		function loadContent() {
			$('#content-wrapper').load(toLoad+" #content",'',showNewContent())
		}
		function showNewContent() {
				
			$('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			if( toLoad.match('^ita.html.*$') )
				setupItaPage();
				
			$('#load').fadeOut('normal');
		}
    }

    // Load some mock JSON data into the page
    function clickHandler(event) {
      var toLoad = event.currentTarget.getAttribute('href').split('/').pop();

      updateContent(toLoad);
      
      // Add an item to the history log
      history.pushState(toLoad, event.currentTarget.textContent, event.currentTarget.href);

      return event.preventDefault();
    }

    // Attach event listeners
	var linkElements = document.getElementsByClassName('icon-link');
	
	for (var i = 0, len = linkElements.length; i < len; i++) {
	  linkElements[i].addEventListener('click', clickHandler, true);
	}

    // Revert to a previously saved state
    window.addEventListener('popstate', function(event) {
      console.log('popstate fired!');

      updateContent(event.state);
    });

    // Store the initial content so we can revisit it later
    history.replaceState(document.location.href.split('/').pop(), document.title, document.location.href);  	
});

window.onresize = function(event) {
	swapTextBasedOnWidth();
}