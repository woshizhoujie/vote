import React, { Component } from 'react';
import { Row, Col, Input, Button, Popconfirm, Modal } from 'antd'
import Photo from '../components/Photo'

import { InnerForm } from '../components/InnerForm'
import InnerTable from '../components/InnerTable'




class Up extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: '',
			upConfirm: false,
			modalVisible: false,
			//存放单条数据
			editObj: null,
			//存放数据中的照片信息
			pic: ''
		}
		this.index = ''
	}

	onCreate = () => {
		this.setState({
			modalVisible: true,
			editObj: null,
		})
	}

	onEdit = (record, index) => {
		console.log('record', record)
		this.setState({
			modalVisible: true,
			editObj: record,
		})
		this.index = index
	}

	onDelete = (record, index) => {
		let data = [...this.state.data]
		data.splice(index, 1)
		this.setState({ data })

		this.props.delRecommends({ id: record.id })
	}

	onModalCancel = () => {
		this.setState({
			modalVisible: false,
		})
	}

	onModalConfirm = (values) => {
		console.log('编辑后的数据%o', values)

		this.setState({
			modalVisible: false
		})
		let editObj = this.state.editObj
		console.log('编辑前的数据%o', editObj)
		//if 编辑 else 新建
		if (editObj != null) {
			values.id = editObj.id
			if (this.state.pic) {
				values.cover = this.state.pic
			}
			this.props.updateRecommends(values)
		} else {
			if (this.state.pic) {
				values.cover = this.state.pic
			}
			this.props.createRecommends(values)
			this.state.pic = ''
		}
	}

	confirm = () => {
		this.setState({
			upConfirm: true
		})
	}

	closeModal = () => {
		this.setState({
			upConfirm: false
		})
	}

	upTable = () => {
		const columns = [
			{
				title: '题目',
				dataIndex: 'subtitle',
				key: 'subtitle',
			},
			{
				title: '选项一',
				dataIndex: 'one',
				key: 'one'
			},
			{
				title: '选项二',
				dataIndex: 'two',
				key: 'two'
			},
			{
				title: '选项三',
				dataIndex: 'three',
				key: 'three'
			},
			{
				title: '选项四',
				dataIndex: 'four',
				key: 'four'
			},
			{
				title: '操作',
				key: 'action',
				render: (text, record, index) => (
					<span>

						<a href='javascript:void(0);' onClick={() => this.onEdit(record, index)}>编辑 &nbsp;</a>

						<Popconfirm title='确认删除?' onConfirm={() => this.onDelete(record, index)}>

							<a href='javascript:void(0);'>删除 &nbsp;</a>

						</Popconfirm>

					</span>
				),
			}
		]
		//redux 获取数据


		//数据显示列表
		return (
			<InnerTable
				data={data}
				columns={columns}
				name='page'
			/>
		)
	}
	render() {
		const { modalVisible, editObj } = this.state
		return (
			<div>
				<div className="box">
					<div style={{ width: '1000px', minHeight: '800px', margin: 'auto', paddingTop: '50px', }}>
						<Row>
							<Col span={3}><p style={{ fontSize: '13px' }}>请输入问卷标题:</p></Col>
							<Col span={7}><Input /></Col>
						</Row>
						<br />
						<Row>
							<Col span={3}><p style={{ fontSize: '13px' }}>请输入问卷简介:</p></Col>
							<Col span={7}><Input type='textarea' rows={4} /></Col>
						</Row>
						<br />
						<Row>
							<Col span={3}><p style={{ fontSize: '13px' }}>请上传问卷封面:</p></Col>
							<Col span={20}><Photo /></Col>
						</Row>

						<br />

						<div>
							<Row style={{ marginTop: 24 }}>
								<Button onClick={this.onCreate}>	新建题目</Button>
							</Row>

							<InnerForm
								title={editObj === null ? creatTitle : editTitle}

								visible={modalVisible}

								onCancel={this.onModalCancel}

								onConfirm={this.onModalConfirm}

								value={editObj}

								image={editObj === null ? null : editObj.cover}

								inputConfig={inputConfig}

								imageChange={this.imageChange}

							/>

							<Row style={{ marginTop: 16 }}>
								{
									<this.upTable />
								}
							</Row>
						</div>

						<br />
						<br />
						<Row>
							<Col span={20}></Col>
							<Col span={3}>	<Button type='primary' onClick={() => this.confirm()}>	确认上传</Button></Col>
						</Row>


						<Modal
							padding={0}
							//footer为false 弹框下的取消确定按钮没有
							footer={false}
							visible={this.state.upConfirm}
							closable={true}
							onCancel={this.closeModal}
							width='450px'
							style={{ top: '300px' }}
						>

							<p>上传成功！</p>


						</Modal>


					</div>
				</div>
			</div>
		);
	}
}

const data = [
	{
		id: 1,
		subtitle: '你是？',
		one: '你是男生？',
		two: '你是女生？',
		three: '大学生？',
		four: '实习生？',

	},
	{
		id: 2,
		subtitle: '手机品牌',
		one: '苹果',
		two: '魅族',
		three: '小米',
		four: '华为',

	},
	{
		id: 3,
		subtitle: '单身？',
		one: '单身',
		two: '单身狗',
		three: '非单身',
		four: '狗',

	},
]

//新建页面标题
const creatTitle = '新建题目'

//编辑页面标题
const editTitle = '编辑分类'

//新建、编辑输入框各列表名设置
const inputConfig = [
	{
		label: '题目描述',
		key: 'subtitle',
		isAble: true,
		type: 'text',
		message: '请输入内容'
	},
	{
		label: '选项一',
		key: 'one',
		isAble: true,
		type: 'text',
		message: '请输入内容'
	},
	{
		label: '选项二',
		key: 'two',
		isAble: true,
		type: 'text',
		message: '请输入内容'
	},
	{
		label: '选项三',
		key: 'three',
		isAble: true,
		type: 'text',
		message: '请输入内容'
	},
	{
		label: '选项四',
		key: 'four',
		isAble: true,
		type: 'text',
		message: '请输入内容'
	},

]



export default Up;