/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import Actions from './Actions';
import Store from './Store';
import Buttons from './Button';

class Controller extends React.Component {
	constructor () {
		super();
		this._onChange = this._onChange.bind(this);
	}

	state = {
		items: Store.getAll()
	}

	componentDidMount () {
		Store.addChangeListener(this._onChange);
	}
	
	componentWillUnmount () {
		Store.removeChangeListener(this._onChange);
	}

	_onChange () {
		this.setState({
			items: Store.getAll()
		});
	}

	createNewItem () {
		Actions.addNewItem('new item');
	}

	render () {
		return (
			<Buttons items={this.state.items} onClick={this.createNewItem} />
		);
	}
}

export default Controller;