var waypoint1 = new Waypoint({
	element: document.getElementById('produits'),
	handler: function() {
		document.querySelector('.soba').classList.add('reached');
		document.querySelector('.ramen').classList.add('reached');
		document.querySelector('.noodles').classList.add('reached');
	},
	offset: 400
});