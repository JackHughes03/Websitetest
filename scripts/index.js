var servicesbutton = document.getElementById('servicesbutton');
var aboutbutton = document.getElementById('aboutbutton');
var contactbutton = document.getElementById('contactbutton');
var homebutton = document.getElementById('homebutton');

function navservices() {
	servicesbutton.style.backgroundColor = '#009abb';

	contactbutton.style.backgroundColor = 'transparent';
	aboutbutton.style.backgroundColor = 'transparent';
	homebutton.style.backgroundColor = 'transparent';
}

function navabout() {
	aboutbutton.style.backgroundColor = '#009abb';

	contactbutton.style.backgroundColor = 'transparent';
	servicesbutton.style.backgroundColor = 'transparent';
	homebutton.style.backgroundColor = 'transparent';
}

function navcontact() {
	contactbutton.style.backgroundColor = '#009abb';

	aboutbutton.style.backgroundColor = 'transparent';
	servicesbutton.style.backgroundColor = 'transparent';
	homebutton.style.backgroundColor = 'transparent';
}

function navhome() {
	homebutton.style.backgroundColor = '#009abb';

	aboutbutton.style.backgroundColor = 'transparent';
	servicesbutton.style.backgroundColor = 'transparent';
	contactbutton.style.backgroundColor = 'transparent';
}

function unblurimg() {
	var unblurimg = document.getElementById('unblurimg');

	if(unblurimg.style.filter == 'blur(0px)') {
		unblurimg.style.filter = 'blur(10px)';
	} else {
		unblurimg.style.filter = 'blur(0px)';
	}
}

var navbuttonsdiv = document.getElementById('navbuttonsdiv');
var lines3 = document.getElementById('lines3');
var documentit = 1;

function menutouchscreen() {
	var hr1 = document.getElementById('hr1');
	var hr2 = document.getElementById('hr2');
	var hr3 = document.getElementById('hr3');

	if(hr3.style.transform == 'rotate(40deg)') {
		lines3.style.marginTop = '10px';
		hr1.style.display = 'block';
		hr3.style.marginTop = '-3px';
		hr2.style.marginTop = '-3px';
		hr3.style.transform = 'rotate(0deg)';
		hr2.style.transform = 'rotate(0deg)';
		navbuttonsdiv.style.display = 'none';

		navbuttonsdiv.style.height = '50px';
		navbuttonsdiv.style.width = '500px';
		navbuttonsdiv.style.border = 'none';
		navbuttonsdiv.style.backgroundColor = 'transparent';
		navbuttonsdiv.style.marginTop = '0px';
		navbuttonsdiv.style.marginLeft = '-82px';

		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';

		documentit += 1;
	} else {
		hr1.style.display = 'none';
		hr3.style.marginTop = '-10px';
		hr2.style.marginTop = '15px';
		hr3.style.transform = 'rotate(40deg)';
		hr2.style.transform = 'rotate(-40deg)';

		navbuttonsdiv.style.display = 'block';
		navbuttonsdiv.style.backgroundColor = 'rgb(30, 35, 40)';
		servicesbutton.style.border = '1px solid white';
		aboutbutton.style.border = '1px solid white';
		contactbutton.style.border = '1px solid white';
		homebutton.style.border = '1px solid white';

		navbuttonsdiv.style.height = '175px';
		navbuttonsdiv.style.textAlign = 'center';
		navbuttonsdiv.style.width = '90px';
		navbuttonsdiv.style.marginTop = '20px';
		navbuttonsdiv.style.marginLeft = '0px';
		navbuttonsdiv.style.border = '1px solid white'
		navbuttonsdiv.style.borderRadius = '15px';

		servicesbutton.style.marginTop = '15px';
		aboutbutton.style.marginTop = '15px';
		contactbutton.style.marginTop = '15px';
		homebutton.style.marginTop = '15px';

		documentit -= 1;
	}
}

window.addEventListener("resize", function() {
	if (window.matchMedia("(min-width: 570px)").matches) {
		navbuttonsdiv.style.display = 'block';
		lines3.style.display = 'none';

		navbuttonsdiv.style.height = '50px';
		navbuttonsdiv.style.width = '500px';
		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';

		servicesbutton.style.border = 'none';
		aboutbutton.style.border = 'none';
		contactbutton.style.border = 'none';
		homebutton.style.border = 'none';

		navbuttonsdiv.style.border = 'none';
		navbuttonsdiv.style.backgroundColor = 'transparent';
		navbuttonsdiv.style.marginTop = '0px';
		navbuttonsdiv.style.marginLeft = '-82px';
	} else {
		navbuttonsdiv.style.display = 'none';
		lines3.style.display = 'block';

		lines3.style.marginTop = '10px';
		hr1.style.display = 'block';
		hr3.style.marginTop = '-3px';
		hr2.style.marginTop = '-3px';
		hr3.style.transform = 'rotate(0deg)';
		hr2.style.transform = 'rotate(0deg)';
		navbuttonsdiv.style.display = 'none';
	}
})

window.addEventListener('resize', function(event){
	if(documentit == 0) {
		navbuttonsdiv.style.marginLeft = '-82px';
	} else {
		navbuttonsdiv.style.marginLeft = '20px';
	}
});

window.addEventListener('load', (event) => {
	if (window.matchMedia("(min-width: 570px)").matches) {
		navbuttonsdiv.style.display = 'block';
		lines3.style.display = 'none';

		navbuttonsdiv.style.height = '50px';
		navbuttonsdiv.style.width = '500px';
		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';

		servicesbutton.style.border = 'none';
		aboutbutton.style.border = 'none';
		contactbutton.style.border = 'none';
		homebutton.style.border = 'none';

		navbuttonsdiv.style.border = 'none';
		navbuttonsdiv.style.backgroundColor = 'transparent';
		navbuttonsdiv.style.marginTop = '0px';
		navbuttonsdiv.style.marginLeft = '20px';
	} else {
		navbuttonsdiv.style.display = 'none';
		lines3.style.display = 'block';

		lines3.style.marginTop = '10px';
		hr1.style.display = 'block';
		hr3.style.marginTop = '-3px';
		hr2.style.marginTop = '-3px';
		hr3.style.transform = 'rotate(0deg)';
		hr2.style.transform = 'rotate(0deg)';
		navbuttonsdiv.style.display = 'none';
	}
});