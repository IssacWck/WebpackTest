/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var weui = require('../../assets/weui/weui.css');
var css = require('../../assets/weui/custom.css');

var Bottom = React.createClass({
	close: function (index, siteIndex) {
		this.props.close(index, siteIndex);
	},
	render: function () {
		if (this.props.select.length > 0) {
			var select = this.props.select;
			var display = 'block';
			var selectElement = select.map(function (el, index) {
				return (
					<div className={css.box} key={index}>
						<div className={css.number}>{el.id}</div>
						<div className={css.close} onClick={this.close.bind(this, index, el.siteIndex)}>X</div>
					</div>
				);
			}.bind(this));
		} else {
			var display = 'none';
		}
		return (
			<div style={{display: display}}>
				<div className={weui.hd}>
					<h1 className={weui.page_title}>已选择</h1>
				</div>
				<div className={css.selected}>
					{selectElement}
				</div>
				<button onClick={this.props.submit} className={weui.weui_btn + ' ' + weui.weui_btn_disabled + ' ' + weui.weui_btn_primary + ' ' + css.custom_button}>提交</button>
				<br/><br/>
			</div>
		);
	}
});

module.exports = Bottom;