import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';


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

    const updateTodo = (id: number, newTitle: string) => {
  const updatedTodos = todo.map(t =>
    t.id === id ? { ...t, title: newTitle } : t
  );
  setTodo(updatedTodos);
};

        return (
            <div className='h-full w-full p-5 bg-beige'>
               
               <TodoInput 
               todoName={todoName}
               setTodoName={setTodoName}
               addTodo={addTodo}/>

              
              <TodoList
                todo={todo}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            </div>
        )
    }

    export default Todo