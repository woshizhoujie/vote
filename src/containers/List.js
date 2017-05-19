import React, { Component } from 'react';
import { Button, Row, Col, Icon, Carousel, Pagination, Tabs, Input, Spin } from 'antd'
import { appInfo, appService } from '../service'
import QuestionList from '../components/QuestionList'
import { QuestionListCategory } from '../data/MockDate'

class DetailView extends Component {
	onChange = (pageNumber) => {
		console.log('Page: ', pageNumber);
	}
	render() {
		let list = this.props.list
		console.log('传给组件的问卷列表%o', this.props.list)
		return (
			<div>
				{
					list.map((item) => {
						const { cover, description, id, owner, publish, questions, title, watch } = item
						return (
							<div style={{
								backgroundColor: 'white',
								width: '1170px',
								height: '180px',
								margin: '15px',
								marginBottom: '20px'
							}}>
								<Row >
									<Col span={4}>
										<div style={{
											height: '180px',
											backgroundImage: 'url(' + cover + ')',
											backgroundSize: 'cover', backgroundPosition: 'center,center',
											cursor: 'pointer',
										}}></div>
									</Col>

									<Col span={18} style={{ marginLeft: '15px', }}>
										<br />
										<p style={{ fontSize: '20', fontWeight: 'blod', color: 'grey' }}>标题:
										<span style={{ fontSize: '15', }}>&nbsp;&nbsp;{title}</span>
										</p>
										<br />
										{/*描述*/}
										<div style={{ height: '70px', }}>

											<Row>
												<Col span={2}>
													<img src={cover} style={{ width: '65px', height: '65px', borderRadius: '65px' }} />
												</Col>
												<Col span={1}></Col>
												<Col span={19}>
													<p style={{ fontSize: '15px', }}>{description}</p>
												</Col>

											</Row>
										</div>


										{/*用户信息 点赞数 答卷数 点赞数 查看数*/}
										<div style={{ height: '40px', }}>
											<Row>

												<Col span={2} >
													<p style={{ fontSize: '12', fontWeight: 'blod', color: 'grey', textAlign: 'center' }}>{owner}</p>
												</Col>

												<Col span={1}></Col>

												<Col span={4}><br /><p>发布于:&nbsp;{publish}</p></Col>

												<Col span={2}>	<br />	<div><Icon type="edit" />&nbsp;&nbsp;{watch}</div></Col>
												{/*	<Col span={2}>	<br />	<div><Icon type="like" />&nbsp;&nbsp;34</div></Col>*/}
												<Col span={2}>	<br />	<div><Icon type="eye" />&nbsp;&nbsp;{watch}</div></Col>
											</Row>

										</div>
									</Col>
									<Col span={1} style={{ marginTop: '130px' }}>
										<Button>查看</Button>
									</Col>
								</Row>
							</div>
						)
					})
				}

				<div style={{ width: '520px', margin: 'auto', marginTop: '80px', marginBottom: '50px', }}>
					<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
				</div>
			</div>
		)
	}
}

class List extends Component {
	constructor(props) {
		super(props)
		this.state = { isLoading: true }
		this.papers = []
	}

	componentWillMount() {
		appService.request(appInfo.address.papers, null, false)
			.then(response => {
				this.papers = response.results
				console.log('问卷列表%o %o', response.results)
				this.setState({ isLoading: false })
			})
			.catch(err => {

			})
	}
	render() {
		const TabPane = Tabs.TabPane;
		return (
			<div>
				<div className="box">
					<div style={{ width: '1200px', height: '50px' }}></div>
					<Tabs defaultActiveKey="1">
						<TabPane tab="目录视图" key="1"><QuestionList list={this.papers} /></TabPane>
						<TabPane tab="摘要视图" key="2"><DetailView list={this.papers} /></TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default List;