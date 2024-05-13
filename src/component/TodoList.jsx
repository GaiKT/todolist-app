import React, { useEffect, useState } from 'react'

export default function TodoList({todo , setTodo , ind , darkMode}) {

  return (
      <div className={`flex w-full gap-5 p-4 border rounded-md ${darkMode ? 'text-white border-[#25273C]' : '' }  border-t-gray-400`}>
        <input type="checkbox" className='checkbox checkbox-md border border-white rounded-full [--chkbg:oklch(var(--p))]' 
        defaultChecked={todo.status} 
        onChange={()=>{
          setTodo( ind ,todo.status )
        }}
        />
        <p className={`${todo.status ? 'line-through text-gray-400' : ''}`}>{todo.todoName}</p>
      </div>
      )
}
