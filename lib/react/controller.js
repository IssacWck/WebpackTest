/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var jQuery = require('jQuery');
var LoadingAnimation = require('./loading.js');
var Title = require('./title.js');
var Site = require('./site.js');
var Bottom = require('./bottom.js');
var Q = require('q');

var MiniSite = React.createClass({
	getInitialState: function () {
		return {
			site: [],
			select: [],
			loading: true,
			lala: '1'
		};
	},
	componentWillMount: function () {
		this.getData('getSite').then(function (response) {
			this.setState({ site: response });
			this.checkSelected({ loading: false });
		}.bind(this));
	},
	componentDidMount: function () {
		setInterval(function () {
			this.checkSelected({});
		}.bind(this), 5000);
		console.log('react');
	},
	getData: function (url, data) {
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
	},
	checkSelected: function (state) {
		this.getData('checkSelected').then(function (response) {
			var site = this.state.site;
			for (var i = 0; i < response.length; i++) {
				site[response[i].id - 1].selected = 1;
			}
			state.site = site;
			this.setState(state);
		}.bind(this));
	},
	selectSite: function (el, index) {
		if (el.selected === 1) {
			return false;
		}
		var select = this.state.select, site = this.state.site;
		select.push({
			id: el.id,
			siteIndex: index
		});
		site[index].selected = 1;
		this.setState({
			select: select,
			site: site
		});
	},
	close: function (index, siteIndex) {
		var select = this.state.select, site = this.state.site;
		select.splice(index, 1);
		site[siteIndex].selected = 0;
		this.setState({
			select: select,
			site: site
		});
	},
	submit: function () {
		if (this.state.select.length < 1 || this.state.loading) {
			return false;
		}
		this.setState({ loading: true });
		var i, data = '';
		for (i in this.state.select) {
			data += this.state.select[i].id + ',';
		}
		this.getData('insertSite', { id: data }).then(function (response) {
			if (response === 1) {
				var site = this.state.site;
				for (i in this.state.select) {
					site[this.state.select[i].siteIndex].selected = 1;
				}
				this.setState({
					site: site,
					loading: false,
					select: []
				});
			} else {
				alert('选座失败');
			}
		}.bind(this));
	},
	render: function () {
		return (
			<div>
				<Title />
				<Site selectSite={this.selectSite} site={this.state.site} />
				<Bottom submit={this.submit} close={this.close} select={this.state.select} />
				<LoadingAnimation display={this.state.loading} />
			</div>
		);
	}
});

module.exports = MiniSite;