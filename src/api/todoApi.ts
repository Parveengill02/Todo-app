import axios from "axios";

const API_url="http://localhost:5000/todos"

//Fetch Todo
 export const fetchTodo=async()=>{
    try{
        const res=await axios.get(API_url);
        return res.data
        
    }
    catch(err)
    {
       console.log(err)
    }
   
}

//Add Todo
 export const addTodo=async(title:string)=>{
    try{
      const res=await axios.post(API_url,{
        title,
        completed:false
      })
      return res.data
    }
    catch(err){
       console.log(err)
    }
}

//Delete Todo
export const deleteTodo=async(id:number)=>{
    try{
        const res=await axios.delete(`${API_url}/${id}`)
    }
    catch(err){
      console.log(err)
    }
  
}

//Toggle Todo
export const toggleTodo=async(id:number,completed:boolean)=>{
    try{
      const res=await axios.patch(`${API_url}/${id}`,{
        completed:!completed
      });
      return res.data
    }
    catch(err){
       console.log(err)
    }
}

//Edit Todo
export const editTodo=async(id:number,title:string)=>{
    try{
        const res=await axios.patch(`${API_url}/${id}`,{
            title
        })
        return res.data
    }
    catch(err){
       console.log(err)
    }
}

