import React, { Component } from 'react'
import { Button, Row, Col, Tabs, RadioGroup, Radio } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router'
import { menus } from '../data/Definition'

export default class Header extends Component {
	render() {
		return (
			<div>
				<Row style={{ height: '50px', background: 'dimgrey' }}>
					<Col span={2}></Col>

					<Col span={3} >
						<div style={{ width: '250px', height: '50px' }}>
							<p style={{
								lineHeight: '50px',
								paddingLeft: '50px',
								fontSize: '25px',
								fontFamily: 'Arial, Helvetica, sans-serif',
								color: 'white'
							}}>问卷调查</p>
						</div>
					</Col>

					<Col span={14}>
						<div style={{ lineHeight: '50px', textAlign: 'center', fontSize: '18px' }}>
							{
								menus.map((e, i) => {
									return (
										<Link to={e.link} style={{
											textDecoration: 'none', width: '120px', height: '50px', float: 'left', color: 'lightgrey',
										}} activeStyle={{ color: '#44bbd0' }}
										>
											{e.name}
										</Link>
									)
								})
							}
						</div>
					</Col>

					<Col span={3}>
						<Link to="/Login" className="headersign" style={{
							textDecoration: 'none',
							lineHeight: '50px',
							fontSize: '16px',
							color: 'lightgrey',
						}}>登录 注册</Link>

						{/*
                appInfo.app.accessToken === "" ? <Link to="/Login" className="headlink" style={{ textDecoration: 'none' }}>登录注册</Link> :
                  <Link to="/PersonalCenter" className="headlink" style={{ textDecoration: 'none' }}>个人中心</Link>
              */}
					</Col>
					<Col span={2} ></Col>
				</Row>
			</div>
		)
	}
}