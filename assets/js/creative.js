(function ($) {
  /* ---------------------------------------------- /*
	 * owl header
	/* ---------------------------------------------- */
  $(document).ready(function () {
    $('.header1').owlCarousel({
      autoPlay: 3000,
      stopOnHover: true,
      navigation: true,
      paginationSpeed: 1000,
      goToFirstSpeed: 2000,
      singleItem: true,
      autoHeight: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [980, 2],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
    });
  });

  /* ---------------------------------------------- /*
	 * owl socios
	/* ---------------------------------------------- */
  $('#owl-socios').owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    autoWeith: false,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
  });

  /* ---------------------------------------------- /*
	 * Precarga
	/* ---------------------------------------------- */

  $(window).load(function () {
    $('#loading').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
  });

  ('use strict'); // inicio de uso estricto

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 50,
        },
        1250,
        'easeInOutExpo'
      );
    event.preventDefault();
  });

  // Highlight en la navegacion superior a medida que se desplaza
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51,
  });

  // Cierra el menu responsivo al hacer clic
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  // Ajuste de texto del encabezado principal
  $('h1').fitText(1.2, {
    minFontSize: '35px',
    maxFontSize: '65px',
  });

  // Compensación para la navegación principal
  $('#mainNav').affix({
    offset: {
      top: 100,
    },
  });

  // Inicia WOW.js
  new WOW().init();
})(jQuery); // Fina del uso estricto

/* Parallax
 =============================================*/
(function ($) {
  include('../../js/jquery.rd-parallax.js');
})(jQuery);

/* Filtro
 =============================================*/
/*--------------------------
	scrollUp
---------------------------- */
$.scrollUp({
  scrollText: '<i class="fa fa-angle-up"></i>',
  easingType: 'linear',
  scrollSpeed: 900,
  animation: 'fade',
});
