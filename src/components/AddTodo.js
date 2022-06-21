import { useState } from "react";

const AddTodo = ({createTodo}) => {
  const [value,setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    if (value === '') {
      return(
        console.log('Add Something')
      )
    }
    createTodo(value);
    setValue('');
  }
  return(
     <form className='flex' onSubmit={handleSubmit}>
      <input
        className='w-5/6 rounded-l-full pl-4 h-[8vmin]'
        type='text' placeholder='Add Something...' value={value}
        onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleSubmit} className='rounded-r-full w-1/6 h-[8vmin]
      bg-gradient-to-bl from-violet-500 to-cyan-300 text-[2vmin] font-semibold text-white
      hover:to-violet-500 duration-300'>
      + Add
      </button>
    </form>
  )
}

export default AddTodo;
