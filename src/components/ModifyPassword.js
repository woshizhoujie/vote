import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd'
import { appService, appInfo } from '../service'
const FormItem = Form.Item;
const Option = Select.Option;



export const ModifyPassword = Form.create()(React.createClass({
	getInitialState() {
		return {
			passwordDirty: false,
		};
	},
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('获取的value', values)
				let body = JSON.stringify({
					current_password: values.oldPassword,
					new_password: values.password,
				})

				appService.request(appInfo.address.passwordModify, body, true, 'POST', false)
					.then(result => {
						browserHistory.push('/Login')
					})
					.catch(error => {
						alert('修改密码失败')
					})
			}
		});
	},
	handlePasswordBlur(e) {
		const value = e.target.value;
		this.setState({ passwordDirty: this.state.passwordDirty || !!value });
	},
	checkPassword(rule, value, callback) {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次输入的密码不同!');
		} else {
			callback();
		}
	},
	checkConfirm(rule, value, callback) {
		const form = this.props.form;
		if (value && this.state.passwordDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	},
	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<Form onSubmit={this.handleSubmit}>
				<FormItem hasFeedback>
					{getFieldDecorator('oldPassword', {
						rules: [{
							required: true, message: '请输入您的旧密码!'
						}],
					})(
						<Input
							type='password'
							placeholder="请输入您的旧密码"
							/>
						)}
				</FormItem>

				<FormItem
					hasFeedback
					>
					{getFieldDecorator('password', {
						rules: [{
							required: true, message: '请输入您的新密码!',
						}, {
							validator: this.checkConfirm,
						}],
					})(
						<Input type="password" onBlur={this.handlePasswordBlur} placeholder="请输入您的新密码" />
						)}
				</FormItem>


				<FormItem
					hasFeedback
					>
					{getFieldDecorator('confirm', {
						rules: [{
							required: true, message: '两次输入的密码不同',
						}, {
							validator: this.checkPassword,
						}],
					})(
						<Input type="password" placeholder="请确认您的新密码" />
						)}
				</FormItem>

				<FormItem wrapperCol={{ span: 5, offset: 0 }}>
					<Button type="primary" htmlType="submit" style={{width:'336px',backgroundColor:'white',color:'#169bd5',marginTop:'30px'}}>
						提交
          </Button>
				</FormItem>
			</Form>
		);
	},
}));
