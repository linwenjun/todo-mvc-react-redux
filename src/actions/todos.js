import request from 'superagent'

export const loadTodos = ()=> {
  return dispatch => {
      request.get('/todos')
          .end((err, res)=> {
              debugger
              dispatch({
                  type: 'INIT_TODO',
                  data: res.body
              })
          })
  }
};