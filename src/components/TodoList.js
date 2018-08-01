import React, {Component} from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import { loadTodos } from '../actions/todos'

class TodoList extends Component {
    componentDidMount() {
        const {loadTodos} = this.props;
        loadTodos()
    }
    render() {
        const {todos, allCompleted, toggleAll} = this.props
        return (
            <section className="main">
                <input id="toggle-all"
                       className="toggle-all"
                       type="checkbox"
                       checked={allCompleted}
                       onChange={(e) => {
                           toggleAll(e.target.checked)
                       }}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {
                        todos.map((item, key) => (
                            <Todo key={key} idx={key} {...item} />
                        ))
                    }
                </ul>
            </section>
        )
    }
}

const getVisibleTodos = (todos, filters) => {
    const filter = filters.find(item => item.selected);
    switch (filter.label) {
        case 'Completed':
            return todos.map(todo => {
                return Object.assign({}, todo, {
                    isHidden: !todo.completed
                })
            })
        case 'Active':
            return todos.map(todo => {
                return Object.assign({}, todo, {
                    isHidden: todo.completed
                })
            })
        default:
            return todos;
    }
}

const mapStateToProps = ({todos, filters}) => {
    return {
        todos: getVisibleTodos(todos, filters),
        allCompleted: todos.every(item => item.completed)
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadTodos: ()=> {
        dispatch(loadTodos())
    },
    toggleAll: (checked) => {
        dispatch({
            type: 'TOGGLE_ALL',
            data: checked
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);