/**
 * Created by WangCK on 2016/12/11.
 */
import Dispatcher from './Dispatcher';

const Actions = {
	getSite () {
		Dispatcher.dispatch({
			actionType: 'GET_SITE'
		});
	},

	checkSelected () {
		Dispatcher.dispatch({
			actionType: 'CHECK_SELECTED'
		});
	},

	selectSite (el, index) {
		Dispatcher.dispatch({
			actionType: 'SELECT_SITE',
			el,
			index
		});
	},

	close (index, siteIndex) {
		Dispatcher.dispatch({
			actionType: 'CLOSE_SITE',
			index,
			siteIndex
		});
	},

	submit () {
		Dispatcher.dispatch({
			actionType: 'SUBMIT_DATA'
		});
	},

	loading () {
		Dispatcher.dispatch({
			actionType: 'LOADING'
		});
	}
};

export default Actions;