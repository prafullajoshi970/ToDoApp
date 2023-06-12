import React,{useState} from 'react';

const Todo = () => {
     const[text,setText]=useState('')
     const[todo,setTodo]=useState([])
     const adddata=(e)=>{
        e.preventDefault();
        setTodo([...todo,text]);
console.log(todo)

     }
  return (
    <div>
        <div>
            <form onSubmit={adddata}>
                <input onChange={(e)=>{setText(e.target.value)}}></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
        <div>
            {todo.length>0&&
            <div>
                {todo.map((ele,idx)=>{
                    return(
                        <li key={idx}>
                        <ul>{ele}</ul>
                    </li>
                    )
                   
                })}</div>}
        </div>
    </div>
  )
}

export default Todo