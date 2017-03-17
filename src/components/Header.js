import React, { Component } from 'react'
import { Button, Row, Col, Tabs, RadioGroup, Radio } from 'antd';
import 'antd/dist/antd.css';
//import Nav from './Nav'
//import '../css/style.css'
import { Link } from 'react-router'
import { menus } from '../data/Definition'
// import { SecondHandHot, TenementInfoShort, EntertainFoodList } from '../data/MockData'
// import {appInfomation} from '../data/Definition'
// import { Modal, Button } from 'antd'
// import Login from '../containers/Login'
// require('es6-promise').polyfill();
// require('isomorphic-fetch');

export default class Header extends Component {


	render() {
		return (
			<div>
				<Row className="headerbox">
					<Col span={2}></Col>
					<Col span={3} >
						<div className="headerlogo">
							<p className="headertitle">来投票</p>
						</div>
					</Col>
					<Col span={14}>
						<div className="navbox">
							{
								menus.map((e, i) => {
									return (
										<Link className="nav" to={e.link}>{e.name}</Link>		
									)
								})
							}
						</div>
					</Col>

					<Col span={3}>
						<Link to="/Login" className="headersign">登录 注册</Link>
					</Col>
					<Col span={2} ></Col>
				</Row>
			</div>
		)
	}
}


