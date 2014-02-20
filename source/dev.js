/* jslint white: false */
/* global $ */

(function () {

	'use strict';

	var scripts = document.getElementsByTagName('script');
	var src = scripts[scripts.length - 1].src;
	var path = src.replace(/\w+.js$/, '');

	$(document).ready(function () {
		$('head').append('<link rel="stylesheet" href="' + path + 'dev.css" type="text/css" />');
		$('body').prepend('<div class="container developer"><button type="button" class="toggle btn btn-info btn-xs"><i class="glyphicon glyphicon-th"></i></button><div class="row developer-columns" ><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div><div class="col-md-1">&nbsp;</div></div></div>');
		$('.toggle').click(function () {
			$('.developer-columns').toggle();
		});
	});

})();
