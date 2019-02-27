import React from 'react';
import { Route, Link, NavLink, Switch, Redirect, withRouter } from 'react-router-dom';
import UserTable from './components/UserTable'
import AddOrder from './components/AddOrder'
// 引入ant-design（全部引入）
import { Menu, Icon, Badge } from 'antd';
import 'antd/dist/antd.css';
import { ReactReduxContext, connect } from 'react-redux';



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			menu: [				
				{
					text: '用户列表',
					path: '/usertable',
					name: 'UserTable',
					icon: 'usergroup-add'
				},{
					text: '增加订单',
					path: '/addorder',
					name: 'AddOrder',
					icon: 'usergroup-add'
				},
			],
			current: '/usertable'

		}

		//bind(this)
		this.handleChange = this.handleChange.bind(this);
	}

	

	handleChange({ item, key, keyPath }) {
		this.setState({
			current: key
		});
		this.props.history.push(key)
	}

	componentDidMount() {

		// 利用生命周期函数来保持当前路由高亮
		// 获取当前路由（hash,history）
		let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
		hash = hash.split('/')[1];
		this.setState({
			current: '/' + hash
		})
	}

	render() {
		return (
			<div>
				<Menu
					mode="horizontal"
					selectedKeys={[this.state.current]}
					onClick={this.handleChange}
				>
					{
						this.state.menu.map(menu => {
							return (
								<Menu.Item key={menu.path}>
										<Icon type={menu.icon} />{menu.text}
								</Menu.Item>
							)
						})
					}
				</Menu>
				<Switch>
					<Route path="/addorder" component={AddOrder} />
					<Route path="/usertable" component={UserTable} />
					<Redirect from="/" to="/usertable" />
				</Switch>
			</div>
		)
	}
}
App = withRouter(App);

export default App;