'use strict';;
(function() {

	var URL = {
		load: 'https://javascript.pages.academy/keksobooking/data',
	};


	window.load = function(onSucsess, onError) {
		//console.log('here');
		var xhr = new XMLHttpRequest();

		xhr.responseType = 'json';

		xhr.addEventListener('load', function() {
			//console.log(xhr.status);
			if (xhr.status === 200) {
				//console.log(xhr.status);
				onSucsess(xhr.response);
			} else {
				//console.log(xhr.status);
				onError(`Статус ответа ${xhr.status} отличен от успешного ${xhr.statusText}`);
			}
		});
		xhr.addEventListener('error', function() {
			onError('Ошибка соединения');
		});

		xhr.addEventListener('timeout', function() {
			onError('Запрос не успел выполниться за ' + xhr.timeout + 'ms');
			//createErrorPopup(onError);
		});
		xhr.timeout = 5000;


		xhr.open('GET', URL.load);

		xhr.send();


		//window.createTextPopup(`Загрузка завершена со cтатусом ${xhr.status}`);

	};











})();
