import React, { Component } from 'react';
import { Radio } from 'antd';
import Chart from 'rc-echarts';
import ReactDOM from 'react-dom';



class Detail extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value1: 'Apple',
			value2: 'Apple',
			value3: 'Apple',
		}
	}

	onChange1 = (e) => {
		console.log('radio1 checked', e.target.value);
		this.setState({
			value1: e.target.value,
		});
	}
	onChange2 = (e) => {
		console.log('radio2 checked', e.target.value);
		this.setState({
			value2: e.target.value,
		});
	}
	onChange3 = (e) => {
		console.log('radio3 checked', e.target.value);
		this.setState({
			value3: e.target.value,
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
		const RadioGroup = Radio.Group;

		const plainOptions = ['大一', '大二', '大三', '大四'];

		// const options = [
		// 	{ label: 'Apple', value: '苹果' },
		// 	{ label: 'Pear', value: '魅族' },
		// 	{ label: 'Orange', value: '小米' },
		// 	{ label: 'other', value: '其他' },
		// ];

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
		const series = [
			{ label: 'Apple', value: '苹果' },
			{ label: 'Pear', value: '魅族' },
			{ label: 'Orange', value: '小米' },
			{ label: 'other', value: '其他' },
		];

		const optionsWithDisabled = [
			{ label: '是', value: 'Apple' },
			{ label: '否', value: 'Pear' },
			{ label: '暗恋', value: 'Orange', disabled: false },
		];


		return (
			<div className="box" >
				<div style={{ width: '1100px', margin: 'auto', paddingTop: '50px', }}>
					<p style={{ fontSize: '20px', fontWeight: 'blod', fontStyle: "oblique", fontFamily: 'Helvetica Neue', color: "rgb(51, 51, 151)", }}>关于大学生创业的调查问卷 </p>
					<br />
					<p>
						<span style={{ color: 'blue' }}>2</span>&nbsp;人已投票&nbsp;&nbsp;
							<span style={{ color: 'blue' }}>2</span>&nbsp;人已查阅
					</p>
					<br />

					<div style={{ width: '500px', minHeight: '100px', }}>
						<p style={{ fontSize: '13px', letterSpacing: '3px', }}>
							随着经济的迅速发展和大学生就业形势的日益严峻，许多大学生也在为自己寻找发展的机会，自主创业的念头已经在许许多多大学生的心里已经萌
生，所以现在我们要不断的体验生活，去锻炼自己得各种素质，这样才能在自己的创业人生钟游刃有余。
						</p>
					</div>

					<div>
						<p>1:你是大几？</p>
						<RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1} />
						<p><br /></p>
						<p>1:手机型号？</p>
						<RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
						<p><br /></p>
						<p>1:是否单身？</p>
						<RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value3} />
						<p><br /></p>
					</div>

					<Chart options={options} onReady={this.ready} />

					<Chart {...options} >
						<Chart.Bar {...series} />
					</Chart>

					<Chart {...options} onReady={this.ready}>
						<Chart.Line
							name="最高气温"
							data={[11, 11, 15, 13, 12, 13, 10]} />
						<Chart.Line
							name="最低气温"
							data={[1, -2, 2, 5, 3, 2, 0]} />
					</Chart>
				</div>
			</div>
		);
	}
}

export default Detail;