
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const count1=useSelector((state)=>state.count)
  const dispatch=useDispatch();
  const payload=useSelector((state)=>state.payload=count)
  return (
    <div className="App">
      <h1>{count1}</h1>
      <input type="number" onChange={(e)=>setCount(e.target.value)}></input>
      <button onClick={()=>dispatch({type:"INC"})}>+</button>
      <button onClick={()=>dispatch({type:"DEC"})}>-</button>
      <button onClick={()=>dispatch({type:"ADD"})}>ADD</button>
      <button onClick={()=>dispatch({type:"SUB"})}>SUBTRACT</button>
      <button onClick={()=>dispatch({type:"DIV"})}>DIVIDE</button>
      <button onClick={()=>dispatch({type:"MUL"})}>MULTIPLY</button>
    </div>
  );
}

export default App;
