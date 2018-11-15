var menu = document.getElementById('menu');
var opener = document.getElementById('open-menu');
opener.addEventListener('click', function() {
  menu.classList.toggle('is-open');
});

opener.addEventListener('click', function() {
	kappa.classList.toggle('transparent');
	kapa.classList.toggle('transparent');
});


var isScrolling;
var nav = document.querySelector('nav');
// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
  nav.classList.add('cake');
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

    nav.classList.remove('cake');
	}, 400);

}, false);
