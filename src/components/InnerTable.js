import React, { Component } from 'react';
import { Row, Table, Spin } from 'antd'

import { AppService, AppInfo } from '../service'

class InnerTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: [],
		}
	}



	render() {
		const { columns } = this.props
		const pagination = {
			showSizeChanger: true,
			showQuickJumper: true,
			pageSize: 15,
			showTotal: (total) => `共${total}条`
		}
		return (
			<div>
				<Row>
					{
						this.props.name === 'page' ?
							<Table
								columns={columns}
								dataSource={this.props.data}
								pagination={false}
							/> :
							<Table
								columns={columns}
								dataSource={this.props.data}
								pagination={pagination}
							/>
					}

				</Row>
			</div>
		);
	}
}

export default InnerTable;