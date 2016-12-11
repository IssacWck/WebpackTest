/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var weui = require('../../assets/weui/weui.css');
var css = require('../../assets/weui/custom.css');

var Site = React.createClass({
	selectSite: function (el, index) {
		this.props.selectSite(el, index);
	},
	render: function () {
		var site = this.props.site;
		var siteElement = site.map(function (el, index) {
			var className = el.selected ? css.site_icon + ' ' + css.site_icon_selected : css.site_icon;
			return (
				<div className={className} onClick={this.selectSite.bind(this, el, index)} key={index} value={el.selected}>{el.id}</div>
			);
		}.bind(this))
		return (
			<div className={weui.bd + ' ' + weui.spacing}>
				<div className={css.site}>
					{siteElement}
				</div>
			</div>
		);
	}
});

module.exports = Site;