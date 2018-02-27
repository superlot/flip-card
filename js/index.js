(function() {

	var map,
		location = [38.9605495, -106.3611355],
		zoomlevel = 14;
  
  var toggleBtn = document.querySelector('.toggle-btn'),
      flipContainer = document.querySelector('.flip-container');

	var initMap = function() {
		// initialize map
		map = L.map('map').setView(location, zoomlevel);
		// add a Tile Layer
    L.tileLayer('http://a.tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
		    attribution: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | Map Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		    maxZoom: 18
		}).addTo(map);
		// add a Marker
		L.marker(location).addTo(map);
	}

	// Click on toggle-btn -> init map
	toggleBtn.addEventListener('click', function() {
		flipContainer.classList.toggle('hover');
		if(typeof map === 'undefined') initMap();
	});
  
  
  // some default animations for codepen-preview ;)
  window.setTimeout(function() {
    flipContainer.classList.toggle('hover');
		if(typeof map === 'undefined') initMap();
     window.setTimeout(function() {
       flipContainer.classList.toggle('hover');
     }, 1200);
  }, 500);
  

})();