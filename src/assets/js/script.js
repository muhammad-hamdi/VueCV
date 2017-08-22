// particles.js setup
window.onload = function() {
   Particles.init({
     selector: '.canvas',
     maxParticles: 250,
     color: '#8F80ED',
     connectParticles: true,
     responsive: [
     {
       breakpoint: 768,
       options: {
         maxParticles: 200,
         color: '#48F2E3',
         connectParticles: false
       }
     }, {
       breakpoint: 425,
       options: {
         maxParticles: 100,
         connectParticles: true
       }
     }, {
       breakpoint: 320,
       options: {
         maxParticles: 0 // disables particles.js
       }
     }
    ]
   });
};