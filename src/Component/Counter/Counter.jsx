import{useReducer} from 'react'


const Counter=()=>{
    const reducer=(state,action)=>{
        if(action.type==='increment'){
            return state+1;
        }
        else if(action.type==='decrement'){
            return state-1;
        }

    }
   const[count,dispatch]= useReducer(reducer,0)
    return(
        <div>
            <button onClick={()=>dispatch({type:'increment'})}>increment</button>
           <h1>{count}</h1>
            <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>

        </div>
    )
}
export default Counter;
