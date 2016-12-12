/**
 * Created by WangCK on 2016/12/11.
 */
import { Dispatcher } from 'flux';
import Store from './Store';

const AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case 'GET_SITE':
			Store.getSite(() => {
				Store.emitChange('getSite');
			});
			break;
		case 'CHECK_SELECTED':
			Store.checkSelected();
			break;
		case 'SELECT_SITE':
			Store.selectSite(action.el, action.index);
			break;
		case 'CLOSE_SITE':
			Store.close(action.index, action.siteIndex);
			break;
		case 'SUBMIT_DATA':
			Store.submit();
			break;
		case 'LOADING':
			Store.loading();
			break;
		default:
			break;
	}
});

export default AppDispatcher;