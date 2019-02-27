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
		console.log(e.target);
		this.props.handleCheckChange(e);
	}
	handleClick(e) {
		console.log(e.target);
		this.props.handleTabChange('third');
	}

	render() {
		return (
			<div>
				<Checkbox onChange={this.onChange}>同意协议</Checkbox>
				<Button disabled={this.props.isTirDisable} onClick={this.handleClick} style={{ float: 'right', marginRight: '10px' }}>提交订单</Button>
			</div>
		)
	}
}
export default AddOrderSec;



