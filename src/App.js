import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './action/actionCounter';


const App = () => {
    
const dispatch = useDispatch();
const count = useSelector((state)=>state);

  return(
      
      <div className='counter'>
        <button onClick={()=>dispatch(increment)}>Increment</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement)}>Decrement</button>
      </div>
      
    )
}



export default App;

