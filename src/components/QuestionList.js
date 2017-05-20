import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

import { Icon, Row, Col, Pagination } from 'antd'

import { QuestionListCategory } from '../data/MockDate'

class QuestionList extends Component {
	onChange = (pageNumber) => {
		console.log('Page: ', pageNumber);
	}

	render() {
		let list = this.props.list
		console.log('传给组件的问卷列表%o', this.props.list)
		return (
			<div style={{}}>
				<div style={{ width: '1200px', minHeight: '750px', margin: 'auto', marginTop: '10px' }}>
					{
						list.map((item, index) => {
							const { cover, description, id, owner, publish, questions, title, watch } = item
							return (
								<div className="queimg" >
									{	/*<Link to={`/Detail/${item.id}`} >	</Link>*/}

									<span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => {
										browserHistory.push({
											pathname: '/Detail/${item.id}',
											state: item,
										})
										// console.log('路由传递的值%o', value)
									}}>

										<div style={{
											width: '234px',
											height: '250px',
											borderRadius: '5px',
											backgroundImage: 'url(' + cover + ')',
											backgroundColor: 'rgba(0,0,0,0.3)',
											backgroundSize: 'cover', backgroundPosition: 'center,center',
											cursor: 'pointer',
										}}
										>
											<div style={{
												width: '234px',
												height: '250px',
												backgroundColor: 'rgba(43,43,43,0.1)',
												padding: '10px'
											}}>
												<br />
												<br />
												<br />
												<p style={{ textAlign: 'center', fontSize: '15', fontWeight: 'blod', color: 'white' }}>{description}</p>
											</div>

										</div>
									</span>

									<Row style={{ margin: '5px' }}>
										<Col span={2}></Col>
										{/*填问卷数量，查阅数量*/}
										<Col span={5}><div><Icon type="edit" />&nbsp;&nbsp;{watch}</div></Col>

										<Col span={5}><div><Icon type="eye" />&nbsp;&nbsp;{watch}</div></Col>
									</Row>


									<Row style={{
										width: '234px', height: '50px', borderTop: '1px',
										backgroundColor: 'rgba(43,43,43,0.05)',
									}}>
										<div style={{ height: '10px' }}></div>

										<Col span={2}></Col>

										{/*用户头像*/}
										<Col span={5}>
											<img src={cover} style={{ width: '30px', height: '32px', borderRadius: '2px' }} />
										</Col>

										{/*用户名，问卷名*/}
										<Col span={17}>
											{/*<p style={{ fontSize: '12', fontWeight: 'blod', color: 'grey' }}>{owner}</p>*/}
											<p>{title}</p>
										</Col>
									</Row>
								</div>
							)
						})
					}
				</div>

				<div style={{ width: '520px', margin: 'auto', marginTop: '80px', marginBottom: '50px', }}>
					<Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
				</div>
			</div>
		);
	}
}

export default QuestionList;