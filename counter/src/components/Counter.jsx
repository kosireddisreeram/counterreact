import {useState} from 'react';
import React from 'react';

function Button (){
    const [count,setCount] = useState(1);
    const handleInc = () => {
        setCount(count +1);
    }
    const handleDec = () => {
        setCount(count-1);
    }
    const handleDouble = () =>{
        setCount(count*2);
    }
   
const styles={
    popup:{
        color:count%2===0 ? "green" :"red"
    }
}
    return(
        <>
       
        <h1 style={styles.popup}>{count}</h1>
        <button onClick={() => handleInc()}>increment</button>
        <button onClick={() => handleDec()}>decrement</button>
        <button onClick={()=>handleDouble()}>Double</button>

        </>
    
    );
}
export default Button;