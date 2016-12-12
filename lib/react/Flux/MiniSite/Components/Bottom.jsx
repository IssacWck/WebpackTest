/**
 * Created by WangCK on 2016/12/11.
 */
import React from 'react';
import weui from 'weui/weui.css';
import css from 'weui/custom.css';

class Bottom extends React.Component {
	constructor () {
		super();
		this.close = this.close.bind(this);
	}

	close (index, siteIndex) {
		this.props.close(index, siteIndex);
	}

	render() {
		let selectElement;
		let displayStyle = 'none';
		if (this.props.select.length > 0) {
			let select = this.props.select;
			let displayStyle = 'block';
			selectElement = select.map((el, index) => {
				return (
					<div className={css.box} key={index}>
						<div className={css.number}>{el.id}</div>
						<div className={css.close} onClick={this.close(index, el.siteIndex)}>X</div>
					</div>
				);
			});
		}
		return (
			<div style={{display: displayStyle}}>
				<div className={weui.hd}>
					<h1 className={weui.page_title}>已选择</h1>
				</div>
				<div className={css.selected}>
					{selectElement}
				</div>
				<button onClick={this.props.submit} className={weui.weui_btn + ' ' + weui.weui_btn_disabled + ' ' + weui.weui_btn_primary + ' ' + css.custom_button}>提交</button>
				<br/><br/>
			</div>
		);
	}
}

export default Bottom;
