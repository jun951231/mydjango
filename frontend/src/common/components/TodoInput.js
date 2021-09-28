import React, { useState } from "react"; //{}=구조분해
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';
import { addTodoAction } from "reducers/todo.reducer";
import styled from 'styled-components';

export default function TodoInput(){
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const submitFrom = e => {
        e.preventDefault()
        const newTodo = {
            id: uuidv4(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        addTodo('')        
    }

    const addTodo = todo => dispatch(addTodoAction(todo))

    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)
    }

    return (
        <form onSubmit={submitFrom} method='POST'>
        <TodoDiv>
            <input type='text'
                    id='todo'
                    name = 'todo'
                    placeholder="할일 입력"
                    value = {todo}
                    onChange={handleChange}/>
            <input type='submit'
                    value='ADD'/><br/>
        </TodoDiv>
        </form>)
}
const TodoDiv = styled.div`
    text-align: center;
`
