import React, { Component } from 'react'
import { Row, Col, Tabs, Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link, browserHistory } from 'react-router'
import { menus } from '../data/Definition'

import { appInfo, utils } from '../service'

export default class Header extends Component {
	constructor(props) {
		super(props)
		this.state = { visible: false }
	}
	render() {
		return (
			<div>
				{/*<div style={{ height: '50px', background: 'dimgrey', }}>
					<div style={{ width: '160px', height: '50px', backgroundColor: 'red', float: 'left' }}></div>
				
					<div style={{ width: '160px', height: '50px', backgroundColor: 'blue', float: 'left' }}>

					</div>
				
					<div style={{ width: '500px', height: '50px', backgroundColor: 'green', float: 'left' }}></div>
					<div style={{ width: '300px', height: '50px', backgroundColor: 'red', float: 'left' }}></div>
				
					<div style={{ width: '100px', height: '50px', backgroundColor: 'green', float: 'left' }}></div>
				</div>


				<div style={{ width: '1200px', height: '50px', }}></div>*/}

				<Row style={{ height: '50px', background: 'dimgrey' }}>
					<Col span={2}></Col>

					<Col span={4} >

						<p style={{
							lineHeight: '50px',
							paddingLeft: '50px',
							fontSize: '25px',
							fontFamily: 'Arial, Helvetica, sans-serif',
							color: 'white'
						}}>问卷调查</p>

					</Col>

					<Col span={14}>
						{
							menus.map((e, i) => {
								if (e.name === '上传问卷') {
									if (appInfo.app.accessToken) {
										console.log('上传问卷的token%0', appInfo.app.accessToken)
										return (
											<Link to={e.link} className='nav' style={{ textDecoration: 'none' }}>	{e.name}</Link>
										)
									} else {
										return (
											<a onClick={() => { this.setState({ visible: true }) }} className='nav' >
												{e.name}
											</a>
										)
									}
								} else {
									return (
										<Link to={e.link} className='nav' style={{ textDecoration: 'none' }}>	{e.name}</Link>
									)
								}
							})
						}
					</Col>

					<Col span={3}>
						{appInfo.app.accessToken === "" ?
							<Link to="/Login"
								style={{
									textDecoration: 'none',
									lineHeight: '50px',
									fontSize: '16px',
									color: 'lightgrey',
								}} activeStyle={{ color: 'aliceblue' }}>登录 注册</Link> :

							<Link to="/PersonCenter"
								style={{
									textDecoration: 'none',
									lineHeight: '50px',
									fontSize: '16px',
									color: 'lightgrey',
								}} activeStyle={{ color: 'aliceblue' }}>个人中心</Link>}

					</Col>
					<Col span={1} ></Col>



					<Modal
						visible={this.state.visible}
						// title={title}
						style={{ marginTop: '150px' }}
						width={350}
						onCancel={() => { this.setState({ visible: false }) }}
						onOk={() => { this.setState({ visible: false }), browserHistory.push('/Login') }}>

						<div style={{ height: '100px' }}>
							<br />
							<br />
							<p style={{ textAlign: 'center', fontSize: '20', color: 'grey' }}>您需要登录!</p>
						</div>

					</Modal>

				</Row>
			</div>
		)
	}
}