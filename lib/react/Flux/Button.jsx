/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';

class Button extends React.Component {
	render () {
		let items = this.props.items;
		let itemTemplate = items.map((listItem, index) => {
			return (
				<li key={index}>{listItem}</li>
			);
		});
		return (
			<div>
				<ul>{itemTemplate}</ul>
				<button onClick={this.props.onClick}>New Item</button>
			</div>
		);
	}
}

export default Button;