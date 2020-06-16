'use strict';

(function() {
	//адресс, куда будут отправляться данные
	var URL = 'https://javascript.pages.academy/code-and-magick';

	window.upload = function(data, onSuccess) {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('load', function () {
			onSuccess(xhr.response);
		});

	//СЮДА НАДО БОБАВИТЬ ОБРАБОТЧИК ОШИБОК
		xhr.open('POST', URL);

		xhr.send(data);

	};
})();
