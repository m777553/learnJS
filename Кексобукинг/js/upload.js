'use strict';;
(function() {

	var URL = {

		upload: 'https://javascript.pages.academy/keksobooking',
	};

	window.upload = function(data, onLoad, onError) {
		var xhr = new XMLHttpRequest();

		xhr.addEventListener('load', function() {
			if (xhr.status === 200) {
				onLoad(xhr.response);
			} else {
				onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);
			}

		});

		xhr.open('POST', URL.upload);

		xhr.send(data);

	};

	var submitBtn = document.querySelector('.form__submit');
	var form = document.querySelector('.notice__form');


	form.addEventListener('submit', function(evt) {
			evt.preventDefault();
		//console.log('here');
		window.upload(new FormData(form),
			function(response) {

				window.isDisableSite();
			},
			function(str) {
				window.createTextPopup(str);
			})
	});





})();
