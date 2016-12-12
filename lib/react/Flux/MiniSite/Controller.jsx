/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import Store from './Store';
import Actions from './Actions';
import Title from './Components/Title'
import Loading from './Components/Loading'
import Site from './Components/Site'
import Bottom from './Components/Bottom'

class Controller extends React.Component {
    constructor () {
        super();
	    this.getSite = this.getSite.bind(this);
	    //this.checkSelected = this.checkSelected.bind(this);
	    //this.selectAfter = this.selectAfter.bind(this);
	    //this.closeAfter = this.closeAfter.bind(this);
	    //this.loadingAfter = this.loadingAfter.bind(this);
    }

    state = {
	    site: Store.getData('site'),
	    select: Store.getData('select'),
	    loading: Store.getData('loading')
    }

	componentWillMount () {
		console.log('react');
		Store.addChangeListener('getSite', this.getSite);
		Actions.getSite();
	}

	componentDidMount () {
		//Store.addChangeListener('checkSelected', this.checkSelected);
		//Actions.checkSelected();
		//setInterval(() => {
		//	Store.addChangeListener('checkSelected', this.checkSelected);
		//	Actions.checkSelected();
		//}, 5000);
	}

	getSite () {
		let site = Store.getData('site');
		let loading = Store.getData('loading');
		this.setState({ site, loading });
	}

	//checkSelected () {
	//	this.setState({
	//		site: Store.getData('site')
	//	});
	//}
	//
	//selectAfter () {
	//	this.setState({
	//		site: Store.getData('site'),
	//		select: Store.getData('select')
	//	}, () => Store.removeChangeListener('selectSite'));
	//}
	//
	//closeAfter () {
	//	this.setState({
	//		site: Store.getData('site'),
	//		select: Store.getData('select')
	//	}, () => Store.removeChangeListener('close'));
	//}
	//
	//submitAfter () {
	//	this.setState({
	//		site: Store.getData('site'),
	//		select: Store.getData('select'),
	//		loading: Store.getData('loading')
	//	}, () => Store.removeChangeListener('submit'));
	//}
	//
	//loadingAfter () {
	//	this.setState({ loading: Store.getData('loading') }, () => Store.removeChangeListener('loading'));
	//}

	//selectSite (el, index) {
	//	if (el.selected === 1) {
	//		return false;
	//	}
	//	Store.addChangeListener('selectSite', this.selectAfter);
	//	Actions.selectSite(el, index);
	//}
	//
	//close (index, siteIndex) {
	//	Store.addChangeListener('close', this.closeAfter);
	//	Actions.close(index, siteIndex);
	//}
	//
	//submit () {
	//	Store.addChangeListener('loading', this.loading);
	//	Actions.loading();
	//	Store.addChangeListener('submit', this.submitAfter);
	//	Actions.submit();
	//}

	render () {
		return (
			<div>
				<Title />
				<Site selectSite={this.selectSite} site={this.state.site} />
				<Bottom submit={this.submit} close={this.close} select={this.state.select} />
				<Loading display={this.state.loading} />
			</div>
		);
	}
}

export default Controller;