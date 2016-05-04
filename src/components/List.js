import React from 'react';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			activeTodos: [],
			deletedTodos: []
		};
	}

	render() {
		return (
			<ul>
				<li> Hey hey </li>
			</ul>
		)

	}
};

export default List;