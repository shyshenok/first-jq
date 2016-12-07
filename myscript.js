$(document).ready(function(){
	//only after download document html
	//choose all p
	//$('p').css('color', 'red');
	// $('.one').css({
	// 	'color'          : 'blue',
	// 	'text-transform' : 'uppercase',
	// 	'font-weight'    : 'bold'
	// });

	// $('#two').css({
	// 	'color'      : 'yellow',
	// 	'font-style' : 'italic'
	// });
	$('#btn1').on('click', doColor);
	$('#btn2').on('click', doColorB);
	$('#btn3').on('click', doColorG);
	$('img').on('click', doColorG);
});

function doColor(){
	$('body').css({
		'color'      : '#fff',
		'background' : 'grey'
	});
}

function doColorB() {
	$('body').css({
		'color'      : 'red',
		'background' : 'blue'
	});
}

function doColorG() {
	$('body').css({
		'color'      : '#fff',
		'background' : '#000'
	});
}

