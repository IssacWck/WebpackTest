/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var css = require('../../assets/weui/custom.css');

var LoadingAnimation = React.createClass({
	render: function () {
		var display = this.props.display ? 'block' : 'none';
		return (
			<div className={css.loading} style={{display: display}}>
				<div className={css.spinner}>
					<div className={css['spinner-container'] + ' ' + css.container1}>
						<div className={css.circle1}></div>
						<div className={css.circle2}></div>
						<div className={css.circle3}></div>
						<div className={css.circle4}></div>
					</div>
					<div className={css['spinner-container'] + ' ' + css.container2}>
						<div className={css.circle1}></div>
						<div className={css.circle2}></div>
						<div className={css.circle3}></div>
						<div className={css.circle4}></div>
					</div>
					<div className={css['spinner-container'] + ' ' + css.container3}>
						<div className={css.circle1}></div>
						<div className={css.circle2}></div>
						<div className={css.circle3}></div>
						<div className={css.circle4}></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoadingAnimation;