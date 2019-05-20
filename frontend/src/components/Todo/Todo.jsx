import React from 'react'
import PageHeader from '../../template/PageHeader/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default function Todo(props) {
    return (
        <div>
            <PageHeader name="Tarefas" small="Cadastro" />
            <TodoForm />
            <TodoList />
        </div>
    )
}