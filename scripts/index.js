var servicesbutton = document.getElementById('servicesbutton');
var aboutbutton = document.getElementById('aboutbutton');
var contactbutton = document.getElementById('contactbutton');
var homebutton = document.getElementById('homebutton');
var gallerybutton = document.getElementById('gallerybutton');

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
		navbuttonsdiv.style.marginLeft = '-45px';

		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';
		gallerybutton.style.marginTop = '0px';
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
		gallerybutton.style.border = '1px solid white';

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
		gallerybutton.style.marginTop = '15px';
	}
}

var servicescards = document.getElementById('servicescards');
var onepagewebsiteservice = document.getElementById('onepagewebsiteservice');

window.addEventListener("resize", function() {
	if (window.matchMedia("(min-width: 670px)").matches) {
		navbuttonsdiv.style.display = 'block';
		lines3.style.display = 'none';

		navbuttonsdiv.style.height = '50px';
		navbuttonsdiv.style.width = '500px';
		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';
		gallerybutton.style.marginTop = '0px';

		servicesbutton.style.border = 'none';
		aboutbutton.style.border = 'none';
		contactbutton.style.border = 'none';
		homebutton.style.border = 'none';
		gallerybutton.style.border = 'none';

		navbuttonsdiv.style.border = 'none';
		navbuttonsdiv.style.backgroundColor = 'transparent';
		navbuttonsdiv.style.marginTop = '0px';

		servicescards.style.height = '700px';
		servicescards.style.width = '600px';

		onepagewebsiteservice.style.marginTop = '0px';
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

		servicescards.style.height = '1090px';
		servicescards.style.width = '290px';

		onepagewebsiteservice.style.marginTop = '380px';
	}
})

window.addEventListener('resize', function(event) {

	if(navbuttonsdiv.style.marginLeft == '0px') {
		navbuttonsdiv.style.marginLeft = '-45px';
	}
});

window.addEventListener('load', (event) => {
	if (window.matchMedia("(min-width: 670px)").matches) {
		navbuttonsdiv.style.display = 'block';
		lines3.style.display = 'none';

		navbuttonsdiv.style.height = '50px';
		navbuttonsdiv.style.width = '500px';
		servicesbutton.style.marginTop = '0px';
		aboutbutton.style.marginTop = '0px';
		contactbutton.style.marginTop = '0px';
		homebutton.style.marginTop = '0px';
		gallerybutton.style.marginTop = '0px';

		servicesbutton.style.border = 'none';
		aboutbutton.style.border = 'none';
		contactbutton.style.border = 'none';
		homebutton.style.border = 'none';

		navbuttonsdiv.style.border = 'none';
		navbuttonsdiv.style.backgroundColor = 'transparent';
		navbuttonsdiv.style.marginTop = '0px';
		navbuttonsdiv.style.marginLeft = '20px';

		servicescards.style.height = '700px';
		servicescards.style.width = '600px';

		onepagewebsiteservice.style.marginTop = '0px';
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

		servicescards.style.height = '1090px';
		servicescards.style.width = '290px';

		onepagewebsiteservice.style.marginTop = '380px';
	}
});

// function fullwebsiteclick() {
// 	var fullwebsiteservice = document.getElementById('fullwebsiteservice');
// 	var colourfullwebsiteservice = document.getElementById('colourfullwebsiteservice');
// 	var textfullwebsite = document.getElementById('textfullwebsite');

// 	if(m == 1) {
// 		var m = 0;
// 		var k = 0;
// 		k += 180;
// 		m += 1;
// 		fullwebsiteservice.style.transform = "rotatey(" + k + "deg)";
// 		fullwebsiteservice.style.transitionDuration = "0.5s";

// 		colourfullwebsiteservice.style.backgroundColor = 'transparent';
// 		textfullwebsite.style.color = 'transparent';
// 		fullwebsiteservice.style.backgroundColor = 'gray';

// 		colourfullwebsiteservice.style.transition = '500ms';
// 		textfullwebsite.style.transition = '500ms';
// 		fullwebsiteservice.style.transition = '500ms';
// 	} else {
// 		var m = 0;
// 		var k2 = 0;
// 		k2 += 360;
// 		m -= 1;
// 		fullwebsiteservice.style.transform = "rotatey(" + k2 + "deg)";
// 		fullwebsiteservice.style.transitionDuration = "0.5s";

// 		colourfullwebsiteservice.style.backgroundColor = 'lightblue';
// 		textfullwebsite.style.color = 'transparent';
// 		fullwebsiteservice.style.backgroundColor = 'gray';

// 		colourfullwebsiteservice.style.transition = '500ms';
// 		textfullwebsite.style.transition = '500ms';
// 		fullwebsiteservice.style.transition = '500ms';
// 	}
// }