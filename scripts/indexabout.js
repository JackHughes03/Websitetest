var servicesbutton = document.getElementById('servicesbutton');
var aboutbutton = document.getElementById('aboutbutton');
var contactbutton = document.getElementById('contactbutton');
var homebutton = document.getElementById('homebutton');
var gallerybutton = document.getElementById('gallerybutton');

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    servicesbutton.style.backgroundColor = 'transparent';
    contactbutton.style.backgroundColor = 'transparent';
    aboutbutton.style.backgroundColor = '#009abb';
    homebutton.style.backgroundColor = 'transparent';
    gallerybutton.style.backgroundColor = 'transparent';
  }
}
