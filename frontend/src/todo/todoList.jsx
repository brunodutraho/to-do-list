import React from "react";
import IconButton from '../template/iconButton'

export default (props) => {

	const renderRows = () => {
		const list = props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td>{todo.description}</td>
				<td>
					<IconButton icon='edit' style='' onClick={() => props.handleEdit(todo)} />
                    <IconButton icon='trash' style='danger' onClick={() => props.handleRemove(todo)} />
				</td>
			</tr>
		))
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
};
