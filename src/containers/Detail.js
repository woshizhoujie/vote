import React, { Component } from 'react';

class Detail extends Component {
	render() {
		return (
			<div className="box">
				<div style={{ width: '1100px', margin: 'auto', paddingTop: '50px' }}>
					<p style={{ fontSize: '20px', fontWeight: 'blod', fontStyle: "oblique", fontFamily: 'Helvetica Neue', color: "rgb(51, 51, 151)" }}>关于大学生创业的调查问卷 </p>
					<br />
					<div style={{ width: '500px', minHeight: '100px',  }}>
						<p style={{ fontSize: '13px', letterSpacing: '3px', }}>
						随着经济的迅速发展和大学生就业形势的日益严峻，许多大学生也在为自己寻找发展的机会，自主创业的念头已经在许许多多大学生的心里已经萌
生，所以现在我们要不断的体验生活，去锻炼自己得各种素质，这样才能在自己的创业人生钟游刃有余。
						</p>
					</div>

				</div>

			</div>
		);
	}
}

export default Detail;