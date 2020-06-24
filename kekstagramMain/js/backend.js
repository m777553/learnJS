'use strict';




(function() {
	var URL = {
		load: 'https://javascript.pages.academy/kekstagram/data',
		save: 'https://javascript.pages.academy/kekstagram',
	};



	window.backend = {

		load: function(onLoad, onError) {
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.addEventListener('load', function() {
				if (xhr.status === 200) {
					onLoad(xhr.response);


				} else {
					onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);

				}

			});

			xhr.addEventListener('error', function() {
				onError('Ошибка соединения');
			});
			xhr.addEventListener('timeout', function() {
				onError('Запрос не успел выполниться за ' + xhr.timeout + 'ms');
				//createErrorPopup(onError);
			});
			xhr.timeout = 10000;

			xhr.open('GET', URL.load);

			xhr.send();

		},


		save: function(data, onLoad, onError) {
			var xhr = new XMLHttpRequest();

			//var data = new FormData(form);
			xhr.addEventListener('load', function() {
				if (xhr.status === 200) {
					onLoad(xhr.response);
				} else {
					onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);
				}

			});

			xhr.open('POST', URL.save);

			xhr.send(data);
		},

		createErrorPopup: function(str) {


			var errorPopup = document.createElement('div');
			errorPopup.classList.remove('hidden');

			errorPopup.textContent = str;
			errorPopup.style.padding = "20px";
			errorPopup.style.marginLeft = "-250px";
			errorPopup.style.marginTop = "-50px";

			errorPopup.style.border = "2px solid red";
			errorPopup.style.position = "fixed";
			errorPopup.style.top = '50%';
			errorPopup.style.background = 'white';
			errorPopup.style.color = 'red';
			errorPopup.style.fontWeight = 'bold';
			errorPopup.style.textAlign = 'center';
			errorPopup.style.fontSize = '18px';

			//errorPopup.style.font.size = '18px';

			errorPopup.style.width = '500px';
			//errorPopup.style.height = '100px';
			errorPopup.style.left = '50%';
			document.body.appendChild(errorPopup);
			// var hide = function () {
			// 	errorPopup.classList.add('hidden');
			// };
			setTimeout(function() {
				errorPopup.remove();
			}, 5000);


		},
	};

})();
