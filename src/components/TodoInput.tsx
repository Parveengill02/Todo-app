import React from 'react'
interface Props{
    todoName:string,
    setTodoName:React.Dispatch<React.SetStateAction<string>>;
    addTodo:()=>void,
}
const TodoInput = ({todoName,setTodoName,addTodo}:Props) => {
  return (
   <div className='flex justify-center gap-2'>
                    <textarea className='border border-gray-400 px-[45px] py=[13px] rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500' value={todoName} onChange={(e) => setTodoName(e.target.value)} placeholder='Enter your to-do' /><br/>
                    <button onClick={addTodo} className='border-2 px-[10px] py-[7px] rounded-[10px] bg-gray-800 text-white hover:bg-gray-600 cursor-pointer' >Add Todo</button>
                   
                </div>

  )
}

export default TodoInput