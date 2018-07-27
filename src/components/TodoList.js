import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'

const TodoList = ({ todos, allCompleted, toggleAll }) => {
  return (
    <section className="main">
      <input id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={(e) => {
          toggleAll(e.target.checked)
        }} />
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

const mapStateToProps = ({ todos, filters }) => {
  return {
    todos: getVisibleTodos(todos, filters),
    allCompleted: todos.every(item => item.completed)
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleAll: (checked) => {
    dispatch({
      type: 'TOGGLE_ALL',
      data: checked
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);