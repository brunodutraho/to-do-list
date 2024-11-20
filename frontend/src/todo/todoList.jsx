import React from "react";
import IconButton from '../template/iconButton'

export default (props) => {

	const renderRows = () => {
		const list = props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
				<td>
					<IconButton icon='check' style='success' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>
					<IconButton icon='undo' style='warning' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}/>
                    <IconButton icon='trash' style='danger' onClick={() => props.handleRemove(todo)} hide={!todo.done}/>
				</td>
			</tr>
		))
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
					<th>Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
};
