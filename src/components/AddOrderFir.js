import React from 'react';
import { DatePicker, InputNumber, Input, Select } from 'antd';
import './AddOrderFir.css';
const dateFormat = 'YYYY/MM/DD';

class AddOrderFir extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			dateFormat: 'YYYY/MM/DD',
		}
		// bind(this)
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleQtyChange = this.handleQtyChange.bind(this);
		this.handleGidChange = this.handleGidChange.bind(this);
		this.handleUidChange = this.handleUidChange.bind(this);
	}

	handleDateChange(value) {
		console.log(value._d)
		this.props.onDateChange(value._d);
	}
 
	handleQtyChange(value) {
		this.props.onQtyChange(value);
	}

	handleGidChange(e) {
		this.props.onGidChange(e);    //向外提供的props名以on为前缀比较好
	}

	handleUidChange(value) {
		this.props.onUidChange(value);
	}
	render() {
		return (
			<div className="add-order-fir">
				<Select
					onChange={this.handleUidChange}
					style={{ width: 120 }}
					required
					placeholder="选择账号" >
					<Select.Option value="jack">Jack</Select.Option>
				</Select >
				<Input placeholder="商品编号(必填)" onChange={this.handleGidChange} ></Input>
				<DatePicker placeholder="选择送货日期" onChange={this.handleDateChange} showToday format={this.state.dateFormat} />
				<InputNumber placeholder="数量" min={1} onChange={this.handleQtyChange} />
			</div>
		);
	}
}
export default AddOrderFir;



