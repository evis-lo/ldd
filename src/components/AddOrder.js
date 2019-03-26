import React from 'react';
import { Tabs } from 'antd';
import AddOrderFir from './AddOrderFir'
import AddOrderSec from './AddOrderSec'
import AddOrderTir from './AddOrderTir'
class AddOrder extends React.PureComponent {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			// 设置tabs高亮的默认值
			current: 'first',
			// 渲染tabpane的数据
			tabs: [

				{ text: '第二步', key: 'second', child: 'haha', isDisable: true },
				{ text: '第三步', key: 'third', child: 'haha', isDisable: true },
			],
			dateFormat: 'YYYY/MM/DD',

			date: null,
			qty: 0,
			gid: 0,
			uid: 0,
			payment: null,
			isChecked: false,
			address: '',
			isGidOk: false,
			isUidOk: false,
			isSecDisable: true,
			isBtnDisable: true
		}
		// 绑定this
		this.handleTabChange = this.handleTabChange.bind(this);
		this.handleGidChange = this.handleGidChange.bind(this);
		this.handleUidChange = this.handleUidChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleQtyChange = this.handleQtyChange.bind(this);
		this.handleCheckChange = this.handleCheckChange.bind(this);
	}

	handleTabChange(key) {
		this.setState({
			current: key
		})
	}
	handleGidChange(e) {  //todo 若必填项重新变为空时, 相应变更下一步的disabled
		if (e.target.value.length == 6) {
			this.setState({
				gid: e.target.value, isGidOk: true
			});
			if (this.state.isUidOk == true)
				this.setState({
					isSecDisable: false
				});
		}
		else {
			this.setState({
				gid: e.target.value, isGidOk: false, isSecDisable: true
			});
		}

	}
	handleUidChange(value) {
		this.setState({
			uid: value,
			isUidOk: true
		});
		if (this.state.isGidOk == true)
			this.setState({
				isSecDisable: false
			});
	}
	handleDateChange(value) {
		this.setState({
			date: value
		});
	}
	handleQtyChange(value) {
		this.setState({
			qty: value
		});
	}
	handleCheckChange(e) {
		this.setState({
			isChecked: e.target.checked,
			isBtnDisable: !e.target.checked
		});
	}


	render() {
		let { tabs,
			date,
			qty,
			gid,
			uid } = this.state;
		return (
			<div>
				<Tabs
					onChange={this.handleTabChange}
					activeKey={this.state.current}
				>
					<Tabs.TabPane tab="第一步" key="first">
						<AddOrderFir
							onGidChange={this.handleGidChange}
							onUidChange={this.handleUidChange}
							onQtyChange={this.handleQtyChange}
							onDateChange={this.handleDateChange} />
					</Tabs.TabPane>

					<Tabs.TabPane disabled={this.state.isSecDisable} tab="第二步" key="second">
						<AddOrderSec
							onCheckChange={this.handleCheckChange}
							onTabChange={this.handleTabChange}
							isBtnDisable={this.state.isBtnDisable} />
					</Tabs.TabPane>

					<Tabs.TabPane disabled="true" tab="第三步" key="third">
						<AddOrderTir data={{ date, qty, gid, uid }}></AddOrderTir>
					</Tabs.TabPane>
				</Tabs>
			</div>
		)
	}
}

export default AddOrder;