import React, { Component } from 'react';
import { Radio, Input, Button, Row, Col } from 'antd';
import Chart from 'rc-echarts';
import ReactDOM from 'react-dom';
import _ from 'lodash'

const radioStyle = {
	display: 'block',
	height: '30px',
	lineHeight: '30px',
};
class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 1,
		}
	}

	onChange = e => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}

	ready = (echart) => {
		console.log(echart);
		echart.on('click', (params) => {
			console.log(params);
			alert("click");
		});
	}

	render() {
		const series = [
			{ label: 'Apple', value: '苹果' },
			{ label: 'Pear', value: '魅族' },
			{ label: 'Orange', value: '小米' },
			{ label: 'other', value: '其他' },
		];

		const RadioGroup = Radio.Group;

		const options = {
			legend: {
				data: ['最高气温', '最低气温'],
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					formatter: '{value} °C'
				}
			}],
		};

		console.log('问卷详情页面%o', this.props.location.state)

		let detail = this.props.location.state

		const { title, cover, description, id, owner, publish, questions, watch } = detail

		let selectValue = []

		return (
			<div className="box" >
				<div style={{ width: '1100px', margin: 'auto', paddingTop: '50px', }}>
					<p style={{ fontSize: '20px', fontWeight: 'blod', fontStyle: "oblique", fontFamily: 'Helvetica Neue', color: "rgb(51, 51, 151)", }}>{title}</p>
					<br />
					<p>
						<span style={{ color: 'blue' }}>2</span>&nbsp;人已投票&nbsp;&nbsp;
							<span style={{ color: 'blue' }}>{watch}</span>&nbsp;人已查阅
					</p>
					<br />

					<div style={{ width: '500px', minHeight: '100px', }}>
						<p style={{ fontSize: '13px', letterSpacing: '3px', }}>{description}</p>
					</div>

					{
						questions.map((item, index) => {
							const answer = _.values(item.answers)

							return (
								<div>
									<p style={{ fontSize: '15px' }}>{index + 1}:{item.description}</p>
									<RadioGroup onChange={e => {
										if (!selectValue.length) {
											selectValue.push({ question: item.id, answer: e.target.value })
										}
										selectValue.map(s => {
											if (s.question === item.id) {
												s.answer = e.target.value
											} else {
												selectValue.push({ question: item.id, answer: e.target.value })
											}
										})

										console.log('select: %o', selectValue)
									}}>
										{
											answer.map((e, i) => {
												let value = ''
												switch (i) {
													case 0:
														value = 'A'
														break
													case 1:
														value = 'B'
														break
													case 2:
														value = 'C'
														break
													case 3:
														value = 'D'
														break
													default:
														value = ''
												}

												return (
													<Radio style={radioStyle} key={i} value={value}>{value}</Radio>
												)
											})
										}
									</RadioGroup>
								</div>
							)
						})
					}
				</div>
				<Row>
					<Col span={22}></Col>
					<Col span={2}>
						<Button
							onClick={() => {

							}}
						>提交</Button>
					</Col>

				</Row>

				<div style={{ width: '100px', height: '100px' }}></div>

			</div>
		);
	}
}

export default Detail;