import React from 'react'
import { connect } from 'react-redux'

const ENTER_KEY_CODE = 13;

// class Header extends React.Component {
    // const addTodo = this.props.addTodo
    // const { addTodo } = this.props
// }
// 可选：添加todo后，光标重新聚焦
const Header = ({ addTodo }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyPress={(e)=> {
          const label = e.target.value.trim()
          if(e.charCode === ENTER_KEY_CODE && label !== '') {
            addTodo(label)
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