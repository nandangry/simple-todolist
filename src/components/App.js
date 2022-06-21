import { useState } from 'react';
import AddTodo from './AddTodo';
import About from './About';
import List from './List';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const createTodoItem = (task) => {
    const newTodoItem = [...todoItems, {task, status: false}];
    setTodoItems(newTodoItem);
  }

  const deleteTodoItem = (index) => {
    const newTodoItem = [...todoItems];
    newTodoItem.splice(index, 1);
    setTodoItems(newTodoItem);
  }

  const doneTodoItem = (index) => {
    const newTodoItem = [...todoItems];
    newTodoItem[index].status === false
    ? (newTodoItem[index].status = true)
    : (newTodoItem[index].status = false);
    setTodoItems(newTodoItem);
  }

  return(
    <div className="md:flex md:h-screen bg-gradient-to-bl from-violet-500
    to-cyan-300">
      <div className='bg-slate-200 box-border border-2 border-white
      text-center mx-auto my-8 p-4 w-3/5 drop-shadow-xl rounded-2xl'>
        <p className='text-sky-800 text-3xl font-semibold'>To-Do List</p>
        <hr className='my-4 border-4 border-slate-300 rounded-full' />
        <div className='h-3/4 relative overflow-y-auto mb-4'>
        {todoItems.map((item, index) => (
          <List
            key={index}
            index={index}
            item={item}
            deleteTodo={deleteTodoItem}
            doneTodo={doneTodoItem}
          />
        ))}
        </div>
        {console.log(todoItems)}
        <AddTodo
          createTodo={createTodoItem} />
      </div>       
      <About /> 
    </div>
  )
}

export default App;
