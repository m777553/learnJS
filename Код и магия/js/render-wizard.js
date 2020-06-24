'use strict';
(function() {





	window.renderWizard = function(wizard) {
		var wizardElementTemplate = document.querySelector('#similar-wizard-template').content;
		//wizardElementTemplate.cloneNode(true);

		var wizardElement = wizardElementTemplate.cloneNode(true);


		wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

		return wizardElement;
	};

})();
