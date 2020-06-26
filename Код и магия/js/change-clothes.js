'use strict';
(function() {


	var wizardCoat = document.querySelector('.wizard-coat');
	var wizardCoatInput = document.querySelector('input[name="coat-color"]');

	var wizardFireball = document.querySelector('.setup-fireball-wrap');

	var wizardFireballInput = document.querySelector('input[name="fireball-color"]');

	//функция смены цвета элемента с учетом изменения значения input для правильной отправки данных формы
	//var newColor;
	window.changes = {
		newColor: 'rgb(101, 137, 164)',
		changeClothes: function(clothesElem, massive) {
			var color = window.getRandomElement(massive);
			clothesElem.style.fill = color;
			var changedInput;
			if (clothesElem == wizardCoat) {
				changedInput = wizardCoatInput;
				changedInput.value = color;
				window.changes.newColor = color;
				for (var i = 0; i < 4; i++) {

					document.querySelector('.setup-similar-item').remove();
				}
				//console.log(color);
				window.renderSimilarWizards();
			}
		},

		changeFireball: function() {
			var color = window.getRandomElement(fireballColor);
			wizardFireballInput.value = color;
			wizardFireball.style.background = color;
			//alert(wizardFireball.value);
		},
	};
})();
