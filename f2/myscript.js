$('document').ready(function(){
	$('p').on('click', backLight);
});

function backLight(){
	$('p').css('font-size', '16px');
	$(this).css('font-size', '20px');
}