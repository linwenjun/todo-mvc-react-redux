const initState = []

const todos = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_TODO':
            return action.data
        case 'TOGGLE_TODO':
            return state.map((item, idx) => {
                return Object.assign({}, item, {
                    completed: idx === action.idx ? !item.completed : item.completed
                })
            })
        case 'TOGGLE_ALL':
            return state.map((item) => {
                return Object.assign({}, item, {
                    completed: action.data
                })
            })
        case 'ADD_TODO':
            const newState = [...state];
            newState.push(action.data);
            return newState;
        case 'UPDATE_TODO':
            return state.map((item, idx) => {
                const {label: newLabel, idx: newIdx} = action.data
                return Object.assign({}, item, {
                    label: idx === newIdx ? newLabel : item.label
                })
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed)
        default:
            return state
    }
}

export default todos