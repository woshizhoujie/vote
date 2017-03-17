import React, { Component } from 'react';
import QuestionList from '../components/QuestionList'
class Home extends Component {
	render() {
		return (
			<div className="box">
				<div className="homeimg"><img src={require("../image/2.jpeg")} /></div>
				<div className="hometask">
					<div className="taskup">
						<p className="taskfont">前端</p>
						<hr />
						<p className="taskfonts">首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12</p>
					</div>
					<div className="taskdown">
						<p className="taskfont">后端 数据库</p>
						<hr />
						<p className="taskfonts">后端&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12</p>
						<p className="taskfonts">数据库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017.01.12</p>
					</div>
				</div>
				<div style={{width:"1200px",clear:"both"}}></div>
				<QuestionList />
			</div>
		);
	}
}

export default Home;