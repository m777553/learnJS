'use strict';

// В этом задании мы сделаем так, чтобы в окне настройки персонажа под
// волшебником загружались похожие персонажи других игроков с сервера.
// Задача
// 1. Создайте модуль backend.js, который экспортирует в глобальную область
// видимости функции backend.load и backend.save, которые будут работать
// с сервером данных:
// o получать с сервера данные с помощью объекта XMLHttpRequest или
// с помощью JSONP, обрабатывать полученные запросы и передавать
// полученную информацию в функцию обратного вызова;
// o отправлять данные игрока на сервер, обрабатывать ошибки и скрывать
// форму редактирования персонажа, если ошибок не произошло;


(function() {
	var URL = {
		load: 'https://javascript.pages.academy/code-and-magick/data',
		save: 'https://javascript.pages.academy/code-and-magick',
	};



	//var data = new FormData(window.form);

	// var onLoad = function(data) {
	// 	//onSuccess - функция callback. Что мы будем делать с полученными данными
	//
	//
	// };
	// var onError = function() {
	//
	// };



	window.backend = {
		// 		Функция backend.load должна принимать на вход следующие параметры:
		// o onLoad — функция обратного вызова, которая срабатывает при успешном
		// выполнении запроса. При вызове функции onLoad в её единственный
		// параметр передается набор полученных данных;
		// o onError — функция обратного вызова, которая срабатывает при
		// неуспешном выполнении запроса. При вызове
		// функции onError в её единственный параметр передается сообщение
		// об ошибке;
		load: function(onLoad, onError) {
			var xhr = new XMLHttpRequest();
			xhr.responseType = 'json';
			xhr.addEventListener('load', function() {
				if (xhr.status === 200) {
					onLoad(xhr.response);


				} else {
					onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);

					//console.log('no');
				}

			});
			// xhr.open('GET', URL.load);
			// xhr.send();
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

		// 		Функция backend.save должна принимать на вход следующие параметры:
		// o data — объект FormData, который содержит данные формы, которые будут
		// отправлены на сервер
		// o onLoad — функция обратного вызова, которая срабатывает при успешном
		// выполнении запроса
		// o onError — функция обратного вызова, которая срабатывает при
		// неуспешном выполнении запроса. При вызове
		// функции onError в её единственный параметр передается сообщение
		// об ошибке или объект с описанием ошибки полученный с сервера

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

			// var form = document.querySelector('.setup-wizard-form');
			// form.addEventListener('submit', function(evt) {
			// //если отклик (response) прошёл, то закрываем окно настройки
			// upload(form, new FormData(form), function(response) {
			// 	document.querySelector('.setup').classList.add('hidden');
			// });
			// evt.preventDefault();

			//СЮДА НАДО БОБАВИТЬ ОБРАБОТЧИК ОШИБОК
			xhr.open('POST', URL.save);

			xhr.send(data);
		},
		// 5. Добавьте обработку возможных ошибок при загрузке: создайте DOM-элемент,
		// который будет показывать сообщения об ошибках, произошедших по ходу загрузки
		// данных. Дизайн DOM-элемента предлагается вам придумать самостоятельно.
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

// Функция backend.load должна принимать на вход следующие параметры:
// o onLoad — функция обратного вызова, которая срабатывает при успешном
// выполнении запроса. При вызове функции onLoad в её единственный
// параметр передается набор полученных данных;
// o onError — функция обратного вызова, которая срабатывает при
// неуспешном выполнении запроса. При вызове
// функции onError в её единственный параметр передается сообщение
// об ошибке;
// Функция backend.save должна принимать на вход следующие параметры:
// o data — объект FormData, который содержит данные формы, которые будут
// отправлены на сервер
// o onLoad — функция обратного вызова, которая срабатывает при успешном
// выполнении запроса
// o onError — функция обратного вызова, которая срабатывает при
// неуспешном выполнении запроса. При вызове
// функции onError в её единственный параметр передается сообщение
// об ошибке или объект с описанием ошибки полученный с сервера
// 2. Подключите модуль backend.js в index.html
// 3. Перепишите код проекта таким образом, чтобы для блока похожих
// волшебников в качестве данных использовались не случайно
// сгенерированные объекты, которые вы делали в задании «#12 Нас орда»,
// а те данные, которые вы загрузите с сервера https://js.dump.academy/codeand-magick/data. Для отрисовки в блоке похожих волшебников используйте
// 4 произвольных записи из полученных данных.
// 4. Доработайте обработчик отправки формы, который вы делали в задании
// «#14 Учебный проект: одеть Надежду», так чтобы он отменял действие
// формы по умолчанию и отправлял данные формы
// на сервер https://js.dump.academy/code-and-magick. А при успешной загрузке
// данных на сервер закрывал окно редактирования персонажа.

// onServerError: function(errorMessage) {
// 	var errorContainer = document.createElement('div');
//
// 	var onErrorHide = function() {
// 		errorContainer.classList.add('hidden');
// 	};
//
// 	errorContainer.textContent = errorMessage;
// 	errorContainer.classList.add('error');
//
// 	document.body.appendChild(errorContainer);
//
// 	setTimeout(onErrorHide, 5000);
// }
// }
// };
// };




// 5. Добавьте обработку возможных ошибок при загрузке: создайте DOM-элемент,
// который будет показывать сообщения об ошибках, произошедших по ходу загрузки
// данных. Дизайн DOM-элемента предлагается вам придумать самостоятельно.
// Работа с JSONP
// Сервер, на котором находится информация, поддерживает JSONP запросы,
// поэтому, при желании, вы можете попрактиковаться в их выполнении и обработке
// данных. Для этого, нужно отправить запрос по тому же адресу, что указан
// в задании, добавив к нему GET-параметр callback. Так, запрос
// на https://js.dump.academy/code-and-magick/data отдаст данные для Кодымагии
// как обычный JSON, а запрос на https://js.dump.academy/code-andmagick/data?callback=callbackName отдаст JS-код, который вызывает
// функцию callbackName. Вы можете изменять имя коллбэка, меняя значение GETпараметра. Проверить как это работает можно прямо в браузере, скопировав
// адрес в адресную строку.
// Для того чтобы вы могли закрепить работу с JSONP на практике, мы сделали так,
// чтобы запросы к любому адресу, в том числе и к тем, которые используются
// в личных проектах, умели отдавать JSONP. Но помните, что в личных проектах
// запрос нужно делать через XMLHttpRequest, а возможность использовать JSONP
// добавлена только для того, чтобы вы могли самостоятельно попрактиковаться.







//
