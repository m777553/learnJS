'use strict';;
(function() {
	window.translateTypeToText = function(type) {
		switch (type) {
			case ('flat'):
				type = 'Квартира'

				break;
			case ('palace'):
				type = 'Дворец'

				break;
			case ('bungalo'):
				type = 'Лачуга'

				break;
			case ('house'):
				type = 'Дом'

				break;


		};

return type;

	};

//console.log(translateTypeToText('palace'));



})();
