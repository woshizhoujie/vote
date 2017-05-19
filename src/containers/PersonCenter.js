import React, { Component } from 'react'
// import ListBanner from '../components/ListBanner'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { TabsUnderline } from '../components/Table'
import { Modal, Button, Spin } from 'antd'
import 'antd/dist/antd.css'

import { ModifyPassword } from '../components/ModifyPassword'
import MyCategory from '../components/MyCategory'
import { appService, appInfo } from '../service'
import QuestionList from '../components/QuestionList'

class ListBanner extends Component {
	render() {
		let { category, text, logo } = this.props
		//backgroundImage: 'url(../image／1.jpeg)',
		return (
			<div className='backimg' style={{
				width: '100%', height: '240px',
				overflow: 'hidden', backgroundImage: `url(${require("../image/green1.jpg")})`,
				backgroundSize: 'cover', backgroundPosition: 'center,center',
			}}>

				<div style={{
					width: '1200px', height: '200px',
					margin: 'auto', color: '#fff',
					fontSize: '48px', padding: '60px 0 0'
				}}
				> {text}{logo}
				</div>

				{	/*<div style={{ height: '40px', background: 'rgba(0,0,0,0.2)' }} >
					<div style={{ width: '1190px', margin: 'auto', lineHeight: '40px', fontSize: '12px', color: 'white' }}  >
						<p>当前位置：个人中心</p>
					</div>
				</div>*/}
			</div>


		)
	}
}

class PersonCenter extends Component {
	constructor(props) {
		super(props)

	}


	logout = () => {
		appService.request(appInfo.address.logout, null, true, 'POST', false)
			.then(response => {
				appInfo.app.accessToken = ""
				browserHistory.push('/')
			})
	}


	render() {
		const content = (
			<div>
				<div className="perboxleft" ><img src={require('../image/1.jpeg')} /></div>
				<div className="perboxright">
					<p style={{ marginTop: "10px", marginBottom: "20px" }}>用户名</p>
					<div onClick={() => this.logout()}>退出登录</div>
				</div>
			</div>
		)

		return (
			<div className='box'>
				<ListBanner logo={content} />

				<div>
					<div style={{ width: '1200px', marginTop: '20px', }} >

						<TabsUnderline name="personalCenter" center={true}  >

							<div name="我的发布">
							</div>

							<div name="我参与的">
							</div>

							<div name="编辑个人资料" style={{ width: "1200px", height: "808px" }}>
								<div style={{ width: '340px', height: '300px', marginTop: '20px', marginLeft: '100px' }}>
									<div>
										<br />
										<ModifyPassword />
									</div>
								</div>
							</div>

							<div name="修改密码" style={{ width: "1200px", height: "808px" }}>
								<div style={{ width: '340px', height: '300px', marginTop: '20px', marginLeft: '100px' }}>
									<div>
										<br />
										<ModifyPassword />
									</div>
								</div>
							</div>

						</TabsUnderline>
					</div>
				</div>
			</div>
		);
	}
}

export default PersonCenter;