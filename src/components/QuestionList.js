import React, { Component } from 'react';
import { QuestionListCategory } from '../data/MockDate'

class QuestionList extends Component {
	render() {
		return (
			<div>
				<div className="questionList">
					<div className="quetip"></div>
					<div className="quetips"><p>hotquestion</p></div>
						
					<div className="queimgbox">
						{
							QuestionListCategory.map((e, i) => {
								return (
									<div className="queimg">
										<img src={e.img} />
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		);
	}
}

export default QuestionList;