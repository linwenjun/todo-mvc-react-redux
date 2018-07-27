import React, { Component } from 'react';
import { connect } from 'react-redux'

class Todo extends Component {
	state = {
		editing: false
	}

	toggleEditing = ()=> {
		const editing = !this.state.editing
		this.setState({
			editing
		})
	}

	handleKeyPress = (e, idx) => {
		if(e.charCode === 13 && e.target.value.trim() !== '') {
			e.target.value = e.target.value.trim();
			this.props.updateTodo(idx, e.target.value)	
			this.toggleEditing()
		}
	}

	render() {
		const { label, isHidden=false, completed=false, toggleTodo, idx } = this.props
		let clazz = completed ? 'completed' : '';
		if(this.state.editing) {
			clazz += ' editing'
		}

		if(isHidden) {
			clazz += ' hidden'
		}
		
		return (
			<li className={clazz}>
				<div className="view">
					<input className="toggle"
						type="checkbox"
						checked={completed}
						onChange={() => {
							toggleTodo(idx)
						}} />
					<label onDoubleClick={this.toggleEditing}>{label}</label>
					<button className="destroy"></button>
				</div>
				<input className="edit"
					defaultValue={label}
					onKeyPress={(e)=> {
						this.handleKeyPress(e, idx)
					}} />
			</li>
		)
	}
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
	toggleTodo: (idx) => {
		dispatch({
			type: 'TOGGLE_TODO',
			idx
		})
	},
	updateTodo: (idx, label) => {
		dispatch({
			type: 'UPDATE_TODO',
			data: {idx, label}
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Todo);