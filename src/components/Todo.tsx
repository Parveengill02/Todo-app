import React, { useEffect, useState } from 'react'


interface Todos {
    id: number,
    title: string,
    completed: boolean,
};
const Todo = () => {
    const [todo, setTodo] = useState<Todos[]>([]);
    const [todoName, setTodoName] = useState<string>('');
 
    useEffect(()=>{
        const storedTodos=localStorage.getItem('todos');
        if(storedTodos){
            setTodo(JSON.parse(storedTodos));
        }
    },[])


    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);


    const addTodo = () => {
        const newTodo = {
            id: Math.random(),
            title: todoName,
            completed: false,
        };
        setTodo([...todo, newTodo]);
        setTodoName("");
    }

    const deleteTodo = (id: number) => {
        const newTodo = todo.filter((todos) => todos.id !== id);
        setTodo(newTodo);
    }

    const checkTodo=(id: number)=>{
        const newTodo=todo.map((todos)=>
        {
            if(todos.id == id){
                todos.completed =!todos.completed;
            }
            return todos;
        });
        setTodo(newTodo);
    }
        return (
            <div className='h-full w-full p-5'>
                <div className='flex justify-center gap-2'>
                    <textarea className='border border-gray-400 px-[45px] py=[13px] rounded-[10px]  focus:outline-none focus:ring-2 focus:ring-blue-500' value={todoName} onChange={(e) => setTodoName(e.target.value)} placeholder='Enter your to-do' /><br/>
                    <button onClick={addTodo} className='border-2 px-[10px] py-[7px] rounded-[10px] bg-gray-800 text-white hover:bg-gray-600 cursor-pointer' >Add Todo</button>
                   
                </div>

              <div className="mt-5 overflow-x-auto">
  <table className="min-w-full table-auto border-collapse border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-500 px-4 py-2">Check</th>
        <th className="border border-gray-300 px-4 py-2">Title</th>
        <th className="border border-gray-300 px-4 py-2">Status</th>
        <th className="border border-gray-300 px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      {todo.map((todos) => (
        <tr key={todos.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2">
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => checkTodo(todos.id)}
            />
          </td>
          <td
            className={`border border-gray-300 px-4 py-2 ${
              todos.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todos.title}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {todos.completed ? (
              <span className="text-green-600 font-semibold">Completed</span>
            ) : (
              <span className="text-yellow-600 font-semibold">Not Completed</span>
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button
              onClick={() => deleteTodo(todos.id)}
              className="text-red-600 hover:text-red-800 cursor-pointer font-medium"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </div>
        )
    }

    export default Todo