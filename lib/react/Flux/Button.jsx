/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';

class Button extends React.Component {
	render () {
		let items = this.props.items;
		let template = items.map((listItem, index) => {
			return (
				<li key={index}>{listItem}</li>
			);
		});
		return (
			<div>
				<ul>{template}</ul>
				<button onClick={this.props.onClick}>Add</button>
			</div>
		);
	}
}

export default Button;