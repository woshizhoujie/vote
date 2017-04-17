import React, { Component } from 'react'
import { TabsUnderline } from '../components/Table'
import { Link } from 'react-router'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

const FormItem = Form.Item;

const LoginForm = Form.create()(React.createClass({
	handleLoginSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	},

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form
				onSubmit={this.handleLoginSubmit}
				className="login-form" style={{ marginTop: '100px;' }}
			>
				<FormItem hasFeedback>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email', message: '输入的邮箱格式不正确',
						}, {
							required: true, message: '请输入您的邮箱',
						}],
					})(
						<Input
							name='email'
							addonBefore={<Icon type="mail" />}
							type="Email"
							placeholder="请输入您的邮箱" />
						)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入您的密码' }],
					})(
						<Input
							name='password'
							addonBefore={<Icon type="lock" />}
							type="password"
							placeholder="请输入您的密码" />
						)}
				</FormItem>

				<FormItem>
					<p className="logintip">新用户请点注册创建新账号</p>
				</FormItem>
				<FormItem wrapperCol={{ span: 5, offset: 0 }}>
					<Link to={'/PersonCenter'}>
						<Button type="primary" htmlType="submit" style={{ width: '336px', backgroundColor: 'white', color: '#169bd5', marginBottom: '48px' }}>
							登录
          </Button>
					</Link>
				</FormItem>
			</Form>
		)
	}

}))

const RegisterForm = Form.create()(React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	},
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem hasFeedback>
					{getFieldDecorator('userName', {
						rules: [{
							required: true, message: '请输入您的用户名!'
						}],
					})(
						<Input
							addonBefore={<Icon type="user" />}
							placeholder="请输入您的用户名"
						/>
						)}
				</FormItem>



				<FormItem hasFeedback>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email', message: '邮箱格式不正确!',
						}, {
							required: true, message: '请输入您的邮箱!',
						}],
					})(
						<Input
							addonBefore={<Icon type="mail" />}
							type="Email"
							placeholder="请输入您的邮箱"
						/>
						)}
				</FormItem>

				<FormItem hasFeedback>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: '请输入您的密码!' }],
					})(
						<Input
							addonBefore={<Icon type="lock" />}
							type="password"
							placeholder="请输入您的密码"
						/>
						)}
				</FormItem>
				<FormItem wrapperCol={{ span: 5, offset: 0 }}>
					<Button type="primary" htmlType="submit" style={{ width: '336px', backgroundColor: 'white', color: '#169bd5' }}>
						注册
          </Button>
				</FormItem>
			</Form>
		)
	}
}))

class Login extends Component {
	render() {
		return (
			<div>
				<div className="box" style={{ paddingTop: '80px' }}>
					<div className="loginleft"><img src={require("../image/1.jpeg")} /></div>
					<div className="loginright">
						<div className="loginlogo"><img src={require("../image/8.jpeg")} /></div>
						<div className="loginrightform">



							<TabsUnderline>

								<div name="登录">
									<div style={{ weight: '327px', height: '24px' }}></div>
									<LoginForm />
								</div>


								<div name="注册">
									<div style={{ weight: '327px', height: '24px' }}></div>
									<RegisterForm />
								</div>

							</TabsUnderline>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

