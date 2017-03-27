import React, { Component } from 'react';

class NewPerson extends Component {
	render() {
		return (
			<div className='box'>
				<div style={{ width: '700px', height: '450px', margin: 'auto', paddingTop: '50px' }}>
					<img src={require('../image/1.jpeg')} style={{ width: '700px', height: '450px' }} />
				</div>

			</div>
		);
	}
}

export default NewPerson;