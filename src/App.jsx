import { useEffect, useState } from 'react';
import './App.css';
import NewTodo from './component/NewTodo';
import TodoList from './component/TodoList';
import { todoListsMockup } from './mockdb/db.js';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [todoLists, setTodoLists] = useState([...todoListsMockup]);
  const [sortBy, setSortBy] = useState('all');
  const [todo, setTodo] = useState('');

  const addTodo = (todo) => {
    setTodo(todo);
  };

  const sortTodoList = (string , todoArr) => {
    let result = [];
    if(string === 'active') {
      result = todoArr.filter((todo , index) => todo.status === false)
    } else if (string === 'completed') {
      result = todoArr.filter((todo , index) => todo.status === true)
    } else if (string === 'all'){
      result = todoArr
    }
    return result
  }

  const setStatusTodo = (index , newData) => {
    let newLists = [...todoLists]
    newLists[index].status = !newData
    setTodoLists(newLists) 
  }

  console.log(todoLists);

  const clearCompleteTodo = () => {
    let newTodoList = [...todoLists];
    let resultClearTodo = newTodoList.filter((todo , index) => todo.status === false) 
    setTodoLists(resultClearTodo)
  }

  const addTodoList = () => {
    let newTodoList = [...todoLists];
    if(todo) {
      newTodoList.push({
        todoName : todo,
        status : false,
      });
      setTodoLists(newTodoList);
    }
  };

  const ClickDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(()=>{
    addTodoList()
  },[todo])

  return (
    <div className={`min-h-screen relative ${darkMode ? 'bg-[#181824]' : 'bg-white'}`}>
      <div>
        {!darkMode && <img src="../images/bg-desktop-light.jpg" />}
        {darkMode && <img src="../images/bg-desktop-dark.jpg" />}
      </div>
      <div className='flex items-center flex-col gap-16 absolute top-16 w-full min-h-screen'>
        <div className='w-1/3 flex justify-between text-white text-4xl'>
          <h1 className='font-semibold'>T O D O</h1>
          <button className='hover:rotate-90 hover:transition-transform' onClick={ClickDarkMode}>
            {darkMode && <img src="/images/icon-sun.svg" width={30} />}
            {!darkMode && <img src="/images/icon-moon.svg" width={30} />}
          </button>
        </div>
        <div className='w-1/3'>
          <div className='rounded-md flex flex-col gap-10'>
            <NewTodo addTodo={addTodo} darkMode={darkMode} />
            <div className={`${ darkMode ? 'bg-[#25273C]' : 'bg-white'} rounded-md shadow-lg`}>
              {sortTodoList(sortBy,todoLists).length > 0 ? (
                sortTodoList(sortBy,todoLists).map((todo, index) => {
                  return <TodoList todo={todo} ind={index} setTodo={setStatusTodo} key={index} darkMode={darkMode}/>;
                })
              ) : (
                <p className='text-white text-center py-4'>You have no todos</p>
              )}
              <div className='text-gray-400 flex w-full justify-between p-4 border border-[#25273C] border-t-gray-400'>
                  <a href='#' className='hover:text-white'> {sortTodoList(sortBy,todoLists).length} items left</a>
                  <div className='flex gap-3'>
                    <a href='#' onClick={()=>{
                      setSortBy('all')
                    }} className='text-blue-400 hover:text-blue-200'>All</a>
                    <a href='#' onClick={()=>{
                      setSortBy('active')
                    }}  className='hover:text-white'>Active</a>
                    <a href='#' onClick={()=>{
                      setSortBy('completed')
                    }} className='hover:text-white'>Completed</a>
                  </div>
                  <a href='#' onClick={clearCompleteTodo} className='hover:text-white'>Clear Completed</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
