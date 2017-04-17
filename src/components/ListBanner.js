import React, { Component } from 'react';
import { subMenus, menus } from '../data/Definition'


class ListBanner extends Component {
	render() {
		let { category, text, logo } = this.props
		//backgroundImage: 'url(../image／1.jpeg)',
		return (

			<div style={{
				width: '100%', height: '240px',
				overflow: 'hidden', backgroundImage: "url('../image／1.jpeg')",
				backgroundSize: 'cover', backgroundPosition: 'center,center',
			}}>
			
				<div style={{
					width: '1200px', height: '200px',
					margin: 'auto', color: '#fff',
					fontSize: '48px', padding: '60px 0 0'
				}}
				> {text}{logo}
				</div>

				<div style={{ height: '40px', background: 'rgba(0,0,0,0.2)' }} >
					<div style={{ width: '1190px', margin: 'auto', lineHeight: '40px', fontSize: '12px', color: 'white' }}  >
						{category.name === '个人中心' || category.name === '搜索' ?
							<p>当前位置：首页>{category.name}</p>
							: <p>当前位置：首页>全部信息>{category.name}</p>
						}
					</div>
				</div>
			</div>


		)
	}
}

export default ListBanner;