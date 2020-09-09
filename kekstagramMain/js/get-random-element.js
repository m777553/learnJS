'use strict';
(function() {




		//
		// 1. Загрузка нового изображения на сайт и заполнение
		// информации о нём:
		// 1.1. Загрузка нового изображения:
		// выбор файла с изображением для загрузки;
		// изменение масштаба изображения;
		// применение одного из заранее заготовленных эффектов;
		// выбор глубины эффекта с помощью ползунка;
		// добавление текстового комментария;
		// добавление хэш-тегов.
		// Обратите внимание
		// В последующих после выбора файла шагах может использоваться тестовое
		// изображение, вставленное в разметку по умолчанию. Подстановка в форму реального
		// изображения, выбранного пользователем необязательна.
		// 1.3. Выбор изображения для загрузки осуществляется с помощью стандартного контрола
		// загрузки файла #upload-file , который стилизован под букву «О» в логотипе. После
		// выбора изображения (изменения значения поля #upload-file ), показывается форма
		// редактирования изображения.
		// 1.4. Закрытие формы редактирования изображения производится либо нажатием
		// на кнопку .upload-cancel , либо нажатием клавиши Esc.
		var ESC_KEYCODE = 27;
		//форма редактирования загруженного изображения
		var editingForm = document.querySelector('.img-upload__overlay');


		//элемент, который иницирует загрузку
		var imgUpload = document.querySelector('.img-upload__label');

		//поле загрузки фото input[type='file']
		var imgInput = document.querySelector('#upload-file');

		//изображение предварительного просмотра
		var imgPreview = document.querySelector('.img-upload__preview');

		var closeBtn = document.querySelector('.img-upload__cancel');


		// открытие окна редактирования
		var openUploadForm = function() {

			//добавляю ридер
			editingForm.classList.remove('hidden');
			document.querySelector('.effect-level').classList.add('hidden');
			document.addEventListener('keydown', onPopupEscPress);
			//ставлю выбранное изображение в окно редактирования
			editingForm.querySelector('img').src = `img/${imgInput.files[0].name}`;
			// editingForm.querySelector('img').src = `${imgInput.value}`;
			//реализация мини изображений
			var effectsList = document.querySelector('.effects__list');
			var effectsItems = effectsList.querySelectorAll('span');
			for (var i = 0; i < effectsItems.length; i++) {
				effectsItems[i].style.backgroundImage = `url('img/${imgInput.files[0].name}')`;
			}
		};
		//закрытие окна редактирования

		var closeUploadForm = function() {
			editingForm.classList.add('hidden');
			document.removeEventListener('keydown', onPopupEscPress);
		};
		var onPopupEscPress = function(evt) {
			if (evt.keyCode === ESC_KEYCODE
				//&& evt.target !== input
			) {

				closeUploadForm();
			}
		};




		// var downloadPhoto = function() {
		// 	alert('downloadPhoto work');
		// 	//return adress = imgInput.files[0];
		// };

		imgUpload.addEventListener('click', function(evt) {
			imgUpload.addEventListener('keydown', function(evt) {
				if (evt.keyCode === ENTER_KEYCODE) {
					openUploadForm();
				}
			});
			imgInput.addEventListener('change', function(evt) {

				//alert(imgInput.files[0].name);
				openUploadForm();
			});

			//imgInput.removeEventListener('change', downloadPhoto);
		});

		closeBtn.addEventListener('click', closeUploadForm);


		// Нажатие на фотографию приводит к показу фотографии в полноэкранном режиме.
		// Получается, что для фотографий должны быть созданы обработчики событий,
		// которые вызывают показ оверлея с соответствующими данными.


		//функция выбора рандомного элемента из массива
		window.getRandomElement = function(massive) {
			return massive[Math.floor(Math.random() * massive.length)];
		};


		window.changeToRandomMassive = function(massive) {
			//var randomMassive = [];
			for (var f = 0; f < massive.length; f++) {
				var f1 = Math.floor(Math.random() * (massive.length - f)) + f;

				var elem = massive[f1];
				massive[f1] = massive[f];
				massive[f] = elem;

				//randomMassive.push(elem);
			}
			return massive;
		}


		})();
