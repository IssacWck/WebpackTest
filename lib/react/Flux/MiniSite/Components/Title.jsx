/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import weui from 'weui/weui.css';

export default class Title extends React.Component {
	render () {
		return (
			<div className={weui.hd}>
				<h1 className={weui.page_title}>MiniSite</h1>
			</div>
		);
	}
}