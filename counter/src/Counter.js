
import './Counter.css'
import{ useState } from 'react';
function Counter(){

const [x,setX]= useState(0);
const [y,setY]= useState(0);

return (
  <body>
    <b2>
    <h3 >Counter App</h3>
    <nav>  
<h5>Calculator</h5>
<br/>
    Count X: {x}
    <br/>
    <button onClick={()=> setX(x+1) }className="IX">Increment</button>
    <button onClick={()=> setX(x-1)} className="DX">Decrement</button>
    <br/>
    <button onClick={()=> setX(0)} className="RX">Reset</button>
    <br/>
    Count Y: {y}
    <br/>
    <button onClick={()=> setY(y+1) }className="IY">Increment</button>
    <button onClick={()=> setY(y-1)}className="DY">Decrement</button>
    <br/>
    <button onClick={()=> setY(0)}className="RX">Reset</button>

    </nav>
    </b2>
    </body>
)
}
export default Counter;