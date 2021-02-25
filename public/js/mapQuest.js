function initMap() {
	L.mapquest.key = 'K5NCOpkV3Fs5QFTNqP6AUe9ZBeAY9ZWE';

	var map = L.mapquest.map('map', {
		center: [32.87922310278212, -117.23601474603319],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.87922310278212, -117.23601474603319]).addTo(map);
}

