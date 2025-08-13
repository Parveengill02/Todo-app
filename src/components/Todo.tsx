import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { fetchTodo,addTodo,deleteTodo,toggleTodo,editTodo } from '@/api/todoApi';
interface Todos {
    id: number,
    title: string,
    completed: boolean,
};
const Todo = () => {
    const [todo, setTodo] = useState<Todos[]>([]);
    const [todoName, setTodoName] = useState<string>('');
 


    //get data
    const getTodo=async()=>{
        try{
            const data=await fetchTodo();
            console.log(data,"data Fetched")
            setTodo(data);
        }
        catch(error){
         console.log(error);
        }
    }
    useEffect(()=>{
      getTodo();
    },[])

   const add = async () => {
    if (!todoName.trim()) return;

    try {
      const newTodo = await addTodo(todoName);
      setTodo([...todo, newTodo]);
      setTodoName('');
    } catch (error) {
      alert('Failed to add todo. Check console for details.');
    }
  };
   


    
    const deleteTo = async(id:number) => {
        try{
        await deleteTodo(id);
        const newTodo = todo.filter((todos) => todos.id !== id);
        setTodo(newTodo);
        }
        catch(err){
           console.log(err)
        }
    }

   const checkTodo = async (id: number) => {
  try {
    const item = todo.find(t => t.id === id);
    if (!item) return;

    const updated = await toggleTodo(id, item.completed);
    
    setTodo(todo.map(t => t.id === id ? updated : t));
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
};

    const updateTodo = async(id: number, newTitle: string) => {
        try{
            const item = todo.find(t => t.id === id);
    if (!item) return;
     const updatedTodos = await editTodo(id,newTitle)
  setTodo(todo.map(t =>
    t.id === id ? updatedTodos: t
  ));
        }
        catch(err){
           console.log(err);
        }
 
};

        return (
            <div className='h-full w-full p-5 bg-beige'>
               
               <TodoInput 
               todoName={todoName}
               setTodoName={setTodoName}
               addTodo={add}/>

              
              <TodoList
                todo={todo}
                checkTodo={checkTodo}
                deleteTodo={deleteTo}
                updateTodo={updateTodo}
              />
            </div>
        )
    }

    export default Todo