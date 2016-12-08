// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
jQuery(document).ready(function () {
	jQuery(window).on('scroll', function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrolltop').fadeIn();
		} else {
			jQuery('.scrolltop').fadeOut();
		}
	});

	jQuery('.scrolltop').on('click', function () {
		jQuery('html, body').animate({
			scrollTop: 0
		}, 1000);

		return false;
	});
});