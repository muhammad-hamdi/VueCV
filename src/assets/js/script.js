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

//Smooth Scroll Setup
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
      }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  })
