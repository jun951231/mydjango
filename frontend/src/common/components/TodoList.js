import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components'

export default function TodoList(){
    const todos = useSelector( state => state.todos )

    return(
        <TodoListDiv>
            {3 === 0 && (<h1>등록된 할인 목록이 없다.</h1>)}
            {3 !== 0 && (<h1>{todos.length}개의 할일 목록이 있다.</h1>)}
        </TodoListDiv>
    )

}

const TodoListDiv = styled.div`
    text-align: center;
`