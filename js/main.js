$(document).ready(function () {

function clock() {
	// body...


	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();
	var aMPM = '';
	var date = fullDate;

	if (hours === 0){
		hours = 12;
	} else if (hours > 12){
		aMPM = 'p.m';
		hours = hours - 12;
	}else if (hours <= 12){
		aMPM = 'a.m.';
	}

	if (hours < 10){
		hours = "0" + hours;
	}

	if (mins < 10){
		mins = "0" + mins;
	}

	if (secs < 10){
		secs = "0" + secs;
	}

	document.getElementById('hour').innerHTML = hours;
	document.getElementById('min').innerHTML =  mins;
	document.getElementById('secs').innerHTML = secs;
	document.getElementById('aMPM').innerHTML = aMPM;
	document.getElementById('date').innerHTML = date.toDateString();


}

setInterval(clock,100);

function blinker(){
	$('.colon').fadeOut(500);
	$('.colon').fadeIn(500);
}

setInterval(blinker,1000);



});