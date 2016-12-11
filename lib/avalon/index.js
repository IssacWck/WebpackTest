/**
 * Created by WangCK on 2016/11/18.
 */
var avalon = require('avalon');
var jQuery = require('jQuery');
var Controller = require('Controller');
var Component = require('./component.html');
var weui = require('../../assets/weui/weui.css');
var custom = require('../../assets/weui/custom.css');

avalon.config({
	debug: true,
	interpolate: ['[--', '--]']
});

avalon.directive('selecteds', {
	update: function(selected) {
		var element = this.element;
		if (selected === 1) {
			avalon(element).addClass('site_icon_selected');
		} else {
			avalon(element).removeClass('site_icon_selected');
		}
	}
});

jQuery('#controller').attr('ms-controller', 'controller');
jQuery('#controller').html(Component);

Controller.getData('http://minisite.com/getSite', 'site', null, null);

Controller.checkSelected(function () {
	Controller.loading = false;
	setInterval(function () {
		Controller.checkSelected();
	}, 5000)
});
console.log('avalon');

avalon.scan();