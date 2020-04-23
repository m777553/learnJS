'use strict';

var CLOUD_WIDTH = 490;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var COLUMN_X = 150;
var COLUMN_Y = 120;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT_MAX = 150;
var GAP_COLUMN = 50;
var TEXT_Y = 100;

var namesTest = ['Lex', 'Вы', 'Bar', 'Frost'];
var timesTest = [Math.floor(Math.random() * (1500 - 800)) + 800, Math.floor(Math.random() * (1500 - 800)) + 800, Math.floor(Math.random() * (1500 - 800)) + 800, Math.floor(Math.random() * (1500 - 800)) + 800];
var columnHeight = 1500;


var getMaxElement = function(array) {
	var maxElem = array[0];
	for (var i = 0; i < array.length; i++) {
		if (maxElem < array[i]) {
			maxElem = array[i];
		};
	};

	return maxElem;
};
//alert(getMaxElement(timesTest));

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function(ctx, names, times) {
	var maxTime = getMaxElement(times);
	for (var i = 0; i < names.length; i++) {
		ctx.fillStyle = 'black';
		ctx.fillText(names[i], COLUMN_X + (GAP_COLUMN + COLUMN_WIDTH) * i, TEXT_Y);
		if (names[i] == 'Вы') {
			ctx.fillStyle = 'green';
		} else {
			ctx.fillStyle = `hsl(${Math.floor(Math.random() * (260 - 180))+180}, 100%, 50%)`;
		};
		var columnHeight = times[i] * COLUMN_HEIGHT_MAX / maxTime;
		ctx.fillRect(COLUMN_X + (GAP_COLUMN + COLUMN_WIDTH) * i, COLUMN_Y, COLUMN_WIDTH, columnHeight);
	};
};

window.renderStatistics = function(ctx, names, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.3)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


	ctx.fillStyle = '#000';
	ctx.font = '16px Tahoma';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура	вы победили', 150, 30);
	ctx.fillText('Список результатов:', 150, 60);

	// ctx.fillText('John', 150, TEXT_Y);
	// ctx.fillRect(150, COLUMN_Y, COLUMN_WIDTH, columnHeight);
	//
	// ctx.fillText('Mikl', COLUMN_WIDTH + 150 + GAP_COLUMN, TEXT_Y);
	// ctx.fillRect(COLUMN_WIDTH + 150 + GAP_COLUMN, COLUMN_Y, COLUMN_WIDTH, columnHeight);

	renderColumn(ctx, names, times);

};
