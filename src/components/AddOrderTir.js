import React from 'react';
import { Button, Card } from 'antd';
import {withRouter} from 'react-router-dom'

class AddOrderTir extends React.Component {
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
		this.props.history.push('/usertable')
	}

	render() {
		console.log(this.props)
		let {data} = this.props;
		return (
			<div>
				<Card
					title="订单已提交成功"
					extra={<Button onClick={this.handleClick}>返回用户管理页面</Button>}
					style={{ width: 300 }}
				>
					<p>账号:{data.uid}</p>
					<p>商品编号:{data.gid}</p>
					<p>送货日期:{data.date}</p>
					<p>数量:{data.qty}</p>
				</Card>
			</div>
		)
	}
}
AddOrderTir = withRouter(AddOrderTir);
export default AddOrderTir;



