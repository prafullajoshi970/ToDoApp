import React,{useState} from 'react'

const Todo2 = () => {
    const[str,setStr]=useState('');
    const[todo,setTodo]=useState([]);
     
    const addTodo=(e)=>{
        e.preventDefault();
       setTodo([...todo,str]);
    }
    const deleteTodo=(idx)=>{
      
      const updateTodo=[...todo]
      updateTodo.splice(idx,1)
      setTodo(updateTodo);
    }

  return (
    <div>
        <div>
            <form onSubmit={addTodo}>
                <input onChange={(ele)=>{setStr(ele.target.value)}}></input>
                <button type='submit'>AddTodo</button>
            </form>

        </div>
        <div>
            {todo.length>0&&
            <div>
                {todo.map((ele,idx)=>{
                    return(
                        <li key={idx}>
                            <ul>{ele}</ul>
                            <button onClick={()=>deleteTodo(idx)}>deleteTodo</button>
                        </li>
                    )
                })}
                </div>}
        </div>
    </div>
  )
}

export default Todo2