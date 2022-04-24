/* eslint-disable no-undef */

	// Animation on Scroll Initialization
	AOS.init({
    once:true
  });

	// Load Particles
	particlesJS.load('particles', 'assets/particles.json',function(){});

	// Show Nav Home Button -> If user scrolled 20px from the top
	const home = $("#nav-home");
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      home.removeClass('d-none');
    } else {
      home.addClass('d-none');
    }
	}

	// Shrink Navigation Top
	window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
      const nav_top = document.body.querySelector('#nav-top');
      if (!nav_top) {
          return;
      }
      if (window.scrollY === 0) {
        nav_top.classList.add('navbar-shrink');
          $('#nav-top').removeClass('bg-dark');
      } else {
          nav_top.classList.remove('navbar-shrink');
          $('#nav-top').addClass('bg-dark');
      }
    };
    // Shrink the navbar
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
	});

	// COLLAPSE NAV ITEMS WHEN LINK IS CLICKED
	$('.navbar-nav>li>a').on('click', function(){
	$('.navbar-collapse').collapse('hide');
	});
