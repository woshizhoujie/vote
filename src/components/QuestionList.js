import React, { Component } from 'react';
import { Icon, Row, Col } from 'antd'

import { QuestionListCategory } from '../data/MockDate'



class QuestionList extends Component {
	render() {
		return (
			<div>
				<div style={{ width: '1200px', height: '1200px', margin: 'auto', marginTop: '10px' }}>
					{
						this.props.line ?
							<div>
								<div className="quetip"></div>
								<div style={{ width: '1100px', height: '10px', margin: 'auto' }}><p>hotquestion</p></div>
							</div>
							: null
					}

					<div >
						{
							QuestionListCategory.map((e, i) => {
								return (

									<div className="queimg" >

										<div style={{
											width: '234px',
											height: '250px',
											borderRadius: '5px',
											backgroundImage: 'url(' + e.img + ')',
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
												<p style={{ textAlign: 'center', fontSize: '20', fontWeight: 'blod', color: 'white' }}>{e.des}</p>
											</div>

										</div>


										<Row style={{ margin: '5px' }}>
											<Col span={2}></Col>
											{/*填问卷数量，点赞数量*/}
											<Col span={5}>	<div><Icon type="edit" />&nbsp;&nbsp;34</div></Col>
											<Col span={5}>	<div><Icon type="like" />&nbsp;&nbsp;34</div></Col>
										</Row>


										<Row style=
											{{
												width: '234px', height: '50px', borderTop: '1px',
												backgroundColor: 'rgba(43,43,43,0.05)',
											}}>
											<div style={{ height: '10px' }}></div>
											<Col span={2}></Col>
											{/*用户头像*/}
											<Col span={5}>
												<img src={e.img} style={{ width: '30px', height: '32px', borderRadius: '2px' }} />
											</Col>
											{/*用户名，问卷名*/}
											<Col span={17}>
												<p style={{ fontSize: '12', fontWeight: 'blod', color: 'grey' }}>{e.author}</p>
												<p>{e.name}</p>
											</Col>
										</Row>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionList;