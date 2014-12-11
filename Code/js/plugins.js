// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


    $(document).ready(function() {
     
    $("#each_clients").owlCarousel({
    autoPlay : 9000,
    stopOnHover : false,
    navigation:true,
	pagination:false,
	navigationText:["Prev","next"],
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : false,
    transitionStyle:"fade"
    });
     
    });

//JQuery Parrallax
$(document).ready(function(){

	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.3);
	$('#testimonials').parallax("50%", 0.1);
	$('#clients').parallax("50%", 0.2);
	$('#location').parallax("50%", 0.3 ,true);
	$('#starthere').parallax("50%", 0.2);

})


//wow wow 
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       20          // default
    }
  )
  wow.init();