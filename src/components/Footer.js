import React from 'react'
import { connect } from 'react-redux'

// 可选 通过 class 控制显隐
const ClearCompletedBtn = ({isShowClearBtn, clearCompleted}) => {
  if(isShowClearBtn) {
    return <button className="clear-completed"
      onClick={clearCompleted}
    >Clear completed</button>
  }
  return null
}

const FilterList = ({ filters, switchFilter }) => {
  return filters.map(({ label, selected }, idx) => {
    const clazz = selected ? 'selected' : ''
    return (
      <li key={idx}>
        <a className={clazz}
          onClick={()=> {
            switchFilter(label)
          }}
          href="#/">
          {label}
        </a>
      </li>
    )
  })
}

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
      <strong>{props.leftCount}</strong> item left</span>
      <ul className="filters">
        <FilterList {...props} />
        
      </ul>
      <ClearCompletedBtn {...props} />
    </footer>
  )
}

//props的解构赋值 相当于 <FilterList filters={filters} .... />
const mapStateToProps = ({ filters, todos }) => ({
  filters,
  leftCount: todos.filter(todo => !todo.completed).length,
  isShowClearBtn: todos.some(todo => todo.completed)
})

const mapDispatchToProps = (dispatch) => ({
  switchFilter: (data)=> {
    dispatch({
      type: 'SWITCH_FILTER',
      data
    })
  },
  clearCompleted: ()=> {
    dispatch({
      type: 'CLEAR_COMPLETED'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)