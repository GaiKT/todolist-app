import React from 'react'

export default function TodoList({todo , setTodo , ind , darkMode , dragStart ,dragEnter}) {

  return (
      <div className={`flex w-full gap-5 p-4 border ${darkMode ? 'text-white border-[#25273C]' : '' }  border-t-gray-400`}
        draggable 
        onDragStart={(e)=>{dragStart(e)}}
        dragEnter={(e)=>{dragEnter(e)}}
      >
        <input type="checkbox" className={`checkbox checkbox-md border ${ darkMode ? 'border-white' : ''} rounded-full [--chkbg:oklch(var(--p))]`} 
        defaultChecked={todo.status} 
        onChange={()=>{
          setTodo( ind ,todo.status )
        }}
        />
        <p className={`${todo.status ? 'line-through text-gray-400' : ''}`}>{todo.todoName}</p>
      </div>
      )
}
