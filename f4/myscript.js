$('document').ready(function(){
	$('#bhide').on('click', fHide);
	$('#bshow').on('click', fShow);
	$('#btoggle').on('click', fToggle);
	$('#b-slide-up').on('click', fSlideUp);
	$('#b-slide-down').on('click', fSlideDown);
	$('#b-slide-toggle').on('click', fSlideToggle);

});


function fHide() {
	$('.test').hide(1000);
}

function fShow() {
	$('.test').show(1000);
}

function fToggle() {
	$('.test').toggle(1000);
}

function fSlideUp() {
	$('.test').slideUp(1000);
}

function fSlideDown() {
	$('.test').slideDown(1000);
}

function fSlideToggle() {
	$('.test').slideToggle(1000);
}

// fadeIn()
// FadeOut()
// FadeToggle()
