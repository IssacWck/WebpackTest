/**
 * Created by WangCK on 2016/12/11.
 */
import { Dispatcher } from 'flux';
import Store from './Store';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case 'ADD_NEW_ITEM':
			Store.addNewItemHandler(action.text);
			// Store.emitChange();
			break;
		default:
			break;
	}
});

export default AppDispatcher;