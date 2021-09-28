const initialState = {todos:[], todo:{}}
export const addTodoAction = todo => ({type: "ADD_TOD", payload: todo})
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TOD': return {...state, todos: [...state.todos, action.payload]}
        default : return state
    }
}
export default todoReducer