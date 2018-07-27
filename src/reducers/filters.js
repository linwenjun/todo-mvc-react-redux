const initState = [
  { label: 'All', selected: true },
  { label: 'Completed' },
  { label: 'Active' }
]

// 返回新数组即可
const filters = (state = initState, action) => {
  switch(action.type) {
    case 'SWITCH_FILTER':
      return state.map((item)=> {
        return Object.assign({}, item, {
          selected: (item.label === action.data) ? true : false
        })
      })
    default:
      return state;
  }
}

export default filters