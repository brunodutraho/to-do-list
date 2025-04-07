import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
 
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add ,changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
	constructor(props) {
		super(props)
		this.keyHandler = this.keyHandler.bind(this)
	}

	componentWillMount() {
		this.props.search()
	}

	keyHandler(e) {
		const { add, search, description, clear } = this.props
		if(e.key === 'Enter') {
			e.shiftKey ? search() : add(description)
		} else if (e.key === "Escape") {
			clear()
		}
	}

	render() {
		const { add, search, description } = this.props
		return (
			<div role="form" className="todoForm d-flex flex-column mb-3">
				<Grid cols="12 9 10" classGrid="">
					<input
						type="text"
						id="description"
						placeholder="Adicione uma tarefa"
						value={this.props.description}
						onChange={this.props.changeDescription}
						onKeyUp={this.keyHandler}
						className="form-control"
					/>
				</Grid>
				<Grid cols="12 3 2" classGrid=" btn-respo">
					<IconButton icon="plus" style="primary" onClick={() => add(description)} />
					<IconButton icon="search" style="info" onClick={search} />
					<IconButton icon="close" style="danger" onClick={this.props.clear} />
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	description: state.todo.description,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators({ add ,changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
