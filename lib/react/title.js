/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var weui = require('../../assets/weui/weui.css');

var Title = React.createClass({
	render: function () {
		return (
			<div className={weui.hd}>
				<h1 className={weui.page_title}>MiniSite</h1>
			</div>
		);
	}
});

module.exports = Title;