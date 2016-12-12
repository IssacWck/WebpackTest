/**
 * Created by WangCK on 2016/12/11.
 */
import { EventEmitter } from 'events';
import assign from 'object-assign';

const Store = assign({}, EventEmitter.prototype, {
	items: [],

	getAll () {
		return this.items;
	},

	addNewItemHandler (text) {
		this.items.push(text);
		this.emitChange();
	},

	emitChange () {
		this.emit('change');
	},

	addChangeListener (callback) {
		this.on('change', callback);
	},

	removeChangeListener (callback) {
		this.removeListener('change', callback);
	}
});

export default Store;