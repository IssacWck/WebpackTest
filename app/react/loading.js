/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');

var LoadingAnimation = React.createClass({
	render: function () {
		var display = this.props.display ? 'block' : 'none';
		return (
			<div className="loading" style={{display: display}}>
				<div className="spinner">
					<div className="spinner-container container1">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
						<div className="circle4"></div>
					</div>
					<div className="spinner-container container2">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
						<div className="circle4"></div>
					</div>
					<div className="spinner-container container3">
						<div className="circle1"></div>
						<div className="circle2"></div>
						<div className="circle3"></div>
						<div className="circle4"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = LoadingAnimation;