var waitForFinalEvent = (function () {
  var timers = {};
  
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

var resizeRunning = false;

$(window).resize(function () {
	if( resizeRunning == false ) {
		$('body').addClass('notransition');
		
		resizeRunning = true;
	}

    waitForFinalEvent(function(){
	  $('body').removeClass('notransition');
      
      resizeRunning = false;
    }, 500, "window resizing");
});
