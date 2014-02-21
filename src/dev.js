/* jslint white: false */
/* global $ */

(function () {

	'use strict';

	var scripts = document.getElementsByTagName('script');
	var src = scripts[scripts.length - 1].src;
	var path = src.replace(/\w+.js$/, '');

	$(document).ready(function () {

		var stylesheet = '<link rel="stylesheet" href="' + path + 'dev.css" type="text/css" />';
		$('head').append(stylesheet);

		var buttonColumns = '<button class="dev-toggle-columns btn btn-primary btn-xs"><i class="glyphicon glyphicon-barcode"></i></button>';
		var buttonOutline = '<button class="dev-toggle-outline btn btn-info btn-xs"><i class="glyphicon glyphicon-qrcode"></i></button>';
		var buttons = '<div class="dev-buttons btn-group">' + buttonColumns + buttonOutline + '</div>'
		$('body').prepend(buttons);

		var columns = '';
		for (var i = 0; i < 12; i++) {
			columns += '<div class="col-md-1"></div>';
		}
		columns = '<div class="container dev-container"><div class="row">' + columns + '</div></div>';
		$('body').prepend(columns);

		$('button.dev-toggle-columns').click(function () {
			$('.dev-container').toggle();
		});

		$('button.dev-toggle-outline').click(function () {
			var outlines = $('div.dev-outline');
			if (outlines.length === 0) {
				$('div[class*="col-lg-"]').each(function () {
					$(this).addClass('dev-outline');
				});
			} else {
				outlines.each(function () {
					$(this).removeClass('dev-outline');
				});
			}
		});

	});

})();
