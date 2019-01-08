$(document).ready(function () {

function clock() {
	// body...


	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds();
	var aMPM = '';

	if (hours === 0){
		hours = 12;
	} else if (hours > 12){
		aMPM = 'P.M';
		hours = hours - 12;
	}else if (hours <= 12){
		aMPM = 'A.M.';
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
	document.getElementById('min').innerHTML = ": " + mins;
	document.getElementById('secs').innerHTML = ": " + secs;
	document.getElementById('aMPM').innerHTML = aMPM;


}

setInterval(clock,100);





});