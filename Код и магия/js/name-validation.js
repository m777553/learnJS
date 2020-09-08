'use strict';


// Урок 4. Работа с событиями.


// Валидация ввода имени персонажа. Имя персонажа вводится в
// поле .setup-user-name. Добавьте следующие ограничения:
// o имя персонажа не может содержать менее 2 символов;
// o максимальная длина имени персонажа — 25 символов.
// Для указания ограничений на ввод используйте стандартные возможности
// форм HTML5.



// Обрабатываем событие invalid на поле ввода имени персонажа
(function() {
	window.form = document.querySelector('.setup-wizard-form'); //data

	window.form.addEventListener('submit', function(evt) {
		//если отклик (response) прошёл, то закрываем окно настройки
		window.backend.save(
			new FormData(window.form),
			function(response) {
				document.querySelector('.setup').classList.add('hidden');
//console.log('close');
				evt.preventDefault();
				//	});
			}, //onLoad
			function(str) {
				window.backend.createErrorPopup(str);
			}
		); //onError
	});


	var userNameInput = document.querySelector('.setup-user-name');

	//Останавливаем распространение события закрытия на ESC пока мы на поле ввода имени
	userNameInput.addEventListener('keydown', function(evt) {
		if (evt.keyCode === window.keyCodes.ESC_KEYCODE) {
			evt.stopPropagation();
		}
	});
	userNameInput.addEventListener('invalid', function(evt) {
		if (userNameInput.validity.tooShort) {
			userNameInput.setCustomValidity('Поле должно содержать минимум два символа');
		} else if (userNameInput.validity.tooLong) {
			userNameInput.setCustomValidity('Поле должно содержать не более 25 символов');
		} else if (userNameInput.validity.valueMissing) {
			userNameInput.setCustomValidity('Поле должно быть заполнено, позязя');
		} else {
			userNameInput.setCustomValidity('');
		}

	});
})();
