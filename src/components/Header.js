import React from 'react'
import { connect } from 'react-redux'

const ENTER_KEY_CODE = 13;

const Header = ({ addTodo }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyPress={(e)=> {
          if(e.charCode === ENTER_KEY_CODE && e.target.value !== '') {
            addTodo(e.target.value.trim())
            e.target.value = ''
          }
        }} />
    </header>
  )
}

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
  addTodo: (label) => {
    dispatch({
      type: "ADD_TODO",
      data: { label }
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);