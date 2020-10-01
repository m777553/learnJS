'use strict';;
(function() {

	window.createTextPopup = function(str) {


		var textPopup = document.createElement('div');
		//textPopup.classList.remove('hidden');

		textPopup.textContent = str;
		textPopup.style.padding = "20px";
		textPopup.style.marginLeft = "-250px";
		textPopup.style.marginTop = "-50px";

		textPopup.style.border = "2px solid red";
		textPopup.style.position = "fixed";
		textPopup.style.top = '50%';
		textPopup.style.background = 'white';
		textPopup.style.color = 'red';
		textPopup.style.fontWeight = 'bold';
		textPopup.style.textAlign = 'center';
		textPopup.style.fontSize = '18px';


		textPopup.style.width = '500px';
		//textPopup.style.height = '100px';
		textPopup.style.left = '50%';
		document.body.appendChild(textPopup);
		// var hide = function () {
		// 	textPopup.classList.add('hidden');
		// };
		setTimeout(function() {
			textPopup.remove();
		}, 7000);


	};





})();
