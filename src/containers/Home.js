import React, { Component } from 'react';

import { Button, Row, Col, Carousel, Input, Spin } from 'antd'
import QuestionList from '../components/QuestionList'

import { appInfo, appService } from '../service'

const CarouselFigure = [
	{ id: '1', url: require('../image/1.jpeg') },
	{ id: '2', url: require('../image/2.jpeg') },
	{ id: '3', url: require('../image/3.jpeg') },
	{ id: '4', url: require('../image/4.jpeg') },
	{ id: '5', url: require('../image/5.jpeg') },
]


class Home extends Component {
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
		const Search = Input.Search;
		return (
			this.state.isLoading ? <Spin /> :
				<div>
					<div style={{
						backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
						backgroundPosition: 'center center', height: '500px',
						// width: '1000px', margin: 'auto'
					}}>
						<Row style={{ width: ' 1200px', margin: 'auto' }}>
							<Col span={10} >
								{/*轮播图*/}
								<div style={{ width: '550px', height: '430px', marginLeft: '50px', marginTop: '40px', borderRadius: '5%' }}>
									<Carousel autoplay={true}>
										{
											CarouselFigure.map((item) => {
												return (
													<div>
														<img src={item.url} style={{ width: '650px', height: '430px', borderRadius: '5' }} />
													</div>
												)
											})
										}
									</Carousel>
								</div>
							</Col>


							<Col span={5}></Col>

							<Col span={9}>

								<div style={{ marginTop: '100px', width: ' 400px', height: '350px', float: 'left', }}>
									{	/*	<Search
									placeholder="请输入问卷名关键词"
									style={{ width: 300 }}
									onSearch={value => console.log(value)}
								/>
								<p style={{ fontSize: 30, color: 'aliceblue' }}>狗日的毕业设计</p>*/}
								</div>
							</Col>
						</Row>
					</div>




					<div style={{ width: '1200px', margin: 'auto', minHeight: '730px' }}>
						<div style={{ marginTop: '50px', marginLeft: '50px' }}>
							<Search
								placeholder="请输入问卷名关键词"
								style={{ width: 300 }}
								onSearch={value => console.log(value)}
							/>
						</div>
						<QuestionList list={this.papers} />
					</div>
				</div>

		);
	}
}

export default Home;

{	/*	<div className="hometask">
							<div className="taskup">
								<p className="taskfont">前端</p>
								<hr />
								<p className="taskfonts">
									首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12
								</p>
							</div>
							<div className="taskdown">
								<p className="taskfont">后端 数据库</p>
								<hr />
								<p className="taskfonts">后端&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12</p>
								<p className="taskfonts">数据库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12</p>
							</div>
						</div>*/}