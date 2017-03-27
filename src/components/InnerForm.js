import React, { Component } from 'react'
import { Modal, Form, Input, Upload, Icon, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

class FormModal extends Component {
	constructor(props) {
		super(props)
		this.state = {
			previewVisible: false,
			previewImage: '',
			fileList: [],
			loading: true
		}
		this.onConfirm = this.onConfirm.bind(this)
		this.beforeUpload = this.beforeUpload.bind(this)
		this.hasUpdate = false
	}


	setEditPreview = imgList => {
		this.setState({
			fileList: imgList
		})
	}


	componentWillMount() {
		console.log('this.props.value', this.props.value)
		if (this.props.image) {
			this.setEditPreview(this.props.image)
		}
	}

	componentWillReceiveProps(nextProps) {
		// console.log('')
		if (this.hasUpdate) return
		let oriFl = nextProps.image ? [{
			uid: -1,
			status: 'done',
			url: nextProps.image,
		}] : []
		this.setEditPreview(oriFl)
	}

	handleCancel = () => this.setState({ previewVisible: false })

	handlePreview = (file) => {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
		});
	}

	handleChange = ({ fileList }) => this.setState({ fileList })

	beforeUpload(pic) {
		let reader = new FileReader();
		reader.readAsDataURL(pic);
		reader.onloadend = function () {
			let fileList = this.state.fileList
			let pics = {
				uid: -1,
				status: 'done',
				url: reader.result
			}
			// console.log('pics', pics)
			this.props.imageChange(pics)
			this.hasUpdate = true
			this.setState({
				fileList: [...fileList, pics]
			})
		}.bind(this);
		return false;
	}

	rest = () => {
		this.hasUpdate = false
		this.props.form.resetFields()
	}

	onConfirm() {
		const form = this.props.form;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}
			// console.log('InnerForm values',values)
			// form.resetFields()
			this.props.onConfirm(values)
			this.rest()
		})
	}



	render() {
		const { visible, value, title, onCancel, inputConfig, upLoadConfig, selectConfig, selectList } = this.props
		const { previewVisible, previewImage, fileList } = this.state
		const { getFieldDecorator } = this.props.form
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">上传</div>
			</div>
		)
		return (
			<Modal
				visible={visible}
				title={title}
				onCancel={() => {
					onCancel()
					this.rest()
				}}
				onOk={this.onConfirm}>
				<Form vertical>
					{inputConfig.map((element, index) => {
						{/*console.log('element', element)*/}
						return (
							<FormItem key={index} label={element.label}>
								{getFieldDecorator(element.key, {
									initialValue: value ? value[element.key] : undefined,
									rules: [
										element.rulesType === null ? null :
											{
												type: element.rulesType, message: element.rulesTypeMessage,
											}, {
											required: element.isAble, message: element.message
										}],
								})
									(<Input type={element.type} disabled={value ? element.disabled : false} />)}
							</FormItem>
						)
					})}
					{selectConfig.map((element, index) => {
						{/*console.log('element', element)*/ }
						return (
							<FormItem key={index} label={element.label}>
								{getFieldDecorator(element.key, {
									initialValue: value ? value[element.key] : undefined,
									rules: [{
										required: element.isAble, message: element.message
									}],
								})
									(<Select
										multiple
										style={{ width: 200 }}
										placeholder={element.placeholder}
									>
										{selectList.map((e, i) => {
											return (
												<Option value={e.id}>{e.name}</Option>
											)
										})}
									</Select>
									)}
							</FormItem>
						)
					})}
					{upLoadConfig.map((element, index) => {
						return (
							<FormItem key={index} label={element.label}>
								<div>
									<Upload
										action='/upload.do'
										listType='picture-card'
										fileList={fileList}
										onPreview={this.handlePreview}
										onChange={this.handleChange}
										beforeUpload={this.beforeUpload}
									>
									{fileList.length >= 1 ? null : uploadButton}
									</Upload>
									<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
										<img alt="example" style={{ width: '100%' }} src={previewImage} />
									</Modal>
								</div>
							</FormItem>
						)
					})}
				</Form>
			</Modal>
		)
	}
}

export const InnerForm = Form.create()(FormModal)

InnerForm.defaultProps = {
	inputConfig: [],
	upLoadConfig: [],
	selectConfig: [],
	selectList: []
}
