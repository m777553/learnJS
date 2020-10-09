'use strict';;
(function() {
	var mapFiltersForm = document.querySelector('.map__filters');

	var filters = {
		type: mapFiltersForm.querySelector('#housing-type'),
		price: mapFiltersForm.querySelector('#housing-price'),
		rooms: mapFiltersForm.querySelector('#housing-rooms'),
		guests: mapFiltersForm.querySelector('#housing-guests'),
		features: mapFiltersForm.querySelector('#housing-features'),

	};
	console.log(filters.features);
	var loadedArrayCopy = [];

	setTimeout(function() {


		loadedArrayCopy = window.loadedArray.slice();

		console.log(loadedArrayCopy);

	}, 1500);

	var creatinaMaxRang = function() {
		var maxRang = 0;
		if (filters.type.value !== 'any') {
			maxRang++;
		};
		if (filters.price.value !== 'any') {
			maxRang++;
		};
		if (filters.rooms.value !== 'any') {
			maxRang++;
		};
		if (filters.guests.value !== 'any') {
			maxRang++;
		};
		return maxRang;
	};







	var changeRang = function() {
		for (var i = 0; i < loadedArrayCopy.length; i++) {
			loadedArrayCopy[i].rang = 0;

		};
		//console.log(loadedArrayCopy);
		for (var i = 0; i < loadedArrayCopy.length; i++) {
			//тип
			if (loadedArrayCopy[i].offer.type == filters.type.value) {
				console.log(loadedArrayCopy[i].offer.type);
				loadedArrayCopy[i].rang++;
			}
			//цена
			if (filters.price.value !== 'any') {
				switch (filters.price.value) {
					case 'middle':
						if (loadedArrayCopy[i].offer.price > 1000 && loadedArrayCopy[i].offer.price < 50000) {
							loadedArrayCopy[i].rang++;
						}

						break;
					case 'low':
						if (loadedArrayCopy[i].offer.price <= 1000) {
							loadedArrayCopy[i].rang++;
						}

						break;
					case 'high':
						if (loadedArrayCopy[i].offer.price <= 50000) {
							loadedArrayCopy[i].rang++;
						}

						break;


				}
				//loadedArrayCopy[i].offer.price

				//loadedArrayCopy[i].rang++;

			}
			//комнаты
			if (loadedArrayCopy[i].offer.rooms == filters.rooms.value) {
				loadedArrayCopy[i].rang++;
			}
			//гости
			if (loadedArrayCopy[i].offer.guests == filters.guests.value) {
				loadedArrayCopy[i].rang++;
			}
			// case (loadedArrayCopy[i]==filters.type.value): loadedArrayCopy[i].rang ++;
		}
		loadedArrayCopy.sort(function(a, b) {
			return (b.rang - a.rang);
		});

		console.log(loadedArrayCopy);


	};

	var renderPins = function() {
		window.clearPin();
		var maxRang = creatinaMaxRang();
		window.smallLoadedArrayCopy = [];
		for (var i = 0; i < loadedArrayCopy.length; i++) {

			if (loadedArrayCopy[i].rang == maxRang) {
				window.smallLoadedArrayCopy.push(loadedArrayCopy[i]);

			}
			if (maxRang == 0) {
				//console.log(window.loadedArray);
				window.smallLoadedArrayCopy = window.loadedArray;
			}
		}
		//console.log(smallLoadedArrayCopy);
		window.makeFullFragment(window.smallLoadedArrayCopy);
	};



	var onFilterChange = function(evt) {
		evt.preventDefault();
		changeRang();
		renderPins();
		//console.log(creatinaMaxRang());
		//console.log(filters.features.value);
	};




	mapFiltersForm.addEventListener('change', onFilterChange);





})();
