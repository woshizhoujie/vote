import React, { Component } from 'react';
import { Row, Col, Timeline, Tabs, Radio } from 'antd';
import QuestionList from '../components/QuestionList'



class NewPerson extends Component {
	render() {
		const TabPane = Tabs.TabPane;
		return (
			<div style={{ width: '1200px', margin: 'auto', minHeight: '730px', backgroundColor: ' #f9f9f9' }}>

				<Tabs defaultActiveKey="1" tabPosition='left' style={{ width: '1000px', margin: 'auto', paddingTop: '50px' }}>

					<TabPane tab="用户注册" key="1">
						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

					<TabPane tab="用户登录" key="2">
						<div style={{
							backgroundImage: `url(${require("../image/green2.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

					<TabPane tab="上传问卷" key="3">
						<div style={{
							backgroundImage: `url(${require("../image/green3.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

					<TabPane tab="填写问卷" key="4">
						<div style={{
							backgroundImage: `url(${require("../image/green4.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

					<TabPane tab="搜索问卷" key="5">
						<div style={{
							backgroundImage: `url(${require("../image/green5.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

					<TabPane tab="查看问卷" key="6">
						<div style={{
							backgroundImage: `url(${require("../image/green6.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px', marginLeft: '50px'
						}}>
						</div>
					</TabPane>

				</Tabs>

			</div>
		);
	}
}

export default NewPerson;


{/*

	<Row style={{ width: '1000px', margin: 'auto', paddingTop: '50px' }}>

					<Col span={5}>
						<Timeline>
							<Timeline.Item>注册</Timeline.Item>
							<Timeline.Item>登录</Timeline.Item>
							<Timeline.Item>上传问卷</Timeline.Item>
							<Timeline.Item>填写问卷</Timeline.Item>
							<Timeline.Item>搜索问卷</Timeline.Item>
							<Timeline.Item>查看问卷</Timeline.Item>
						</Timeline>
					</Col>

					<Col span={1} >
					</Col>

					<Col span={17} >
						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px',
						}}>
						</div>
						<br />
						<br />

						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px',
						}}>
						</div>
						<br />
						<br />

						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px',
						}}>
						</div>
						<br />
						<br />

						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px',
						}}>
						</div>
						<br />
						<br />

						<div style={{
							backgroundImage: `url(${require("../image/green1.jpg")})`, backgroundSize: 'cover',
							backgroundPosition: 'center center', height: '400px',
						}}>
						</div>
						<br />
						<br />

					</Col>
				</Row>


*/}

