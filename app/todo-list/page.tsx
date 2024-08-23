import TodoForm from '@/components/todoForm'
import Todos from '@/components/todos'
import React from 'react'

export default function TodoList() {
  return (
    <div className='max-w-3xl mx-auto'>
      <TodoForm/>
      <Todos/>
    </div>
  )
}
