/**
 * Created by WangCK on 2016/12/11.
 */
import { EventEmitter } from 'events';
import assign from 'object-assign';
import jQuery from 'jQuery';
import Q from 'q';

const Store = assign({}, EventEmitter.prototype, {
    data: {
        site: [],
        select: [],
        loading: true
    },

    getData (key) {
        return this.data[key];
    },

	getSite () {
		this.httpRequest('getSite').then(response => {
			this.data.site = response;
			this.data.loading = false;
			this.emit('getSite');
		});
	},

	checkSelected () {
		this.httpRequest('checkSelected').then(response => {
			for (let i = 0; i < response.length; i++) {
				this.data.site[response[i].id - 1].selected = 1;
			}
			this.emitChange('checkSelected');
		});
	},

	selectSite (el, index) {
		this.data.select.push({
			id: el.id,
			siteIndex: index
		});
		this.data.site[index].selected = 1;
		this.emitChange('selectSite');
	},

	close () {
		this.data.select.splice(index, 1);
		this.data.site[siteIndex].selected = 0;
		this.emitChange('close');
	},

	submit () {
		if (this.data.select.length < 1 || this.data.loading) {
			return false;
		}
		let i, data = '';
		for (i in this.data.select) {
			data += this.data.select[i].id + ',';
		}
		this.httpRequest('insertSite', { id: data }).then(response => {
			if (response === 1) {
				for (i in this.data.select) {
					this.data.site[this.data.select[i].siteIndex].selected = 1;
				}
				this.emitChange('submit');
			} else {
				alert('选座失败');
				this.emitChange('submit');
				return;
			}
		});
	},

	loading () {
		this.data.loading = true;
		this.emitChange('loading');
	},

	emitChange (eventName) {
		this.emit(eventName);
	},

	addChangeListener (eventName, callback) {
		this.on(eventName, callback);
	},

	removeChangeListener (eventName, callback) {
		this.removeListener(eventName, callback);
	},

	httpRequest (url, data) {
		var deferred = Q.defer();
		jQuery.ajax({
			type: data ? 'POST' : 'GET',
			url: 'http://minisite.com/' + url,
			data: data || {},
			dataType: 'json',
			success: deferred.resolve,
			error: deferred.reject
		});
		return deferred.promise;
	}
});

export default Store;