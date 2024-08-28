import { useEffect } from "react";


function TodoList({todos, onDelete}) {

    useEffect(()=>{

    },[todos])
    return (
        <>
         {todos.map((todo, ind)=> {
        return (
          <div key={todo.id} className='flex my-2 bg-slate-100'>
            <h3 className='text-2xl text-left py-2 pl-2 font-mono font-medium flex-1'>{todo.todo}</h3>
            <button onClick={()=>onDelete(todo.id)}
             className='bg-red-300 rounded-md p-2 px-3'>Delete</button>

          </div>
        );
      })}

        </>
    )
}

export default TodoList;