import React from 'react';
import { Table, Button } from 'antd';

class UserTable extends React.PureComponent {
	constructor(props) {
		super(props)
		this.props = props;
		this.state = {
			columns: [
				{ title: '账号', dataIndex: 'uId', key: 'uId' },
				{ title: '用户名', dataIndex: 'uName', key: 'uName' },
				{ title: '城市', dataIndex: 'uCity', key: 'uCity' },
				{ title: '订单数量', dataIndex: 'orderQty', key: 'orderQty' },
				{ title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a href="javascript:;">Delete</a> }
			],
			uData: [
				{
					key: 'a', uId: 'a', uName: 'userA', uCity: '广州', orderQty: '1', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
				},
				{
					key: 'b', uId: 'a', uName: 'userA', uCity: '广州', orderQty: '1', description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
				}
			],

		}
	}
	componentWillMount() {
		// 发action
	}
	render() {
		return (
			<React.Fragment>
				<Table
					columns={this.state.columns}
					expandedRowRender={item => <p style={{ margin: 0 }}>{item.description}</p>}
					dataSource={this.state.uData}
				/>
			</React.Fragment>
		)
	}
}
export default UserTable;
