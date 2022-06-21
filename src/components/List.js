import React from "react";

const List = ({item, index, deleteTodo, doneTodo}) => {
  if (item.status) {
    return(
      <div className='flex m-2 bg-gradient-to-tl from-sky-200 to-green-200 rounded-xl drop-shadow'>
        <p className='my-auto pl-6 py-2 text-gray-400 text-left line-through w-4/6'>
          &diams; {item.task}
        </p>
        <button 
          onClick={() => doneTodo(index)}
          className='hover:bg-orange-300 duration-300 rounded-xl text-orange-400 hover:text-white text-center w-1/6'>
          Undone
        </button>
        <button 
          onClick={() => deleteTodo(index)}
          className='hover:bg-red-400 duration-300 rounded-xl text-red-500 hover:text-white text-center w-1/6'>
          Delete
        </button>
      </div>
    )
  } else {
    return(
      <div className='flex m-2 bg-slate-100 rounded-xl drop-shadow'>
        <p className='my-auto pl-6 py-2 text-sky-800 text-left w-4/6'>
          &diams; {item.task}
        </p>
        <button 
          onClick={() => doneTodo(index)}
          className='hover:bg-green-400 duration-300 rounded-xl text-green-500 hover:text-white text-center w-1/6'>
          Done
        </button>
        <button 
          onClick={() => deleteTodo(index)}
          className='hover:bg-red-400 duration-300 rounded-xl text-red-500 hover:text-white text-center w-1/6'>
          Delete
        </button>
      </div>
      )
  }
}

export default List;