/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');

var Site = React.createClass({
	selectSite: function (el, index) {
		this.props.selectSite(el, index);
	},
	render: function () {
		var site = this.props.site;
		var siteElement = site.map(function (el, index) {
			var className = el.selected ? 'site_icon site_icon_selected' : 'site_icon';
			return (
				<div className={className} onClick={this.selectSite.bind(this, el, index)} key={index} value={el.selected}>{el.id}</div>
			);
		}.bind(this))
		return (
			<div className="bd spacing">
				<div className="site">
					{siteElement}
				</div>
			</div>
		);
	}
});

module.exports = Site;