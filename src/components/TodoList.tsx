import React from 'react'
interface Todos {
    id: number,
    title: string,
    completed: boolean,
};
interface Props{
 todo:Todos[],
 checkTodo:(id:number)=>void
 deleteTodo:(id:number)=>void
 updateTodo:(id:number , newTitle:string)=>void
}
const TodoList = ({todo,checkTodo,deleteTodo,updateTodo}:Props) => {
  return (
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
      {todo.map((t) => (
        <tr key={t.id} className="text-center">
          <td className="border border-gray-300 px-4 py-2">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => checkTodo(t.id)}
            />
          </td>
          <td
            className="border border-gray-300 px-4 py-2"> 
             <input
    className={`w-full px-2 py-1 text-center ${
              t.completed ? "line-through text-gray-500" : ""
            }`}   value={t.title} onChange={(e)=>updateTodo(t.id, e.target.value)}
          
           />
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {t.completed ? (
              <span className="text-green-600 font-semibold">Completed</span>
            ) : (
              <span className="text-yellow-600 font-semibold">Not Completed</span>
            )}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <button
              onClick={() => deleteTodo(t.id)}
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

  )
}

export default TodoList