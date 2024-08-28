import { useEffect } from "react";


function TodoInput ({onChange , onClick , value}) {

    return (
        <div className='my-3'>
      <input 
      onChange={onChange}
      className=' border rounded-sm p-2' placeholder='Add Todo'
      value={value} />
      <button
      onClick={onClick}
      disabled={value === ""}
      style={{backgroundColor: value === "" && "gray"}}
       className='p-2 px-3 ml-2 rounded-md bg-sky-500'>Add</button>
    </div>
    )
}

export default TodoInput;