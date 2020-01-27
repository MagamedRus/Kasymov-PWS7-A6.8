let progressBarMax = $('#progress-bar-main').width();
let progressBar = 0;
let plusOne = 0.01;
let plusThree = 0.03;
let plusSeven = 0.07;


function plusOneF() {
	let forSmthSeven = (progressBarMax - (plusOne * progressBarMax));
	if (progressBar < progressBarMax) {
	progressBar = (plusOne * progressBarMax) + progressBar;
	$('#my-progress-bar').width(progressBar);
	trueProcent = progressBar / (progressBarMax / 100);
	$('.text').text(trueProcent);}
	else {
		alert("ошибка!");
		return;
	}
};

function plusThreeF() {
	let forSmthSeven = (progressBarMax - (plusThree * progressBarMax));
	if (progressBar < progressBarMax) {
	progressBar = (plusThree * progressBarMax) + progressBar;
	$('#my-progress-bar').width(progressBar);
	trueProcent = progressBar / (progressBarMax / 100);
	$('.text').text(trueProcent);}
	else {
		alert("ошибка!")
		return;
	}
}

function plusSevenF() {
	let forSmthSeven = (progressBarMax - (plusSeven * progressBarMax));
	if (progressBar < forSmthSeven) {
	progressBar = (plusSeven * progressBarMax) + progressBar;
	$('#my-progress-bar').width(progressBar);
	trueProcent = progressBar / (progressBarMax / 100);
	$('.text').	text(trueProcent);
	}
	else {
		alert("ошибка!")
		return;
	}
}