/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import css from 'weui/custom.css';

class Loading extends React.Component {
	render() {
		let displayStyle = this.props.display ? 'block' : 'none';
		return (
			<div className={css.loading} style={{display: displayStyle}}>
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
}

export default Loading;