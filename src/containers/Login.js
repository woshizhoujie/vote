import React, { Component } from 'react'

import { TabsUnderline } from '../components/Table'
import { Link, browserHistory } from 'react-router'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
import AlertContainer from 'react-alert'

import { appInfo, appService } from '../service'

const FormItem = Form.Item;
let alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }


//登录--------------------------------------------------------------------------------
const LoginForm = Form.create()(React.createClass({
	handleLoginSubmit(e) {
		console.log('上一次的数据%o', e)
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('登录提交的信息: ', values);

				let body = JSON.stringify({
					username: values.email,
					password: values.password
				})

				appService.request(appInfo.address.login, body, false, 'POST')
					.then(response => {
						appInfo.app.accessToken = response.token
						browserHistory.push('/PersonCenter')
					})
					.catch(err => {
						console.log('login error', err)
						alert('登录失败')
					})
			}
		});
	},

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleLoginSubmit} className="login-form" style={{ marginTop: '100px;' }}>

				<FormItem hasFeedback>
					{getFieldDecorator('email', {
						rules: [{ type: 'email', message: '邮箱格式不正确', }, { required: true, message: '请输入您的邮箱' }],
					})
						(<Input name='email' addonBefore={<Icon type="mail" />} type="Email" placeholder="请输入您的邮箱" />)}
				</FormItem>

				<FormItem>
					{getFieldDecorator('password', { rules: [{ required: true, message: '请输入您的密码' }], })
						(<Input name='password' addonBefore={<Icon type="lock" />} type="password" placeholder="请输入您的密码" />)}
				</FormItem>

				<FormItem >
					<p style={{ textAlign: 'center', color: 'grey', fontSize: '14px' }}>新用户请点注册创建新账号</p>
				</FormItem>

				<FormItem wrapperCol={{ span: 5, offset: 0 }}>
					<Button type="primary" htmlType="submit"
						style={{ width: '336px', backgroundColor: 'white', color: '#169bd5', marginBottom: '48px' }}>
						登录
            </Button>
				</FormItem>

			</Form>
		)
	}
}))
//-----------------------------------------------------------------------------------------------


//注册-----------------------------------------------------------------------------------------------
const RegisterForm = Form.create()(React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('注册信息为: ', values);

				let body = JSON.stringify({
					nickname: values.userName,
					username: values.email,
					password: values.password
				})

				console.log('注册的stringify%o', body)

				appService.request(appInfo.address.register, body, false, 'POST')
					.then(response => {
						console.log('注册提交的信息: %o', response)
						browserHistory.push('/login')
						alert('注册成功！请去登陆')
					})
					.catch(err => {
						alert('已注册')
					})
			}
		});
	},
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">

				<FormItem hasFeedback>
					{getFieldDecorator('email', {
						rules: [{ type: 'email', message: '邮箱格式不正确!', }, { required: true, message: '请输入您的邮箱!' }]
					})(<Input addonBefore={<Icon type="mail" />} type="Email" placeholder="请输入您的邮箱" />)}
				</FormItem>

				<FormItem hasFeedback>
					{getFieldDecorator('userName', { rules: [{ required: true, message: '请输入您的用户名!' }] })
						(<Input addonBefore={<Icon type="user" />} placeholder="请输入您的用户名" />)}
				</FormItem>

				<FormItem hasFeedback>
					{getFieldDecorator('password', { rules: [{ required: true, message: '请输入您的密码!' }], })
						(<Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入您的密码" />)}
				</FormItem>

				<FormItem wrapperCol={{ span: 5, offset: 0 }}>
					<Button type="primary" htmlType="submit"
						style={{ width: '336px', backgroundColor: 'white', color: '#169bd5' }}>
						注册
          </Button>
				</FormItem>
			</Form>
		)
	}
}))
//-----------------------------------------------------------------------------------------------


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			login: 'loginFont',
			register: 'loginFontAfter'
		}
	}

	chooseLogin = () => {
		if (this.state.login == 'loginFontAfter') {
			this.setState({ login: 'loginFont', register: 'loginFontAfter' })
		}
	}

	chooseRegister = () => {
		if (this.state.register == 'loginFontAfter') {
			this.setState({ login: 'loginFontAfter', register: 'loginFont' })
		}
	}

	render() {
		return (
			<div>
				<div className="box" >

					<div style={{
						backgroundImage: `url(${require("../image/boy.jpeg")})`, backgroundSize: 'cover',
						backgroundPosition: 'center center', width: '680px', height: '730px', float: 'left'
					}}>
					</div>

					<div style={{ width: '520px', height: '430px', float: 'left', }}>

						<Row style={{ marginTop: '50px', height: '60px' }}>
							<Col span={6}>
							</Col>

							<Col span={3} style={{}}>
								<p className={this.state.login} onClick={() => this.chooseLogin()}>登录</p>
							</Col>

							<Col span={4}></Col>

							<Col span={3}>
								<p className={this.state.register} onClick={() => this.chooseRegister()}>注册</p>
							</Col>

							<Col span={6}>
							</Col>
						</Row>

						<div style={{ width: '340px', height: '300px', margin: 'auto', }}>
							{this.state.login == 'loginFont' ? <LoginForm /> : <RegisterForm />}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

