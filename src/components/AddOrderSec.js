import React from 'react';
import { Checkbox, Button } from 'antd';

class AddOrderSec extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;

		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	onChange(e) {
		this.props.onCheckChange(e);
	}
	handleClick(e) {
		this.props.onTabChange('third');
	}

	render() {
		return (
			<div>
				<Checkbox onChange={this.onChange}>同意协议</Checkbox>
				<Button disabled={this.props.isBtnDisable} onClick={this.handleClick} style={{ float: 'right', marginRight: '10px' }}>提交订单</Button>
			</div>
		)
	}
}
export default AddOrderSec;



