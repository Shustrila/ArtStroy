$(function() {
  $('.js-modal-callback').magnificPopup({
	  type: 'inline',
  });
});

$(document).ready(function() {
  $('.js-scroll').on('click', function(e) {
  	e.preventDefault();

    $('html, body').animate({
      scrollTop: $($(this).attr('href')).position().top,
    }, 1000);
  });
});
