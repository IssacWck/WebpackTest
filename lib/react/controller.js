/**
 * Created by WangCK on 2016/11/18.
 */
var React = require('react');
var jQuery = require('jQuery');
var LoadingAnimation = require('./loading.js');
var Title = require('./title.js');
var Site = require('./site.js');
var Bottom = require('./bottom.js');

var MiniSite = React.createClass({
	getInitialState: function () {
		return {
			site: [],
			selected: [],
			select: [],
			loading: true
		};
	},
	componentWillMount: function () {
		this.getData('http://mini.com/getSite', null, null, function (response) {
			this.setState({site: response});
		}.bind(this));
	},
	componentDidMount: function () {
		this.checkSelected(function () {
			this.setState({loading: false});
			setInterval(function () {
				this.checkSelected();
			}.bind(this), 5000);
		}.bind(this));
	},
	getData: function (url, data, method, callback) {
		jQuery.ajax({
			type: method || 'GET',
			url: url,
			data: data || {},
			dataType: 'json',
			success: function (response) {
				callback && callback(response);
			},
			error: function (error) {}
		});
	},
	checkSelected: function (callback) {
		this.getData('http://mini.com/checkSelected', null, null, function (response) {
			var site = this.state.site;
			for (var i = 0; i < response.length; i++) {
				site[response[i].id - 1].selected = 1;
			}
			this.setState({
				site: site
			});
			callback && callback();
		}.bind(this));
	},
	selectSite: function (el, index) {
		if (el.selected === 1) {
			return false;
		}
		var select = this.state.select, site = this.state.site;
		select.push({id: el.id, siteIndex: index});
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
		this.setState({
			loading: true
		});
		var data = {id: ''};
		for (var i in this.state.select) {
			data.id += this.state.select[i].id + ',';
		}
		this.getData('http://mini.com/insertSite', data, 'POST', function (response) {
			if (response === 1) {
				var site = this.state.site;
				for (var i in this.state.select) {
					site[this.state.select[i].siteIndex].selected = 1;
				}
				this.setState({
					site: site,
					loading: false,
					select: []
				});
				alert('选座成功');
			} else {
				alert('选座失败');
			}
		}.bind(this))
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