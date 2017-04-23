import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Button, Row, Col, Tabs, RadioGroup, Radio } from 'antd';
//import '../assets/font-awesome-4.7.0/css/font-awesome.min.css'

class TabsUnderline extends Component {
	constructor() {
		super();
		this.state = {
			currentIndex: 0
		};

	}
	static defaultProps = {
		Tab_tittle_style: {
			//	':hover': {border:'1px solid blue',},
			width: '170px',
			height: '20px',
			textAlign: 'center',
			color: '#fff',
			background: '#ccc',
			//borderBottom: '3px solid rgba(0,0,0,0)',
			display: 'inline-block',
			fontSize: '12px',
			cursor: 'pointer'
		},

		Tab_tittle_active_style: {
			width: '170px',
			height: '20px',
			textAlign: 'center',
			color: '#fff',
			background: '#09c',
			//borderBottom: '3px solid ',
			//borderBottomColor: '#09c',
			display: 'inline-block',
			fontSize: '12px',
			//border:'1px solid #f2f2f2',
			cursor: 'pointer'
		},

	}

	render() {

		const { hover, width, height, Tab_tittle_style, Tab_tittle_active_style, } = this.props
		// console.log('height:',height)

		if (height, width !== undefined) {
			Tab_tittle_style.height = height
			Tab_tittle_style.width = width
			Tab_tittle_active_style.height = height
			Tab_tittle_active_style.width = width
		}


		const TabStyles = StyleSheet.create({

			Tab_tittle: Tab_tittle_style,

			Tab_tittle_active: Tab_tittle_active_style,

			Tab_item: {
				display: 'none',
			},

			Tab_item_show: {
				display: 'block',
			},

		})

		let _this = this;
		return (
			<div >
				{/*动态生成Tab导航*/}
				<div >
					{React.Children.map(this.props.children, (element, index) => {
						return (
							/*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
							<div onClick={() => { this.setState({ currentIndex: index }) }}
								className={index === this.state.currentIndex ? css(TabStyles.Tab_tittle_active) : css(TabStyles.Tab_tittle)}>
								{element.props.name}
							</div>
						);
					})}
				</div>


				{/*Tab内容区域*/}
				<div >
					{React.Children.map(this.props.children, (element, index) => {
						return (
							<div className={index === this.state.currentIndex ? css(TabStyles.Tab_item_show) : css(TabStyles.Tab_item)}>{element}</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export { TabsUnderline }