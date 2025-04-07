import React from "react";
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from '../todo/todoActions'

const TodoList =  (props) => {

	const renderRows = () => {
		const list = props.list || []
		return list.map(todo => (
			<tr key={todo._id}>
				<td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
				<td>
					<IconButton icon='check' style='success' onClick={() => props.markAsDone(todo)} hide={todo.done}/>
					<IconButton icon='undo' style='warning' onClick={() => props.markAsPending(todo)} hide={!todo.done}/>
                    <IconButton icon='trash' style='danger' onClick={() => props.remove(todo)} hide={!todo.done}/>
				</td>
			</tr>
		))
	}

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Descrição</th>
					<th className='tableActions'>Ações</th>
				</tr>
			</thead>
			<tbody>
				{renderRows()}
			</tbody>
		</table>
	)
};

const mapStateToProps = (state) => ({
	list: state.todo.list
})

const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove} ,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
