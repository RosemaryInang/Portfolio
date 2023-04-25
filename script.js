const toggleBtn  = document.querySelector('#top .hamburger');
const navbar  = document.querySelector('#top ul');

toggleBtn.addEventListener('click', e => {
    navbar.classList.toggle('show');
    toggleBtn.classList.toggle('active');
})

//  Web Developer, Designer & Programmer
var typed = new Typed('#type-name', {
    strings: ["I &#39; m Rose"],
    typeSpeed: 100,
  });
var typed2 = new Typed('#typing', {
    strings: ['Web Developer, Designer &amp; Programmer'],
    typeSpeed: 100,
    startDelay: 2000,
  });
