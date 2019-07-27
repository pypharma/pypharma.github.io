$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
	});

	$('.counter-1500ms').counterUp({
        delay: 100,
        time: 1500
	});

	$('.counter-1750ms').counterUp({
        delay: 100,
        time: 1750
	});

	$('.counter-2000ms').counterUp({
        delay: 100,
        time: 2000
	});

	$('.counter-2250ms').counterUp({
        delay: 100,
        time: 2250
	});

	$('.counter-2500ms').counterUp({
        delay: 100,
        time: 2500
	});
	
	


});




