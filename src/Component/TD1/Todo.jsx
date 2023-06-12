import React,{useState} from 'react';
import "./Todo.css"
import { Input,Button,Flex,Heading,Checkbox} from '@chakra-ui/react'

const Todo = () => {
  
    const[str,setStr]=useState('');
    const[todo,setTodo]=useState([]);
   
     
    const addTodo=(e)=>{
     e.preventDefault();
     if(str.trim()!==''){
      const newstr={text:str,completed:false}
      setTodo([...todo,newstr])
      setStr('')
     }
  
    }
     
    const deleteTodo=(idx)=>{
        const updateTodo=[...todo]
        updateTodo.splice(idx,1)
        setTodo(updateTodo)
    }
    const Checktodo=(idx)=>{
      const updateTodo=[...todo]
      updateTodo[idx].completed=!updateTodo[idx].completed;
      setTodo(updateTodo)

    }
   
    
  return (
    <div className='main2'>
        <div className='todo'>
          <Heading color="blue" m='10px auto'>Todo App</Heading>
          <form onSubmit={addTodo}>
            <Flex>
            <Input  placeholder="Enter here!!!" outline="" onChange={(e)=>{setStr(e.target.value)}} m='10px'></Input>
            <Button colorScheme='blue' m='10px' type='submit'>Add Todo</Button>
            </Flex>
           
          </form>
        </div>
        {
            todo.length>0 &&
            <div className='list'>
                {todo.map((ele,idx)=>{
                    return(
                        <li key={idx}>
                         
                          <Checkbox  mr='10px'colorScheme='green'  type='checkbox' checked={ele.completed} onChange={()=>Checktodo(idx)}></Checkbox>
                           <ul style={{textDecoration:ele.completed?"line-through":"none"}}>{ele.text}</ul> &nbsp;&nbsp;&nbsp;
                            <Button colorScheme='red' size='xs'w="60px" ml='100px' className='deletebtn' onClick={()=>deleteTodo(idx)}>Delete</Button>
                          
                     
                           
                        </li>
                    )
                })}
            </div>
        }
        
    </div>
  )
}

export default Todo