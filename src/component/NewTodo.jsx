import React, { useState } from 'react';

export default function NewTodo({ addTodo , darkMode }) {

  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    addTodo(todo);
    setTodo(''); // Reset input field
  };

  return (
    <div className={`flex w-full gap-5 ${darkMode ? 'bg-[#25273C] text-white' : 'bg-white text-black' }  p-4 shadow-lg rounded-md`}>
      <div type="checkbox" className={`checkbox checkbox-md border ${ darkMode ? 'border-white' : ''} rounded-full [--chkbg:oklch(var(--p))]`}/>
      <form onSubmit={handleSubmit} className='w-full'>
        <input
          type="text" 
          className={`w-full px-2 ${darkMode ? 'bg-[#25273C]' : 'bg-white'}`}
          placeholder='Create New Todo...'
          onChange={(e)=>{setTodo(e.target.value)}}
          value={todo}
        />
      </form>
    </div>
  );
}
