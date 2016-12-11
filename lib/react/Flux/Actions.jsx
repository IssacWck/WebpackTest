/**
 * Created by WangCK on 2016/12/11.
 */
import AppDispatcher from './AppDispatcher';

const Actions = {
	addNewItem (text) {
		AppDispatcher.dispatch({
			actionType: 'ADD_NEW_ITEM',
			text
		});
	}
};

export default Actions;