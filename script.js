// let navBtn = document.querySelector('.fas');
// let navWrapper = document.querySelector('#nav-items-wrapper');
// let navItem = document.querySelectorAll('.item');
// let body = document.querySelector('body');

// navBtn.addEventListener('click', function() {
//     setTimeout(function() {
//         navBtn.classList.toggle("fa-times");
//     }, 300);

//     if ( navWrapper.style.left != "0px" ) {
//         navWrapper.style.left = "0px";
//         body.style.overflowY = 'hidden'
//     } else {
//         navWrapper.style.left = "-220px";
//         body.style.overflowY = 'scroll'
//     }

//     navItem.forEach( item =>{
//         item.style.visibility = 'hidden'
//         setTimeout(()=>{
//             item.style.visibility = 'visible'
//         }, 350)
//        })
// })

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
