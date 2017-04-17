import React, { Component } from 'react'
// import ListBanner from '../components/ListBanner'
import { subMenus } from '../data/Definition'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { TabsUnderline } from '../components/Table'
import { Modal, Button, Spin } from 'antd'
import 'antd/dist/antd.css'

import { ModifyPassword } from '../components/ModifyPassword'
import MyCategory from '../components/MyCategory'
import { appService, appInfo } from '../service'




class ListBanner extends Component {
	render() {
		let { category, text, logo } = this.props
		//backgroundImage: 'url(../image／1.jpeg)',
		return (
			<div className='backimg' style={{
				width: '100%', height: '240px',
				overflow: 'hidden', backgroundImage: "url(' http://img.hb.aicdn.com/9550a02f108c435f3e69731d65d884cd53379a0b23c94-ZBwXcb_fw658 ')",
				backgroundSize: 'cover', backgroundPosition: 'center,center',
			}}>

				<div style={{
					width: '1200px', height: '200px',
					margin: 'auto', color: '#fff',
					fontSize: '48px', padding: '60px 0 0'
				}}
				> {text}{logo}
				</div>

				<div style={{ height: '40px', background: 'rgba(0,0,0,0.2)' }} >
					<div style={{ width: '1190px', margin: 'auto', lineHeight: '40px', fontSize: '12px', color: 'white' }}  >
						<p>当前位置：个人中心</p>
					</div>
				</div>
			</div>


		)
	}
}

class PersonCenter extends Component {

	constructor(props) {
		super(props)
		this.state = {
			visible: false,
		}

		this.showModal = this.showModal.bind(this)
		this.send = this.send.bind(this)
		this.cancelSend = this.cancelSend.bind(this)
		this.logout = this.logout.bind(this)
	}


	showModal() {
		this.setState({
			visible: true
		})
	}

	send() {
		this.setState({
			visible: false
		})
	}

	cancelSend() {
		this.setState({
			visible: false
		})
	}

	logout() {
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
				<ListBanner category={subMenus[4]} logo={content} />

				<div>
					<div style={{ width: '1200px', margin: '20px auto' }} >
						<TabsUnderline name="personalCenter" center={true}     >
							<div name="我的发布">
								<MyCategory name="release" />
							</div>
							<div name="我参与的">
								<MyCategory name="collection" />
							</div>
							<div name="修改密码" style={{ width: "1200px", height: "808px" }}>
								<div className="pcenter">
									<div className="loginleft"> <img src={require("../image/2.jpeg")} /></div>
									<div className="loginright">
										<div className="loginlogo"><img src={require("../image/3.jpeg")} /></div>
										<div className="loginrightform">
											<div>
												<br />
												<ModifyPassword />
											</div>
										</div>
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