import React, { Component } from 'react';

import { Button, Row, Col, Carousel } from 'antd'
import QuestionList from '../components/QuestionList'

const CarouselFigure = [
	{ id: '1', url: require('../image/1.jpeg') },
	{ id: '2', url: require('../image/2.jpeg') },
	{ id: '3', url: require('../image/3.jpeg') },
	{ id: '4', url: require('../image/4.jpeg') },
	{ id: '5', url: require('../image/5.jpeg') },
]


class Home extends Component {
	render() {
		return (

			<div className="box">

				<Row>
					<Col span={10} >
						{/*轮播图*/}
						<div style={{ width: '550px', height: '430px', marginLeft: '50px', marginTop: '50px', borderRadius: '5%' }}>
							<Carousel autoplay={true}>
								{
									CarouselFigure.map((item) => {
										return (
											<div>
												<img src={item.url} style={{ width: '650px', height: '430px', borderRadius: '5' }} />
											</div>)
									})
								}
							</Carousel>
						</div>
					</Col>


					<Col span={4}></Col>

					<Col span={10}>
						<div className="hometask">
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
						</div>
					</Col>
				</Row>


				<QuestionList line={true} />
			</div>
		);
	}
}

export default Home;