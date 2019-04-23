document.addEventListener("DOMContentLoaded", yall);

var menu = document.getElementById('menu');
var opener = document.getElementById('open-menu');
opener.addEventListener('click', function() {
	menu.classList.toggle('is-open');
	kappa.classList.toggle('transparent');
	kapa.classList.toggle('transparent');
});

//closes the burger menu when a list item is clicked
var list = document.getElementsByClassName('list');
for (let index = 0; index < list.length; index++) {
	list[index].addEventListener('click', function(){
		menu.classList.remove('is-open');
		kappa.classList.toggle('transparent');
		kapa.classList.toggle('transparent');
	})
}

//to avoid resizing to mobile size and having the burger menu open
function myFunction(x) {
	if (x.matches) { // If media query matches
		menu.classList.remove('is-open');
		kappa.classList.remove('transparent');
		kapa.classList.add('transparent');
	}
}

var x = window.matchMedia("(max-width: 960px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 
	
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