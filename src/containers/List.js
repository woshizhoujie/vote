import React, { Component } from 'react';
import { Tabs, Row, Col, Button, Icon, Pagination } from 'antd';

import QuestionList from '../components/QuestionList'
import { QuestionListCategory } from '../data/MockDate'

class DetailView extends Component {
	onChange = (pageNumber) => {
		console.log('Page: ', pageNumber);
	}

	render() {
		return (
			<div>
				{
					QuestionListCategory.map((e, i) => {
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
											backgroundImage: 'url(' + e.img + ')',
											backgroundSize: 'cover', backgroundPosition: 'center,center',
											cursor: 'pointer',
										}}></div>
									</Col>

									<Col span={18} style={{ marginLeft: '15px', }}>
										<br />
										<p style={{ fontSize: '20', fontWeight: 'blod', color: 'grey' }}>标题:
										<span style={{ fontSize: '15', }}>&nbsp;&nbsp;{e.name}</span>
										</p>
										<br />
										{/*描述*/}
										<div style={{ height: '70px', }}>

											<Row>
												<Col span={2}>
													<img src={e.img} style={{ width: '65px', height: '65px', borderRadius: '65px' }} />
												</Col>
												<Col span={1}></Col>
												<Col span={19}>
													<p style={{ fontSize: '15px', }}>{e.des}</p>
												</Col>

											</Row>
										</div>


										{/*用户信息 点赞数 答卷数 点赞数 查看数*/}
										<div style={{ height: '40px', }}>
											<Row>

												<Col span={2} >
													<p style={{ fontSize: '12', fontWeight: 'blod', color: 'grey', textAlign: 'center' }}>{e.author}</p>
												</Col>

												<Col span={1}></Col>

												<Col span={4}><br /><p>发布于:&nbsp;{e.time}</p></Col>

												<Col span={2}>	<br />	<div><Icon type="edit" />&nbsp;&nbsp;34</div></Col>
												{/*	<Col span={2}>	<br />	<div><Icon type="like" />&nbsp;&nbsp;34</div></Col>*/}
												<Col span={2}>	<br />	<div><Icon type="eye" />&nbsp;&nbsp;34</div></Col>
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
	render() {
		const TabPane = Tabs.TabPane;
		return (
			<div>
				<div className="box">
					<div style={{ width: '1200px', height: '50px' }}></div>
					<Tabs defaultActiveKey="1">
						<TabPane tab="目录视图" key="1"><QuestionList /></TabPane>
						<TabPane tab="摘要视图" key="2"><DetailView /></TabPane>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default List;