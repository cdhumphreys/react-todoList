import React from 'react';
import ReactDOM from 'react-dom';

import List from 'components/List';

class Layout extends React.Component {
	constructor(){
		super();
	}
	render(
		return (
			<div>
				<List />
			</div>
		)
	);
};


const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
