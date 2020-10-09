'use strict';;

(function() {
	var FILE_TIPES = ['gif', 'jpg', 'jpeg', 'png'];

	var preview = document.querySelector('.notice__preview').querySelector('img');

	var inputFile = document.querySelector('.notice__form input[type="file"]');


	inputFile.addEventListener('change', function() {
		var file = inputFile.files[0];
		var fileName = file.name.toLowerCase();


		//Функция возвращает true/false на разрешение файла среди списка
		var matches = FILE_TIPES.some(function(it) {
			return fileName.endsWith(it);
		});
		if (matches) {
			var reader = new FileReader();
			reader.addEventListener('load', function() {
				preview.src = reader.result;
			});
			reader.readAsDataURL(file);
		}



	});









})();
