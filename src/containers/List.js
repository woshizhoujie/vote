import React, {Component} from 'react';
import { Tabs } from 'antd';
import QuestionList from '../components/QuestionList'
class List extends Component {
	render() {
		const TabPane = Tabs.TabPane;
		return (
			<div>
				<div className="box">
				<div style={{width:'1200px',height:'50px'}}></div>
          <Tabs defaultActiveKey="1">
             <TabPane tab="缩略" key="1">	<QuestionList /></TabPane>
             <TabPane tab="详情" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
				</div>
			</div>
				);
			}
		}

export default List;