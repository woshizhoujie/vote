import React, { Component, PropTypes } from 'react';
import { Row, Col, Button, Popconfirm, Collapse, Select, Input, Upload, Icon, message, Modal, } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router'

//参数字典
//this.props.image 传过来的图片信息 单张 多张图片请用 PhotoWall 组件

class Photo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			//model是否显示
			modalVisible: false,

			//上传图片所需3个state
			previewVisible: false,
			previewImage: '',
			fileList: [],
		}
	}

	//取到的一张图片对象 推入fileList 图片数组
	setPreviews = (picture) => {
		let onePicture = {
			uid: -1,
			status: 'done',
			url: picture
		}
		this.setState({
			fileList: [...this.state.fileList, onePicture]
		})
	}


	//把获取到的图片推到空数组 picture[]里
	componentWillMount() {
		//console.log('封面图片%o',this.props.image)
		if (this.props.image) {
			this.setPreviews(this.props.image)
		}
	}

	componentWillReceiveProps(nextProps) {
		nextProps.image &&
			this.setPreviews(nextProps.image)
	}



	//上传图片 的三个函数
	handleCancel = () => this.setState({ previewVisible: false })

	handlePreview = (file) => {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true,
		});
	}

	handleChange = ({ fileList }) => {
		this.setState({ fileList })
	}

	//上传图片不经过服务器
	beforeUpload = (pic) => {
		let reader = new FileReader();
		reader.readAsDataURL(pic);
		reader.onloadend = function () {
			let fileList = this.state.fileList
			let id = fileList.length === 0 ? -1 : fileList[fileList.length - 1].uid - 1
			let pics = {
				uid: id,
				status: 'done',
				url: reader.result
			}
			this.setState({
				fileList: [...fileList, pics]
			})

		}.bind(this);
		return false;
	}

	render() {
		const { previewVisible, previewImage, fileList } = this.state

		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		);

		return (
			<div className="clearfix">
				<Upload
					action='/upload.do'
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
					beforeUpload={this.beforeUpload}
				>

					{fileList.length >= 1 ? null : uploadButton}
				</Upload>

				<Modal
					visible={previewVisible}
					footer={null}
					onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</div>
		);
	}
}

export default Photo;