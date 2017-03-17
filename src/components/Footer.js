import React, { Component } from 'react';
import { Button, Row, Col, Tabs, RadioGroup, Radio } from 'antd';
import 'antd/dist/antd.css';
//import { Grid, Row, Col } from 'react-bootstrap'

class Fotter extends Component {
	render() {
		return (
			<div className='footer'>
				<hr />
				<Row>
					<Col span={8}></Col>
					<Col span={2}>
						<p className="fotterfont">关于我们</p>
					</Col>
					<Col span={2}>
						<p className="fotterfont">项目介绍</p>
					</Col>
					<Col span={2}>
						<p className="fotterfont">散文分享</p>
					</Col>
					<Col span={2}>
						<p className="fotterfont">摄影分享</p>
					</Col>
					<Col span={8}></Col>
				</Row>
				<br/>
				<Row>
					<Col span={10}></Col>
					<Col span={4}><p style={{color:'lightgrey'}}>至叶飞扑，悬若灰禾,糖可破雨。</p></Col>
					<Col span={10}></Col>
				</Row>
			</div>
		);
	}
}

export default Fotter;