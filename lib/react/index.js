/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var ReactDom = require('react-dom');
var MiniSite = require('Controller');
var css = require('app.css');

ReactDom.render(
	<MiniSite />,
	document.getElementById('controller')
);