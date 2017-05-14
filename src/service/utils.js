//我认为是取消和登录更好 登陆里有注册 如果没有取消只能去跳转到另一个界面
import React, { Component } from 'react'

import Login from '../containers/Login'
import { Link, browserHistory } from 'react-router'
import { Modal } from 'antd'

function loginAlert() {
	let visible = false
	return (
		<Modal
			visible={visible}
			// title={title}
			onCancel={() => { visible = false }}
			onOk={() => { visible = true, browserHistory.push('/') }}>

			<p>您需要登录</p>
		</Modal>
	)
}
export { loginAlert }