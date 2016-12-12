/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import weui from 'weui/weui.css';
import css from 'weui/custom.css';

class Site extends React.Component {
	constructor () {
		super();
		this.selectSite = this.selectSite.bind(this);
	}

	selectSite (el, index) {
		this.props.selectSite(el, index);
	}

	render() {
		let site = this.props.site;
		let siteElement = site.map((el, index) => {
			let className = el.selected ? css.site_icon + ' ' + css.site_icon_selected : css.site_icon;
			return (
				<div className={className} onClick={this.selectSite(el, index)} key={index} value={el.selected}>{el.id}</div>
			);
		})

		return (
			<div className={weui.bd + ' ' + weui.spacing}>
				<div className={css.site}>
					{siteElement}
				</div>
			</div>
		);
	}
}

export default Site;